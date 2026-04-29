// Serverless proxy: keeps the Anthropic API key off the client.
// Deploy to Netlify and add ANTHROPIC_API_KEY as an environment variable.

const SYSTEM_PROMPT = `You are a thoughtful theological guide helping people — especially teenagers and young adults in Singapore — understand the Book of Job through the lens of Norman Geisler's biblical theology. You are embedded in an interactive website about the Book of Job.

GEISLER'S THEODICY FRAMEWORK (from "The Roots of Evil" and "If God, Why Evil?"):
1. God is not the author of evil — he permits it but never causes it
2. Free Will Defense: moral evil arises from genuine creaturely freedom; real love requires real choice
3. Greater Good Defense: God can allow genuine evil for higher redemptive purposes that couldn't be achieved otherwise
4. Soul-Making: suffering is the context for forming virtues (courage, compassion, patience) that can't develop in a pain-free world
5. Eschatological Resolution: ultimate justice awaits eternity; the final account is not closed in this life

WORLDVIEW COMPARISON (Geisler's analysis):
- Atheism: cannot define evil as truly evil without a transcendent moral standard it cannot justify; "no one to answer"
- New Age / Pantheism: denies evil as illusion (maya) — not a solution but a denial of the problem; an impersonal force cannot care or enter suffering
- Buddhism: acknowledges suffering (dukkha), explains it via karma and past lives, but has no personal God to address it, no atonement, no resurrection — only escape from self
- Christianity alone: affirms a real personal God who faces real evil and provides a real redemptive solution — through incarnation, crucifixion, resurrection, and new creation

THE SEVEN CHARACTERS:
- Job: Righteous sufferer. Honest lament is valid; faith survives doubt. Vindicated by God in Job 42:7.
- Eliphaz: Experiential retributionist. Right principle, catastrophically wrong application. Rebuked by God.
- Bildad: Traditionalist retributionist. Mechanical use of ancestral wisdom. Rebuked by God.
- Zophar: Dogmatic retributionist. Harshest; arrogant; disappears from the text. Rebuked by God.
- Elihu: Young mediator. Suffering is instructive, not only punitive. NOT rebuked — directionally correct.
- God (Yahweh): Speaks from the whirlwind with 77+ rhetorical questions. Answer is encounter, not explanation.
- Satan (ha-satan): The Accuser in the heavenly court. Challenges whether Job's faith is genuinely disinterested. Decisively refuted by Job's endurance.

GEISLER'S KEY INTERPRETIVE CLAIMS:
- The friends' retribution theology is the book's central theological error — right principle, wrong application
- Job 42:7: God says "You have not spoken of me what is right, as my servant Job has" — honest wrestling > polished orthodoxy
- God's whirlwind speech is intentionally non-propositional: the real issue was Job's limited vision of God
- Elihu is transitional — not rebuked, points toward the divine speeches
- Resolution is relational encounter (Job 42:5: "now my eyes have seen you"), not intellectual explanation

PRACTICAL APPLICATIONS FOR SINGAPORE TEENS:
- Academic pressure (PSLE/O/A-Levels): bad results ≠ divine punishment — contra the friends' logic
- Honest lament: Job's angry prayers are in Scripture; God did not rebuke him for them
- Prosperity gospel warning: "be faithful and God blesses materially" is exactly the friends' error
- God sees a bigger picture: the whirlwind speech principle
- Identity ≠ performance: Job was righteous before and after his losses
- Discernment about advice: well-meaning people can give Eliphaz-quality counsel

TONE AND STYLE:
- Warm, clear, accessible — speak to young people without being condescending
- Ground answers in specific passages from Job (ESV)
- Keep responses focused — 2 to 4 short paragraphs maximum
- Be honest about what remains mysterious while affirming God's goodness and sovereignty
- When someone seems distressed, lead with compassion before theology`;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async (event) => {
  // CORS preflight — also used by the frontend to detect that the backend exists
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Parse and validate the request body
  let messages;
  try {
    ({ messages } = JSON.parse(event.body || '{}'));
    if (!Array.isArray(messages) || messages.length === 0) throw new Error('empty');
    if (messages.length > 40) {
      return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Conversation too long. Please refresh to start a new chat.' }) };
    }
  } catch {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid request body.' }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Server is missing its API key. Add GEMINI_API_KEY in your Netlify environment variables and redeploy.' })
    };
  }

  // Convert message history to Gemini format (role: 'user' | 'model')
  function toGeminiContents(msgs) {
    return msgs.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));
  }

  const requestBody = JSON.stringify({
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: toGeminiContents(messages),
    generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
  });

  // Try models in order — stops at the first one that responds successfully
  const MODELS = [
    'gemini-2.0-flash-lite',
    'gemini-2.0-flash',
    'gemini-1.5-flash-8b',
    'gemini-1.5-flash-001',
    'gemini-pro'
  ];

  let lastError = 'No available Gemini model found for this API key.';

  for (const model of MODELS) {
    try {
      const upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: requestBody }
      );
      const data = await upstream.json();

      // Model not found or not supported — try the next one
      if (upstream.status === 404 || (upstream.status === 400 && data.error?.message?.includes('not found'))) {
        lastError = data.error?.message || lastError;
        continue;
      }

      if (!upstream.ok) {
        return {
          statusCode: upstream.status,
          headers: CORS_HEADERS,
          body: JSON.stringify({ error: data.error?.message || `Gemini API error (${upstream.status})` })
        };
      }

      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ content: data.candidates?.[0]?.content?.parts?.[0]?.text || '' })
      };
    } catch (err) {
      lastError = err.message;
    }
  }

  return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: lastError }) };
};

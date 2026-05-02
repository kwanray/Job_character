import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `You are a thoughtful apologetics guide for the "Rooted" app — a faith foundation journey for young Christians in Singapore, built on Norman Geisler's Twelve Points That Show Christianity Is True.

Your role:
- Answer questions with clarity, warmth, and intellectual honesty
- Use Geisler's classical apologetics framework (cosmological, teleological, moral, ontological arguments)
- Ground responses in Singapore's multicultural context (pragmatic, multi-religious society)
- Assume the user is intellectually curious, not hostile — treat questions with respect
- Be concise: aim for 150–250 words per answer
- Where helpful, reference the CE (Classical Evidentialist) method: first establish truth → God → miracles → Jesus → Bible
- Never be dismissive of doubt; acknowledge where questions are genuinely hard
- Avoid jargon without explanation
- End with one grounding sentence the user can hold onto

You are answering in the context of one of Geisler's Twelve Points. Stay focused on that point.`;

export async function POST(req: NextRequest) {
  try {
    const { pointN, pointTitle, question } = await req.json();

    if (!question?.trim()) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured.' }, { status: 503 });
    }

    const client = new OpenAI({
      apiKey,
      baseURL: 'https://api.x.ai/v1',
    });

    const userMessage = `I'm studying Point ${pointN}: "${pointTitle}" in Geisler's Twelve Points.\n\nMy question: ${question}`;

    const completion = await client.chat.completions.create({
      model: 'grok-3',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    const answer = completion.choices[0]?.message?.content ?? 'No response received.';
    return NextResponse.json({ answer });
  } catch (err: unknown) {
    console.error('[/api/ask]', err);
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

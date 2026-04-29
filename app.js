'use strict';

// ============================================================
// CHARACTER DATA
// ============================================================

const characters = [
  {
    id: 'job',
    imgSrc: 'img/job.png',
    name: 'Job',
    role: 'The Righteous Sufferer',
    teaser: 'A man of unmatched integrity who refuses to stay silent — and whose honest wrestling God calls more righteous than polished orthodoxy.',
    verdictClass: 'verdict-vindicated',
    verdictText: 'Vindicated by God',
    cardClass: '',
    worldview: [
      'Job believes in his own innocence. He is not claiming perfection — but he knows his suffering is disproportionate to any sin he has committed. Rather than accepting his friends\' retributive framework, he insists on arguing his case before God directly. Faith expressed through lament, not silence.',
      'Job\'s theology is not comfortable. He accuses God of hiding, of being his enemy, of treating him unjustly — and yet he never finally lets go of God. His complaint is not rebellion; it is trust. Only someone who believes God is real and worth arguing with continues to argue. The cynic simply walks away.',
      'As his speeches progress, Job occasionally tips into self-righteousness (chapters 29–31), painting himself as a paragon of virtue. This is where Elihu\'s correction becomes important. But the core of Job\'s position — that suffering is not always punishment, and that God can be approached with unvarnished honesty — is precisely what God vindicates.'
    ],
    keyPosition: 'Suffering is not always punishment. God can be approached honestly, even in anger and grief. Honest lament is more faithful than performed contentment.',
    verseText: '"Though he slay me, I will hope in him; yet I will argue my ways to his face."',
    verseRef: 'Job 13:15',
    geislerVerdict: 'God\'s direct verdict in Job 42:7 vindicates Job: "You have not spoken of me what is right, as my servant Job has." Geisler sees Job as the model for authentic faith — the kind that doesn\'t pretend everything is fine when it isn\'t. Job\'s honest wrestling, for all its rawness, was more righteous before God than the friends\' tidy, confident orthodoxy. This is one of the most unsettling and freeing claims in all of Scripture.'
  },
  {
    id: 'eliphaz',
    imgSrc: 'img/eliphaz.png',
    name: 'Eliphaz',
    role: 'The Experiential Retributionist',
    teaser: 'The most sophisticated of the three friends — appeals to mystical experience and observation. "I have seen: no innocent person perishes."',
    verdictClass: 'verdict-wrong',
    verdictText: 'Rebuked by God',
    cardClass: '',
    worldview: [
      'Eliphaz is the oldest and most thoughtful of Job\'s three friends. His theology is empirically grounded: he appeals to what he has personally witnessed and to a mysterious night vision he received (Job 4:12–16). His core conviction is that the universe operates on moral cause and effect — the innocent do not truly perish, and suffering reveals hidden sin.',
      'His approach to Job is initially gentle and pastoral (chapters 4–5). He acknowledges Job\'s past ministry to others. But when Job refuses to accept the retributive framework, Eliphaz grows increasingly harsh. By chapter 22, he is fabricating specific sins Job must have committed — taking pledges from the poor, withholding bread from the hungry — with no evidence whatsoever.',
      'Eliphaz represents what happens when a good theological principle (God is holy; sin has consequences) is deployed without pastoral discernment. His theology isn\'t entirely wrong in itself — it fails because he applies it mechanically to a specific situation he cannot fully see.'
    ],
    keyPosition: 'Experience-based retributive theology: suffering reveals sin. The morally upright prosper; the wicked suffer. Job must have sinned — he just hasn\'t admitted it.',
    verseText: '"Remember: who that was innocent has ever perished? Or where were the upright cut off?"',
    verseRef: 'Job 4:7',
    geislerVerdict: 'God rebukes Eliphaz directly in Job 42:7. Geisler\'s analysis: his retribution theology is experientially derived but philosophically inadequate — it cannot account for innocent suffering. More importantly, it commits the fallacy of affirming the consequent: "Sin causes suffering" does not mean "all suffering proves sin." Right principle, catastrophically misapplied to the wrong person at the wrong time.'
  },
  {
    id: 'bildad',
    imgSrc: 'img/bildad.png',
    name: 'Bildad',
    role: 'The Traditionalist',
    teaser: '"Ask the former generations" — what the ancestors believed must be true, and the ancestors say the wicked suffer.',
    verdictClass: 'verdict-wrong',
    verdictText: 'Rebuked by God',
    cardClass: '',
    worldview: [
      'Bildad is the voice of inherited tradition. He does not appeal to personal experience or mystical visions — he appeals to the accumulated wisdom of the generations: "Ask the former generations, and find out what their ancestors learned" (Job 8:8). Truth, for Bildad, is not discovered but received.',
      'His theological framework is straightforward: God is just; Job is suffering; therefore Job (or his children) sinned. His first speech (chapter 8) promises that if Job is pure and upright, God will restore him. But this conditional mercy hardens across the dialogues.',
      'What is telling about Bildad is the progressive shortening of his speeches. He contributes three chapters in round one (ch. 8), one chapter in round two (ch. 18), and only five verses in round three (ch. 25) — as if even he is running out of ammunition against Job\'s mounting counter-arguments. The tradition he has inherited simply cannot adequately address what he is witnessing.'
    ],
    keyPosition: 'Traditional retributive orthodoxy drawn from ancestral wisdom. God is perfectly just; therefore visible suffering proves moral failure. Repentance brings restoration.',
    verseText: '"Does God pervert justice? Or does the Almighty pervert what is right?"',
    verseRef: 'Job 8:3',
    geislerVerdict: 'Rebuked alongside Eliphaz in Job 42:7. Geisler notes that Bildad represents the danger of inherited theology applied without discernment or compassion. His progressive silence in later chapters hints that he senses his framework is cracking. Correct that God is just; deeply wrong that justice always manifests as immediate, visible, individual retribution.'
  },
  {
    id: 'zophar',
    imgSrc: 'img/zophar.png',
    name: 'Zophar',
    role: 'The Dogmatist',
    teaser: 'The harshest of the three — no appeals to experience or tradition, just blunt assertion. Job deserves worse than he is getting.',
    verdictClass: 'verdict-wrong',
    verdictText: 'Rebuked by God',
    cardClass: '',
    worldview: [
      'Zophar is the most theologically brutal of the three friends. He does not invoke personal mystical experience like Eliphaz, or the authority of the ancients like Bildad. He simply asserts. His opening speech (chapter 11) declares that God knows Job\'s hidden wickedness — and that God is actually punishing Job less than he deserves: "Know that God has even forgotten some of your sin" (Job 11:6).',
      'Where Eliphaz was gentle at first and Bildad was measured, Zophar leads with condemnation. His theology has no room for mystery, no capacity for pastoral nuance, no acknowledgement that he might be missing something. He is the embodiment of theology deployed as a weapon — using correct categories (God\'s omniscience, human sinfulness) to wound rather than to heal.',
      'Zophar is conspicuously absent from the third cycle of speeches entirely. He contributes to the first two rounds (chapters 11 and 20) and then disappears. This literary silence likely signals that even Zophar recognises, at some level, that he has nothing defensible left to say.'
    ],
    keyPosition: 'Dogmatic retributive orthodoxy at its harshest. God\'s wisdom infinitely exceeds Job\'s — and that wisdom says Job is guilty. No mercy, no mystery, no pastoral care.',
    verseText: '"Oh, how I wish that God would speak... Know that God has even forgotten some of your sin."',
    verseRef: 'Job 11:5–6',
    geislerVerdict: 'Rebuked by God in Job 42. Geisler identifies Zophar as the starkest example of what Geisler calls the pastoral misuse of theology — wielding correct doctrinal categories as weapons against the suffering. The fact that Zophar vanishes from the third round of speeches and is not mentioned in Job\'s prayer of intercession (42:9) may signal the depth of his failure. His confidence was inversely proportional to his insight.'
  },
  {
    id: 'elihu',
    imgSrc: 'img/elihu.png',
    name: 'Elihu',
    role: 'The Mediator',
    teaser: 'The young man who waits — and then advances the theology further than anyone. Not rebuked by God. A step toward the truth.',
    verdictClass: 'verdict-partial',
    verdictText: 'Not Rebuked',
    cardClass: '',
    worldview: [
      'Elihu ben Barachel is younger than the other three and waits out of respect for their age (Job 32:4). When their arguments collapse, he can no longer hold back. He rebukes both the three friends — for condemning Job without adequate reason — and Job — for claiming, in effect, that God has been unjust to him.',
      'Elihu\'s theological advance is significant: he moves beyond the purely retrospective logic of retribution (you suffer because you sinned in the past) to a proleptic understanding of suffering (God may use suffering to speak before you go further down a destructive path). In Job 33:14–18, he describes God as speaking through dreams, through illness, through suffering — to turn a person aside from destruction, not merely to punish past failure.',
      'This reframes suffering as potentially instructive rather than exclusively punitive — a genuine step forward. Elihu also uses the word "ransom" (Job 33:24) in a context that hints at a mediator who can deliver someone from the pit, prefiguring later redemptive theology. He is not perfect — he still presumes to explain Job\'s specific case without the full picture — but his direction is right.'
    ],
    keyPosition: 'Suffering can be instructive and formative, not only punitive. God uses hardship to warn, redirect, and refine before worse comes. God is just and speaks through trials.',
    verseText: '"For God speaks in one way, and in two, though man does not perceive it... to turn man aside from his deed and conceal pride from a man."',
    verseRef: 'Job 33:14, 17',
    geislerVerdict: 'Critically, God does not rebuke Elihu in chapter 42 — only the three friends. Geisler interprets this as a sign that Elihu\'s theology is directionally correct, even if incomplete. He is the book\'s transitional figure — theologically between the failed retributionism of the three friends and the divine revelation from the whirlwind. His closing speech, with its language of God thundering in creation, directly prepares for the voice in chapter 38.'
  },
  {
    id: 'god',
    imgSrc: 'img/god.png',
    name: 'God (Yahweh)',
    role: 'The Sovereign Creator',
    teaser: 'His answer is not an explanation — it is an encounter. "Where were you when I laid the foundation of the earth?"',
    verdictClass: 'verdict-sovereign',
    verdictText: 'The Final Word',
    cardClass: 'char-god',
    sectionTitle: 'Divine Perspective',
    worldview: [
      'God speaks from the whirlwind in chapters 38–41 — and what he says defies every expectation. He does not explain the cosmic wager to Job. He does not justify his actions. He does not offer a philosophical theodicy. Instead, he asks questions: seventy-seven rhetorical questions about the foundations of the earth, the ordinances of the stars, the rain and the lightning, the wild ox and the war horse.',
      '"Where were you when I laid the foundation of the earth? Tell me, if you have understanding" (Job 38:4). The point is not humiliation — it is expansion. Job\'s framework for understanding his suffering is too small. God\'s response invites him into a far larger view of reality, one in which God\'s governance of all things — including chaos itself, symbolised by Behemoth and Leviathan — is the context in which Job\'s suffering must be understood.',
      'The resolution comes not through argument but through encounter. Job\'s response in 42:5 says everything: "My ears had heard of you, but now my eyes have seen you." Not: "Now I understand why I suffered." But: "Now I have seen you." The crisis is resolved by presence, not propositions.'
    ],
    keyPosition: 'Sovereign, transcendent, personally engaged. The answer to suffering is not an explanation but an encounter with the living God. Bigger view of God = greater capacity to bear what cannot be explained.',
    verseText: '"Where were you when I laid the foundation of the earth? Tell me, if you have understanding."',
    verseRef: 'Job 38:4',
    geislerVerdict: 'Geisler\'s central interpretive claim: God\'s whirlwind speech is intentionally non-propositional because the real problem was never primarily intellectual — it was the adequacy of Job\'s vision of God. Once that is enlarged through direct encounter, the suffering can be borne. God vindicates Job against the friends, restores him doubly, and accepts Job\'s intercession on their behalf. The epilogue demonstrates God\'s ultimate redemptive intention.'
  },
  {
    id: 'satan',
    imgSrc: 'img/satan.png',
    name: 'Satan',
    role: 'The Cynical Accuser',
    teaser: '"Does Job fear God for nothing?" — The adversary\'s challenge is the engine of the entire book. The narrative proves him catastrophically wrong.',
    verdictClass: 'verdict-refuted',
    verdictText: 'Refuted by Job',
    cardClass: 'char-satan',
    sectionTitle: "Satan's Accusation",
    worldview: [
      'The Hebrew term here is "ha-satan" — the accuser or adversary — a prosecutorial figure in the heavenly court, not the fully developed devil of later New Testament theology. His function in the narrative is to challenge the authenticity of Job\'s faith on the most cynical possible grounds: "Does Job fear God for nothing?" (1:9).',
      'His argument is philosophically serious: all religious devotion, he suggests, is ultimately self-interested. Job loves God because God has built a hedge of protection around him, blessed his family, multiplied his possessions. Remove the hedge — remove the blessings — and Job will curse God to his face. Faith, on this view, is always transactional. The adversary is essentially making the claim that disinterested love of God does not exist; that all devotion is at root a sophisticated self-preservation strategy.',
      'The narrative answers him decisively. Job loses everything — wealth, children, health — and in Job 2:10 he still says: "Shall we accept good from God, and not trouble?" The adversary\'s hypothesis is falsified. Job curses the day of his birth (chapter 3), argues bitterly with God, and comes close to the edge — but he never finally curses God. The existence of disinterested faith is proved.'
    ],
    keyPosition: 'Cynical transactionalism: all religious faith is self-interested. Love God only because of what he gives. Remove the blessings and the faith collapses. Authentic devotion is impossible.',
    verseText: '"Does Job fear God for nothing? Have you not put a hedge around him and his household and everything he has?"',
    verseRef: 'Job 1:9–10',
    geislerVerdict: 'Geisler reads the adversary\'s challenge as philosophically significant beyond its narrative function. It anticipates modern critiques of religious faith as merely instrumental — a psychological coping mechanism, a socially enforced custom, a rational calculation of divine patronage. Job\'s endurance under total loss is the narrative\'s direct rebuttal. Disinterested faith — loving God for who he is, not what he gives — exists. Job demonstrated it. The accuser\'s cynicism was wrong.'
  }
];

// ============================================================
// RENDER CHARACTER CARDS
// ============================================================

function renderCards() {
  const grid = document.getElementById('characterGrid');
  if (!grid) return;

  grid.innerHTML = characters.map(char => `
    <article
      class="char-card ${char.cardClass}"
      data-id="${char.id}"
      tabindex="0"
      role="button"
      aria-label="Explore ${char.name}"
    >
      <div class="char-portrait">
        <img src="${char.imgSrc}" alt="${char.name}" loading="lazy">
      </div>
      <div class="char-body">
        <div class="char-name">${char.name}</div>
        <div class="char-role">${char.role}</div>
        <p class="char-teaser">${char.teaser}</p>
        <div class="char-verdict-tag ${char.verdictClass}">${char.verdictText}</div>
      </div>
      <div class="char-card-footer">
        <span class="char-expand-hint">Click to explore</span>
        <span class="char-expand-arrow" aria-hidden="true">→</span>
      </div>
    </article>
  `).join('');

  grid.addEventListener('click', e => {
    const card = e.target.closest('.char-card');
    if (card) openModal(card.dataset.id);
  });

  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.char-card');
      if (card) { e.preventDefault(); openModal(card.dataset.id); }
    }
  });
}

// ============================================================
// MODAL
// ============================================================

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');
let lastFocused = null;

function openModal(id) {
  const char = characters.find(c => c.id === id);
  if (!char) return;

  lastFocused = document.activeElement;

  const worldviewHTML = char.worldview
    .map(p => `<p>${p}</p>`)
    .join('');

  modalBody.innerHTML = `
    <div class="modal-avatar"><img src="${char.imgSrc}" alt="${char.name}"></div>
    <div class="modal-tag">${char.role}</div>
    <h2 class="modal-name" id="modalName">${char.name}</h2>
    <p class="modal-role">${char.role}</p>

    <div class="modal-section">
      <div class="modal-section-title">${char.sectionTitle || 'Worldview'}</div>
      ${worldviewHTML}
    </div>

    <div class="modal-verse">
      <p class="modal-verse-text">${char.verseText}</p>
      <p class="modal-verse-ref">— ${char.verseRef}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Theological Position</div>
      <p>${char.keyPosition}</p>
    </div>

    <div class="modal-verdict">
      <div class="modal-verdict-label">Geisler's Assessment</div>
      <p>${char.geislerVerdict}</p>
    </div>
  `;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Focus the close button
  requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
});

// ============================================================
// ACCORDION
// ============================================================

function initAccordion() {
  const accordion = document.getElementById('evilAccordion');
  if (!accordion) return;

  accordion.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const panel = item.querySelector('.accordion-panel');
      const isOpen = item.classList.contains('open');

      // Close all
      accordion.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
        const p = i.querySelector('.accordion-panel');
        p.style.maxHeight = '0';
        i.querySelector('.accordion-btn').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        // Read scrollHeight before any display change — no hidden attr, so this works
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ============================================================
// TABS
// ============================================================

function initTabs() {
  const tabContainer = document.querySelector('.tabs');
  if (!tabContainer) return;

  const buttons = tabContainer.querySelectorAll('.tab-btn');
  const panels = tabContainer.querySelectorAll('.tab-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', '');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const panel = document.getElementById('tab-' + target);
      if (panel) {
        panel.classList.add('active');
        panel.removeAttribute('hidden');
      }
    });
  });
}

// ============================================================
// STICKY NAV
// ============================================================

function initNav() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initAccordion();
  initTabs();
  initNav();
  initChat();
});

// ============================================================
// CHAT ASSISTANT
// ============================================================

const CHAT_SYSTEM_PROMPT = `You are a thoughtful theological guide helping people — especially teenagers and young adults in Singapore — understand the Book of Job through the lens of Norman Geisler's biblical theology. You are embedded in an interactive website about the Book of Job.

GEISLER'S THEODICY FRAMEWORK (from "The Roots of Evil" and "If God, Why Evil?"):
1. God is not the author of evil — he permits it but never causes it
2. Free Will Defense: moral evil arises from genuine creaturely freedom; real love requires real choice
3. Greater Good Defense: God can allow genuine evil for higher redemptive purposes that couldn't be achieved otherwise
4. Soul-Making: suffering is the context for forming virtues (courage, compassion, patience) that can't develop in a pain-free world
5. Eschatological Resolution: ultimate justice awaits eternity; the final account is not closed in this life

WORLDVIEW COMPARISON (Geisler's analysis):
- Atheism: cannot define evil as truly evil without a transcendent moral standard it cannot justify; "no one to answer"
- New Age / Pantheism: denies evil as illusion (maya) — this is not a solution but a denial of the problem; an impersonal force cannot care or enter suffering
- Buddhism: acknowledges suffering (dukkha), explains it via karma and past lives, but has no personal God to address it, no atonement, no resurrection — only escape from self
- Christianity alone: affirms a real personal God who faces real evil and provides a real redemptive solution — through incarnation (God enters suffering), crucifixion (God bears evil's weight), resurrection (evil defeated), new creation (evil ended)

THE SEVEN CHARACTERS:
- Job: Righteous sufferer. Believes in his innocence. Laments honestly and angrily. Refuses friends' retributive framework. Occasionally tips into self-righteousness (chs 29-31) but core position is valid. Vindicated by God in Job 42:7.
- Eliphaz: Experiential retributionist. Oldest and most sophisticated friend. Appeals to mystical vision and personal observation. "No innocent person truly perishes." Gentle at first, fabricates sins by ch. 22. Right principle, catastrophically wrong application. Rebuked by God.
- Bildad: Traditionalist retributionist. Appeals to ancestral wisdom. Speeches get shorter across the three rounds (suggesting even he runs out of arguments). Rebuked by God.
- Zophar: Dogmatic retributionist. Harshest — no pastoral nuance, leads with condemnation, disappears from the third cycle entirely. Rebuked. Uses correct categories (God's omniscience, human sinfulness) as weapons.
- Elihu: Young mediator. Waited out of respect. Rebukes both friends (for condemning Job wrongly) and Job (for implying God was unjust). Key advance: suffering is instructive, not only punitive — God uses it to warn and redirect. Uses word "ransom" (Job 33:24). Prepares for divine speeches. NOT rebuked in ch. 42 — directionally correct.
- God (Yahweh): Speaks from the whirlwind with 77+ rhetorical questions (chs 38-41). Does not explain the wager. Expands Job's frame of reference. Answer is encounter, not explanation. Vindicates Job, rebukes friends, accepts Job's intercession for them. Restores Job doubly.
- Satan (ha-satan): The Accuser in the heavenly court (prosecutorial function, not the fully developed NT devil). Challenge: "Does Job fear God for nothing?" — all religious faith is ultimately self-interested. Decisively refuted by Job's endurance under total loss.

GEISLER'S KEY INTERPRETIVE CLAIMS:
- The friends' retribution theology is the book's central theological error — right principle, wrong application
- Job 42:7: God says "You have not spoken of me what is right, as my servant Job has" — honest wrestling > polished orthodoxy
- God's whirlwind speech is intentionally non-propositional: the real problem was Job's limited vision of God, not lack of information
- Elihu is transitional — not rebuked, points toward the divine speeches
- Resolution is relational encounter (Job 42:5: "now my eyes have seen you"), not intellectual explanation

PRACTICAL APPLICATIONS FOR SINGAPORE TEENS:
- Academic pressure (PSLE/O/A-Levels): bad results ≠ divine punishment — contra the friends' logic
- Honest lament: Job's angry prayers are in Scripture; God did not rebuke Job for them
- Prosperity gospel warning: "be faithful and God blesses materially" is exactly the friends' error
- God sees a bigger picture: the whirlwind speech principle
- Identity ≠ performance: Job was righteous before and after his losses; worth doesn't depend on achievement
- Discernment about advice: well-meaning people can give Eliphaz-quality counsel

TONE AND STYLE:
- Warm, clear, accessible — speak to young people without being condescending
- Ground answers in specific passages from Job (ESV)
- Keep responses focused — 2 to 4 short paragraphs maximum
- Be honest about what remains mysterious while affirming God's goodness and sovereignty
- When someone seems distressed or struggling, lead with compassion before theology
- Do not speculate beyond the text or Geisler's framework`;

const chatState = {
  history: [],
  isTyping: false,
  backendMode: null  // 'proxy' | 'direct' | null (unknown)
};

// Lightweight probe: send OPTIONS to /api/chat.
// The Netlify function returns 200 for OPTIONS; a missing endpoint returns 404.
async function probeBackend() {
  try {
    const r = await fetch('/api/chat', { method: 'OPTIONS' });
    chatState.backendMode = (r.status === 200) ? 'proxy' : 'direct';
  } catch {
    chatState.backendMode = 'direct';
  }
}

function initChat() {
  const toggle    = document.getElementById('chatToggle');
  const sidebar   = document.getElementById('chatSidebar');
  const closeBtn  = document.getElementById('chatClose');
  const backdrop  = document.getElementById('chatBackdrop');
  const apiSave   = document.getElementById('chatApiSave');
  const apiInput  = document.getElementById('chatApiKey');
  const sendBtn   = document.getElementById('chatSend');
  const textarea  = document.getElementById('chatInput');
  const setup     = document.getElementById('chatSetup');
  const inputArea = document.getElementById('chatInputArea');
  const suggsWrap = document.getElementById('chatSuggestions');

  if (!toggle) return;

  // Probe for backend proxy, then configure UI accordingly
  probeBackend().then(() => {
    if (chatState.backendMode === 'proxy') {
      // Backend handles the key — no input needed
      setup.style.display = 'none';
      inputArea.classList.add('active');
    } else {
      // Direct mode: show key input unless a key is already stored
      if (sessionStorage.getItem('job_chat_key')) {
        setup.style.display = 'none';
        inputArea.classList.add('active');
      }
    }
  });

  toggle.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeChatSidebar() : openChatSidebar();
  });
  closeBtn.addEventListener('click', closeChatSidebar);
  backdrop.addEventListener('click', closeChatSidebar);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) closeChatSidebar();
  });

  // API key save — only needed in direct (no-backend) mode
  // Google AI Studio keys start with AIza
  apiSave.addEventListener('click', () => {
    const key = apiInput.value.trim();
    if (!key.startsWith('AIza')) {
      apiInput.classList.add('invalid');
      return;
    }
    apiInput.classList.remove('invalid');
    sessionStorage.setItem('job_chat_key', key);
    setup.style.display = 'none';
    inputArea.classList.add('active');
    textarea.focus();
  });
  apiInput.addEventListener('keydown', e => { if (e.key === 'Enter') apiSave.click(); });
  apiInput.addEventListener('input', () => apiInput.classList.remove('invalid'));

  // Suggestion pills
  if (suggsWrap) {
    suggsWrap.addEventListener('click', e => {
      const pill = e.target.closest('.chat-sugg');
      if (!pill) return;
      const q = pill.dataset.q;
      suggsWrap.remove();
      const ready = chatState.backendMode === 'proxy' || sessionStorage.getItem('job_chat_key');
      if (ready) {
        textarea.value = q;
        submitChatMessage();
      } else {
        textarea.value = q;
        apiInput.focus();
      }
    });
  }

  // Send
  sendBtn.addEventListener('click', submitChatMessage);
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitChatMessage(); }
  });
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  });
}

function openChatSidebar() {
  const sidebar  = document.getElementById('chatSidebar');
  const backdrop = document.getElementById('chatBackdrop');
  const toggle   = document.getElementById('chatToggle');
  sidebar.classList.add('open');
  backdrop.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
}

function closeChatSidebar() {
  const sidebar  = document.getElementById('chatSidebar');
  const backdrop = document.getElementById('chatBackdrop');
  const toggle   = document.getElementById('chatToggle');
  sidebar.classList.remove('open');
  backdrop.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

function chatEscape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatChatMarkdown(text) {
  const paragraphs = text.split(/\n\n+/);
  return paragraphs
    .filter(p => p.trim())
    .map(p => {
      const html = p
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return `<p>${html}</p>`;
    })
    .join('');
}

function addTypingIndicator() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg assistant';
  div.id = 'chatTyping';
  div.innerHTML = '<div class="chat-bubble"><div class="typing-dots"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTypingIndicator() {
  document.getElementById('chatTyping')?.remove();
}

async function submitChatMessage() {
  if (chatState.isTyping) return;

  const textarea  = document.getElementById('chatInput');
  const sendBtn   = document.getElementById('chatSend');
  const msgs      = document.getElementById('chatMessages');
  const text      = textarea.value.trim();
  if (!text) return;

  textarea.value = '';
  textarea.style.height = 'auto';

  // User bubble
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user';
  userDiv.innerHTML = `<div class="chat-bubble"><p>${chatEscape(text)}</p></div>`;
  msgs.appendChild(userDiv);
  msgs.scrollTop = msgs.scrollHeight;

  chatState.history.push({ role: 'user', content: text });
  chatState.isTyping = true;
  sendBtn.disabled = true;
  addTypingIndicator();

  let assistantBubble = null;
  let fullText = '';

  await callClaudeStream(
    chatState.history,
    chunk => {
      fullText += chunk;
      if (!assistantBubble) {
        removeTypingIndicator();
        const wrap = document.createElement('div');
        wrap.className = 'chat-msg assistant';
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        wrap.appendChild(bubble);
        msgs.appendChild(wrap);
        assistantBubble = bubble;
      }
      assistantBubble.innerHTML = formatChatMarkdown(fullText);
      msgs.scrollTop = msgs.scrollHeight;
    },
    () => {
      removeTypingIndicator();
      chatState.history.push({ role: 'assistant', content: fullText });
      chatState.isTyping = false;
      sendBtn.disabled = false;
      textarea.focus();
    },
    errMsg => {
      removeTypingIndicator();
      const errDiv = document.createElement('div');
      errDiv.className = 'chat-msg error';
      errDiv.innerHTML = `<div class="chat-bubble"><p>${chatEscape(errMsg)}</p></div>`;
      msgs.appendChild(errDiv);
      msgs.scrollTop = msgs.scrollHeight;
      chatState.history.pop();
      chatState.isTyping = false;
      sendBtn.disabled = false;
    }
  );
}

// Word-by-word reveal of a full string, simulating a streaming effect
async function simulateStream(text, onChunk, onDone) {
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    onChunk((i > 0 ? ' ' : '') + words[i]);
    // Small pause every 5 words so it feels natural
    if (i % 5 === 4) await new Promise(r => setTimeout(r, 18));
  }
  onDone();
}

async function callClaudeStream(messages, onChunk, onDone, onError) {
  // ── Mode 1: backend proxy (Netlify function, key stays server-side) ──────
  if (chatState.backendMode === 'proxy') {
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
      });
      const data = await resp.json();
      if (!resp.ok) { onError(data.error || `Server error (${resp.status})`); return; }
      await simulateStream(data.content || '', onChunk, onDone);
    } catch {
      onError('Could not reach the chat server. Please try again.');
    }
    return;
  }

  // ── Mode 2: direct browser → Gemini (local dev, user provides key) ──────
  const key = sessionStorage.getItem('job_chat_key');
  if (!key) { onError('No API key found. Please enter your Google AI Studio API key below.'); return; }

  function toGeminiContents(msgs) {
    return msgs.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));
  }

  let response;
  try {
    response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: CHAT_SYSTEM_PROMPT }] },
          contents: toGeminiContents(messages),
          generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
        })
      }
    );
  } catch {
    onError(
      'Could not reach the Gemini API. ' +
      'If running locally as a file:// URL, serve with a local server instead ' +
      '(e.g. npx serve . in the project folder).'
    );
    return;
  }

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    if (response.status === 400 && err.error?.message?.includes('API key')) {
      onError('Invalid API key — please clear and re-enter your Google AI Studio key (starts with AIza).');
    } else if (response.status === 429) {
      onError('Rate limit reached. Please wait a moment and try again.');
    } else {
      onError(err.error?.message || `Gemini API error (HTTP ${response.status}). Please try again.`);
    }
    return;
  }

  // Parse Gemini SSE stream — each event contains a text delta
  try {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        try {
          const ev = JSON.parse(data);
          const text = ev.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) onChunk(text);
        } catch (_) {}
      }
    }
    onDone();
  } catch {
    onError('Connection interrupted while streaming. Please try again.');
  }
}

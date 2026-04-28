# The Book of Job — Suffering, Sovereignty & Faith

An interactive static website exploring the biblical book of Job through the philosophy and theology of **Norman Geisler**. Designed for Christian teenagers in Singapore and anyone wrestling with suffering and faith.

---

## What This Site Does

**Characters** — Click any of the seven characters to open a detailed panel covering their theological position, a key Bible verse, and Norman Geisler's assessment of whether they got it right.

| Character | Role | Modal Section |
|---|---|---|
| Job | The Righteous Sufferer | Worldview |
| Eliphaz | The Experiential Retributionist | Worldview |
| Bildad | The Traditionalist | Worldview |
| Zophar | The Dogmatist | Worldview |
| Elihu | The Mediator | Worldview |
| God (Yahweh) | The Sovereign Creator | Divine Perspective |
| Satan (Ha-Satan) | The Cynical Accuser | Satan's Accusation |

**Problem of Evil** — A five-point accordion drawn from Geisler's *The Roots of Evil* and *If God, Why Evil?*, covering the logical and evidential problem, the free will defense, the greater good defense, soul-making theodicy, and eschatological resolution.

**Geisler's Exposition** — A tabbed breakdown of Job's literary structure, why the three friends were wrong, Elihu's transitional role, and God's answer from the whirlwind.

**For Teens in Singapore** — Six application cards connecting Job's themes to academic pressure, family expectations, faith questions, suffering without answers, the prosperity gospel, and identity.

---

## Theological Framework

All content draws on the work of **Norman Geisler** (1932–2019), Christian philosopher, apologist, and theologian.

Primary sources referenced:
- *The Roots of Evil* (1978, co-authored with Jeff Amano)
- *If God, Why Evil?* (2011)
- *Systematic Theology*, Vol. 2

Bible quotations use the **English Standard Version (ESV)**.

### Key Interpretive Claims

- The three friends (Eliphaz, Bildad, Zophar) committed the error of applying a generally valid theological principle — retributive justice — mechanically to a specific person without warrant. God rebukes them directly in Job 42:7.
- Elihu advances the conversation by proposing that suffering can be *instructive* and *formative*, not only punitive. He is not rebuked in the epilogue, signalling his theology is directionally correct.
- God's speech from the whirlwind (chs. 38–41) is intentionally non-propositional. The real need was not an intellectual explanation but an adequate vision of God. Job's transformation in 42:5 — "now my eyes have seen you" — confirms this.
- The adversary's cynical challenge ("Does Job fear God for nothing?") is the narrative engine of the book. Job's endurance falsifies the claim that all faith is transactional.

---

## Technology

Pure static site — no build tools, no framework, no server required.

| File | Purpose |
|---|---|
| `index.html` | All markup and page structure |
| `style.css` | Dark navy design, responsive layout |
| `app.js` | Character data, modal, accordion, tabs, nav |

**Fonts:** Playfair Display + Poppins via Google Fonts CDN  
**Dependencies:** None beyond Google Fonts

---

## Running Locally

Open `index.html` directly in any modern browser:

```
file:///path/to/Job_character/index.html
```

No installation or build step needed.

---

## Deploying

Since the entire site is three static files, deployment is straightforward:

**GitHub Pages** — Push to GitHub, enable Pages from the repository settings. Live at `https://<username>.github.io/Job_character`.

**Netlify** — Drag the project folder onto [netlify.com/drop](https://netlify.com/drop).

**Vercel** — Run `npx vercel` in the project directory.

---

## A Note on Language

- **God (Yahweh)** — The modal section is titled *Divine Perspective* rather than "worldview," since worldview as a category applies primarily to human reasoning. God's speech from the whirlwind is not a philosophical system but a revelation.
- **Satan (Ha-Satan)** — The modal section is titled *Satan's Accusation*. In Job, ha-satan is a prosecutorial figure in the heavenly court making a specific legal challenge, not presenting a coherent worldview.

# Invent a Word We Need — Doorjog

[![make.fun · u-deranalabs-invent-a-word-we-need-17a020e0](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Yetu89/invent-a-word-01/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Yetu89/invent-a-word-01/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [make.fun](https://make.fun) bounty **Invent a Word We Need**
([bounty page](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)):
coin one new English word and define it in a single clear line of at
most 140 characters. Free entry.

## The word

> Doorjog — the awkward half-run of someone you held the door for from too far away.

82 characters, one line, no trailing newline.

## Why this word

Everyone has lived both sides of it: the holder, stuck smiling while
a stranger hurries toward them, and the held-for, forced into a little
trot by politeness. No existing English word names that moment. The
coinage says it in one breath — door + jog, the jog the door caused —
and it is sayable, spellable and memorable on first hearing.

The word was picked from four candidates in round 2 and graded 9/10 by
Grok (grok-4.3), which called it a precise social awkwardness no
existing term covers, with a fresh, jog-evoking formation that lands
immediately. The other candidates scored lower: Lockdoubt, the nagging
doubt halfway down the street that you locked the front door (8/10),
Savehoard, the ever-growing pile of saved posts and videos you will
never open again (7/10), and Sockorphan, the lone sock left after its
partner vanishes in the wash (6/10).

## Novelty check

Each candidate was verified against web search before grading, and the
round-1 words (Roomnesia, Miswave, Budbleed, Menuloop) were excluded.
Doorjog is new: no use of the word with this meaning exists anywhere
(the only near hit is hyphenated "door-jog" in one apartment listing,
meaning jogging out of your front door for exercise — a different
sense). Lockdoubt is new as a string, with no single-word name for the
"did I lock the door?" doubt. Savehoard is a new string, but the
behaviour is already named "digital hoarding" and the "collector's
fallacy". Sockorphan is unused as a string, but the concept is already
called an "orphan sock" / "odd sock".

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the entry to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/invent-a-word-out node main.ts
```

Before writing, the program checks the text four ways — length in code
points (1–140 characters), a single line with no line breaks, no
leading or trailing whitespace, and valid UTF-8 — and reports every
violation at once instead of failing on the first one it finds.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT

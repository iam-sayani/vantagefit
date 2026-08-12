# Step challenge format illustrations

`format-*.webp` are the five illustrations chosen for the format cards on
`/step-challenges`, recoloured onto the Vantage Fit brand palette.

| file | card | brand hues |
| --- | --- | --- |
| `format-race.webp` | 01 Race | coral, slate, orange |
| `format-streak.webp` | 02 Streak | teal, coral, orange |
| `format-journey.webp` | 03 Journey | teal, coral, orange |
| `format-marathon.webp` | 04 E-Marathon | deep red, orange, teal |
| `format-custom.webp` | 05 Custom multi-week | deep teal, slate, coral |

Each is a whole card background: a tall field with the figures standing on the
floor and copy space above them, which is why the card holds an `aspect-ratio`
close to the artboard's and anchors the artwork to its bottom edge. Re-exporting
one at a different proportion will push its figure up into the heading.

The recolour clusters each source's hue families and maps them onto the brand
hues in size order, holding skin, near-neutrals and ink out of the remap and
preserving each pixel's luminance so the drawing's light and shade survive. The
script that does it is not checked in; it reads the original artboards from the
designer's exports, and these outputs are the artefact.

The earlier `challenge-*.svg` set (unDraw, https://undraw.co/license) was
replaced on 2026-08-12 and is no longer referenced.

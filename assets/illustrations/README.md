# Step challenge format illustrations

`format-*.webp` are the five illustrations chosen for the format cards on
`/step-challenges`, recoloured onto the Vantage Fit brand palette.

Each file is named for what it draws, not for the card it sits on: the cards
have been reshuffled once already, and a file called `format-race.webp` sitting
on the Custom card is how that goes wrong quietly.

| file | draws | card | brand hues |
| --- | --- | --- | --- |
| `format-tape.webp` | a runner breaking the finish tape | 01 Race | deep red, orange, teal |
| `format-stairs.webp` | the next step up a flight of stairs | 02 Streak | teal, coral, orange |
| `format-map.webp` | a traveller on a mapped route | 03 Journey | teal, coral, orange |
| `format-crowd.webp` | a field of runners setting off | 04 E-Marathon | deep teal, slate, coral |
| `format-pair.webp` | two runners racing neck and neck | 05 Custom multi-week | coral, slate, orange |

Each is a whole card background: a tall field with the figures standing on the
floor and copy space above them, which is why the card holds an `aspect-ratio`
close to the artboard's and anchors the artwork to its bottom edge. Re-exporting
one at a different proportion, or growing the copy block much past 30% of the
card, will push a figure up into the heading.

The recolour clusters each source's hue families and maps them onto the brand
hues in size order, holding skin, near-neutrals and ink out of the remap and
preserving each pixel's luminance so the drawing's light and shade survive. The
whole set is then pulled back to 70% of full brand strength, and 2.2% is trimmed
off each side of the artboard because several exports carry a few pixels of a
foreign colour out there, which otherwise reads as a stripe of the original
palette down the edge of the card.

The script that does it is not checked in; it reads the original artboards from
the designer's exports, and these outputs are the artefact.

The earlier `challenge-*.svg` set (unDraw, https://undraw.co/license) was
replaced on 2026-08-12 and is no longer referenced.

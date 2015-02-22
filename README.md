# Pentaphone
In-browser music performance tool using React.js and the Web Audio API.

> **NOTE** The behavior below is how the Pentaphone *will* work. It is very early alpha. These notes are to guide my development and keep my eyes on the prize.

## What is a Pentaphone? How do I play one?

The pentatonic scale (the first, second, third, fifth and sixth notes of a scale) always sound good with their associated chord.

The three primary chords in diatonic (Western) harmony are the ones based on the first, fourth and fifth notes of the key.

The pentaphone puts those five notes in your right hand (spacebar = 1, j = 2, k = 3, l = 5, ; = 6) and those three chords in your left (a = I, s = IV, d = V). Feeling more adventurous? Try relative minor chords (q = vi, w = ii, e = iii)!

When you play one of the LH chords, the notes played by the RH keys shift to the notes that match that chord.

This means you can play any chord with your LH, then play any notes in the right hand any it will always sound good! Instant musical genius!

## To Do

* DONE Skeletal index.html with React components
* DONE Setup NPM
* DONE Create GH page to play on
* DONE Gulp + Browserify + Watchify to reactify/bundle JSX and React
* DONE Display Elements on page
* DONE Element changes visual state based on key being pressed
* DONE Toggle element state based on key position
* DONE Play pentatonic notes when key down, stop when key released
* DONE Extract sound into dedicated class
* DONE Allow the same note to be played > 1 time
* DONE Play major chords when a,s,d pressed
* DONE Play relative minor chords when q, w, e pressed
* Pressing a shifter changes the pentatonic, which stays there until shifted again
* Select waveform for tone
* Visual elements on the page trigger by the playing: shifter changes palette, notes splash complementary colors across screen
* Select palette for visuals
* Rhythm section: drums and bass
* Select the key signature (bass adjusts)
* Choose closed, open, inverted or root notes for LH
* Add basic effects, ADSR, etc
* Number keys trigger rhythms, allowing shifts within songs
* Rhythms trigger visuals, too
* Instructions show on page, but can be toggled on/off: effects happen behind
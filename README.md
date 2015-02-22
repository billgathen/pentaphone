# Pentaphone
In-browser music performance tool using React.js and the Web Audio API.

> **NOTE** The behavior below is how the Pentaphone *will* work. It is very early alpha. These notes are to guide my development and keep my eyes on the prize.

## What is a Pentaphone? How do I play one?

The pentatonic scale (the first, second, third, fifth and sixth notes of a scale) always sound good with their associated chord.

The three primary chords in diatonic (Western) harmony are the ones based on the first, fourth and fifth notes of the key.

The pentaphone puts those five notes in your right hand (spacebar = 1, j = 2, k = 3, l = 5, ; = 6) and those three chords in your left (a = I, s = IV, d = V).

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
* Allow the same note to be played > 1 time
* Play major chords when shifters pressed
* LH plays the "shifters" (ctrl, alt, cmd? q, a, z? a, s, d?) which plays each of the chords (open, closed, inverted or root notes) and adjusts the pentatonic to match the chord
* RH plays the notes: spacebar, j, k, l, ; which are the I, II, III, V and VI
* Select waveform for tone
* Visual elements on the page trigger by the playing: shifter changes palette, notes splash complementary colors across screen
* Select palette for visuals
* Pressing a shifter changes the pentatonic, which stays there until shifted again, but stops playing the chord when you lift off the key, allowing chords rhythms
* Rhythm section: drums and bass
* Select the key signature (bass adjusts)
* Add basic effects, ADSR, etc
* Number keys trigger rhythms, allowing shifts within songs
* Rhythms trigger visuals, too
* Choose I, IV, V or vi, ii, iii (with associated pentatonic)
* Instructions show on page, but can be toggled on/off: effects happen behind
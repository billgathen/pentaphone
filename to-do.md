## How to deploy a new version of the app onto the gh-page

* Get everything committed/pushed on master
* cd into the dist dir
* zip -r hold *
* git co gh-pages
* unzip hold.zip
* rm hold.zip
* Commit and push!

## How to keep the dist dir updated

* gulp watch

## Wondering about keycodes? They do vary a bit across browsers

* http://www.javascripter.net/faq/keycodes.htm

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
* DONE Build normal dir structure (js, styles) to support easy export to player page
* DONE Export playable example to gh-pages ()
* DONE Update gh-pages home page to link to playable example
* DONE Move LH keys to s, d, f and w, e, r (LH home row)
* DONE Add Bootstrap and clean up interface
* DONE Select waveform for tone, adjusting gain as necessary: x, c
* DONE Accept keyCode 59 for ; to support Firefox (Thanks Ben!)
* DONE Extract key-listening to dedicated element which emits key-specific events: elements listen only for those
* DONE Rename all .jsx files to .react.js
* DONE Use flux to pass events
* DONE Extract tone components from visual components and wire separately
* Invert chords
* Build a good Jon Lord tone and call it "Lord"
* Split tones: chords based on z, x, c, v and notes based on m, ,, ., /
* Pressing a shifter changes the pentatonic, which stays there until shifted again
* Visual elements on the page trigger by the playing: shifter changes palette, notes splash complementary colors across screen
* Select palette for visuals
* Shapes of effects vary by tone
* Rhythm section: drums and bass
* Select the key signature (bass adjusts)
* Choose closed, open, inverted or root notes for LH
* Add basic effects, ADSR, etc
* Number keys trigger rhythms, allowing shifts within songs
* Rhythms trigger visuals, too
* Instructions show on page, but can be toggled on/off: effects happen behind
* Safari requires window.webkitAudioContext: make it work there
* Other problems on Safari, too: doesn't recognize events? investigate later
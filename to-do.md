## How to deploy a new version of the app onto the gh-page

* Get everything committed/pushed on master
* cd into the dist dir
* zip -r hold *
* git co gh-pages
* unzip hold.zip
* rm hold.zip
* Commit and push!

## How to keep the dist dir updated

* gulp watch (note that JS/JSX files only update when you change app.jsx: I'll fix that eventually)

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
* Select waveform for tone, adjusting gain as necessary: z, x, c, v
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
import React from "react";

export default function BasicInstructions({ toggleInstructionsAreOpen }) {
  return (
    <div className="instructions">
      <h2>What is the Pentaphone?</h2>
      <p>
        Most online synth examples are too complicated: they try to give you{" "}
        <strong>everything</strong>, but you can make a bunch of music using
        only a subset of the 12 available notes. The Pentaphone limits itself to
        just those heavy-hitters.
      </p>
      <p>
        The notes of the <strong>major pentatonic</strong> (the 1st, 2nd, 3rd,
        5th and 6th notes of a scale) always sound good with their associated
        chord. The Pentaphone puts those 5 notes in your right hand (labeled 1
        through 5 on the on-screen keyboard).
      </p>
      <p>
        The "Big Three" chords in diatonic harmony are the ones based on the 1st
        (I), 4th (IV) and 5th (V) notes of the key. Those three chords are in
        your left hand (labeled I, IV, and V).
      </p>
      <p>
        If you can touch-type, you'll feel right at home with the Pentaphone.
        Just put your fingers on home row and start playing!
      </p>
      <p>
        Feeling more adventurous? Try relative minor chords: only one row up
        (labeled vi, ii, iii).
      </p>
      <p>
        Hold down the key for any chord with your left hand (try I to start),
        then play any notes in the right hand (try 3 2 1 2 3 3 3): it always
        works! You'll feel like an instant musical genius. Explore, try
        different combinations, even multiple notes in the right hand.
      </p>
      <p>
        <h2>But I don't know how to play music!</h2>
        <p>Try a few of these ideas on for size:</p>
        <ul>
          <li>
            Try holding down a I with your left hand and playing some notes with
            your right hand, then switch to a IV (with some more notes), then a
            V (more notes), then back to a I. It should sound very familiar.
          </li>
          <li>
            Personally, I like minor chords even better (they have more drama),
            so try this: vi, iii, ii, vi.
          </li>
          <li>
            You don't have to change chords a lot: the longer you play on one
            chord, the more neat combinations you find that sound good with it.
          </li>
          <li>
            Your ear is your friend: if it sounds good, it is good. You can't
            break anything, so just have fun with it!
          </li>
        </ul>
      </p>
    </div>
  );
}

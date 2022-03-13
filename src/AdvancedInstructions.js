import React from "react";

export default function AdvancedInstructions({ toggleInstructionsAreOpen }) {
  return (
    <div className="instructions">
      <h2>What else can it do?</h2>
      <h3>Tone</h3>
      <p>
        The Pentaphone has separate tone controls for the left and right hands,
        allowing more variety in the sound. Tone is selected using the select
        boxes at the top right and left of the on-screen keyboard. Use your
        mouse to select the sound you like.
      </p>
      <p>
        <strong>Sine</strong>&nbsp; Sine wave is the default sound, very round
        and mellow.
      </p>
      <p>
        <strong>Triangle</strong>&nbsp; Triangle is slightly-edgier than sine
        wave, with a bit of hollowness.{" "}
      </p>
      <p>
        <strong>Sawtooth</strong>&nbsp; Sawtooth is a much brighter, buzzier,
        more aggressive sound.
      </p>
      <p>
        <strong>Square</strong>&nbsp; Square is bright and buzzy like sawtooth,
        but with a bit of hollowness.
      </p>
      <h3>Mixing and matching tones</h3>
      <p>
        For a mellow, gentle sound, leaving both left and right on sine is
        perfect.
      </p>
      <p>
        To make your melodies cut through the chords a bit more, leave the left
        side on sine and switch to triangle for the right side.
      </p>
      <p>
        For a more aggressive rock tone, try sawtooth on both right and left.
      </p>
      <p>
        For a more synthetic, artificial "80's Pop" sound, triangle on the left
        and square on the right is an interesting option.
      </p>
      <p>
        For an "8-bit" or "vintage videogame" sound, square on both right and
        left is the way to go.
      </p>
    </div>
  );
}

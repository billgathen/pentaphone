import React from "react";

export default function Keyboard() {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <div className="key letter-key">q</div>
        <div className="key letter-key">w</div>
        <div className="key letter-key">e</div>
        <div className="key letter-key">r</div>
        <div className="key letter-key">t</div>
        <div className="key letter-key">y</div>
        <div className="key letter-key">u</div>
        <div className="key letter-key">i</div>
        <div className="key letter-key">o</div>
        <div className="key letter-key">p</div>
        <div className="key letter-key">[</div>
        <div className="key letter-key">]</div>
      </div>
      <div className="keyboard-row">
        <div className="half-key-spacer"></div>
        <div className="key letter-key">a</div>
        <div className="key letter-key">s</div>
        <div className="key letter-key">d</div>
        <div className="key letter-key">f</div>
        <div className="key letter-key">g</div>
        <div className="key letter-key">h</div>
        <div className="key letter-key">j</div>
        <div className="key letter-key">k</div>
        <div className="key letter-key">l</div>
        <div className="key letter-key">;</div>
        <div className="key letter-key">'</div>
      </div>
      <div className="keyboard-row">
        <div className="half-key-spacer"></div>
        <div className="half-key-spacer"></div>
        <div className="key letter-key">z</div>
        <div className="key letter-key">x</div>
        <div className="key letter-key">c</div>
        <div className="key letter-key">v</div>
        <div className="key letter-key">b</div>
        <div className="key letter-key">n</div>
        <div className="key letter-key">m</div>
        <div className="key letter-key">,</div>
        <div className="key letter-key">.</div>
        <div className="key letter-key">/</div>
      </div>
      <div className="keyboard-row">
        <div className="space-bar-spacer"></div>
        <div className="key space-bar">Space</div>
      </div>
    </div>
  );
}

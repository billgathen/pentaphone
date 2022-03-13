import React from "react";

export default function SongExamples({ toggleSongExamplesAreOpen }) {
  return (
    <div className="instructions">
      <h2>Song Examples</h2>
      <p>
        Here are a few American folk tunes that can by played by the Pentaphone.
        The chords are just a suggestion.
      </p>
      <p>
        <span className="inverse-label">S</span> = space,{" "}
        <span className="inverse-label">-</span> = hold the key down,{" "}
        <span className="inverse-label">.</span> = rest (don't play anything)
      </p>
      <p>
        <strong>Farmer in the Dell</strong>
        <table>
          <tbody>
            <tr>
              <td>Chords</td>
              <td colspan="16">I</td>
              <td colspan="11">IV</td>
              <td colspan="10">I</td>
              <td colspan="2">IV</td>
              <td colspan="2">V</td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>.</td>
              <td>2</td>
              <td>3</td>
              <td>-</td>
              <td>3</td>
              <td>3</td>
              <td>-</td>
              <td>3</td>
              <td>3</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>.</td>
              <td>5</td>
              <td>-</td>
              <td>5</td>
              <td>-</td>
              <td>6</td>
              <td>5</td>
              <td>3</td>
              <td>1</td>
              <td>-</td>
              <td>2</td>
              <td>3</td>
              <td>3</td>
              <td>2</td>
              <td>2</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        <strong>Swing Low, Sweet Chariot</strong>
        <span>&nbsp;Sounds a bit odd with the high 5, 6 in the middle. :)</span>
        <table>
          <tbody>
            <tr>
              <td>Chords</td>
              <td></td>
              <td colspan="2">I</td>
              <td colspan="2"></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>3</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
              <td>6</td>
              <td>5</td>
              <td>-</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>5</td>
              <td>-</td>
              <td>6</td>
              <td>-</td>
              <td>-</td>
              <td>6</td>
              <td>5</td>
              <td>3</td>
              <td>-</td>
              <td>-</td>
              <td>5</td>
              <td>3</td>
              <td>-</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>-</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>2</td>
              <td>-</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </p>
      <p>
        <strong>Camptown Races</strong>
        <table>
          <tbody>
            <tr>
              <td>Chords</td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>5</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>6</td>
              <td>5</td>
              <td>3</td>
              <td>-</td>
              <td>3</td>
              <td>2</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
              <td>2</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>5</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>6</td>
              <td>5</td>
              <td>3</td>
              <td>-</td>
              <td>2</td>
              <td>-</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
  );
}

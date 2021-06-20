import React from "react";

class Legals extends React.Component {
  render() {
    return (
      <main className="text-center">
        <p>
          <b>DEV Community</b> – A constructive and inclusive social network for
          software developers. With you every step of your journey.
        </p>
        <p>
          Built on <b>Forem</b> — the <b>open source</b> software that powers{" "}
          <b>DEV</b> and other inclusive communities. <br />
          Made with love and <b>Ruby on Rails.</b> DEV Community © 2016 - 2021.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          role="img"
          aria-labelledby="ao56yuyv43y0opcq4ju50naat42sjcwa"
          class="crayons-icon crayons-icon--default"
        >
          <title id="ao56yuyv43y0opcq4ju50naat42sjcwa">Forem logo</title>
          <g clip-path="url(#clip0)" fill="#1AB3A6">
            <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </main>
    );
  }
}

export default Legals;

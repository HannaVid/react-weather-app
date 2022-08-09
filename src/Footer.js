import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul className="list-unstyled">
        <li>⦁ Coded by Hanna Vidieniova ⦁</li>
        <li>
          Open-source code on{" "}
          <a
            href="https://github.com/HannaVid/react-weather-app"
            title="See open-sourced code of the Project on Github"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://gilded-biscotti-764a12.netlify.app"
            title="Check out the Project on Netlify"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
        </li>
        <li>2022</li>
      </ul>
    </footer>
  );
}

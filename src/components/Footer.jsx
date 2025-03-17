import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>
        © Copyright Project Name {new Date().getFullYear()}. All Right Reserved.
        Designed and Developed by{" "}
        <strong>
          <a
            href="https://taiwojoshua.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Taiwo Joshua
          </a>
        </strong>
      </p>
    </footer>
  );
}

import React from "react";
const Footer = () => {
  return (
    <footer>
      <p>&#169;| 2022 | Trived Kumar</p>
      <div className="d-flex justify-content-center">
        <a
          rel="noreferrer"
          className="ml-1 link"
          href="https://github.com/Trivedhkumar"
          target="_blank"
        >
          <h5>Github</h5>
        </a>
        <a
          className="ml-1 link"
          rel="noreferrer"
          href="https://twitter.com/JTrivedh"
          target="_blank"
        >
          <h5>Twitter</h5>
        </a>
        <a
          className="ml-1 link"
          href="https://www.linkedin.com/in/trivedhkumarjajala/"
          target="_blank"
          rel="noreferrer"
        >
          <h5>Linkedin</h5>
        </a>
      </div>
    </footer>
  );
};
export default Footer;

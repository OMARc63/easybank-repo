import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import Button from "./Button";

export default function Navbar() {
  const [links, setLinks] = useState(true);

  return (
    <div className="Navbar">

      <div className="container">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul className={links ? "links active" : "links"}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <Button />
        <div className="toggle">
          {links ? (
            <svg
              onClick={() => setLinks(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
            >
              <g fill="#2D314D" fill-rule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg
              onClick={() => setLinks(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="11"
            >
              <g fill="#2D314D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
              </g>
            </svg>
          )}
        </div>
        <div className="bg-white"></div>
      </div>

    </div>
  );
}

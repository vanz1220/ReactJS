import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <h3>Follow Me</h3>
    <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://www.facebook.com/ivan.malong.17"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://www.tiktok.com/"
        className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="1x" />
      </a>
    </div>
  );
}
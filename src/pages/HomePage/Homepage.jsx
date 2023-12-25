import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      Homepage
      <br />
      {/* SPA'larda href kullanımı yanlıştır */}
      <a href="/about">About'a Git</a>
      <Link to={"/about"}>About'a Git</Link>
    </div>
  );
}

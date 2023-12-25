import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <button className="btn btn-primary">Homepage</button>
      <br />
      {/* SPA'larda href kullanımı yanlıştır */}
      <a href="/about">About'a Git</a>
      <Link to={"/about"}>About'a Git</Link>
    </div>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
      resolve("HTTP Verisi");
    });
  };

  useEffect(() => {
    makeAsyncCall();
    makeHttpcall();
  }, []);

  const makeHttpcall = async () => {
    // fetch("https://dummyjson.com/products")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.log(err));
    //zincirleme promise

    let response = await fetch("https://dummyjson.com/products");
    let json = await response.json();
    console.log(json);
  };

  const makeAsyncCall = async () => {
    myAsyncFunction();
    // .then((response) => {
    //   console.log("işlem başarılı cevap:", response);
    // }) // async işlem başarılı ise(resolve edildi ise)
    // .catch((error) => {
    //   console.log("İşlem başarısız cevap:", error);
    // }) // async işlem başarısız ise(reject edildi ise)
    // .finally(() => {
    //   console.log("İşlem bitti");
    // }); //Her halükarda en son çalışır.

    // es2017 async-await
    try {
      let response = await myAsyncFunction();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

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

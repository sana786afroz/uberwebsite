import React from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
  const list = [
    "AboutUS",
    "Our offering",
    "How Uber Work",
    "Global citizenship",
    "Newsroom",
    "investor relation",
    "Blog",
    "Careers"
  ];
  return (
    <div className={style.parent}>
     
      <div className={style.navbar}>
        <span style={{ display: "flex", gap: "3rem", padding: "5px" }}>
          <p style={{ fontSize: "1.5rem", color: "black" }}>
            <a className={style.uber} href="/">
              Uber
            </a>
          </p>

          <select style={{ backgroundColor: "grey", borderRadius: "30px" }}>
            <option style={{ padding: "5px" }}>Company</option>
            {list.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <a href="/Safety">Safety</a>
          <a href="/Help">Help</a>
        </span>
        <span style={{ display: "flex", gap: "1rem" }}>
          <button className={style.btn}>Log in</button>
          <button className={style.btn}>Sign up</button>
        </span>
      </div>
      {/* <div>rterte</div> */}
      {/* <img
        className={style.img}
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1566972723/assets/8c/f777bf-ad1a-44f5-9b09-e42aad298e51/original/DPBasics.jpg"
        alt="driverpic"
      /> */}
      {/* <img
        style={{ height: "50vh", width: "100%", marginTop: "-1rem" }}
        src="https://www.newscrab.com/static/c1e/client/90607/uploaded/a5e86845c131c9fe41e454ee458bb02a.jpg"
        alt="place"
      /> */}

      <p style={{ marginTop: "-20rem", marginLeft: "5rem" }}>
        <span style={{ fontSize: "3rem" }}>Uber for Business</span>
        <p style={{ fontSize: "1rem", padding: "15px" }}>
          Transform the way your company moves and feeds its people.
        </p>
      </p>
    </div>
  );
}

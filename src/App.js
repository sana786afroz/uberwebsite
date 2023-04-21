import React from 'react';
import Mainpic from './Mainpic';
import Mid1 from './Mid1/Mid1';
import Navbar from "./Mid1/Navbar/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
     <Mainpic/>
     <Mid1/>
  
    </div>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

import React from 'react';
import { Button, Container } from 'react-bootstrap';


const inter = Inter({ subsets: ['latin'] })

function MyButton(){
  return (
    <Button className='btn'>Basic</Button>
  );
};

const projects = {
  name: '',
  typeOfProject: '',
  theme:{
    backgroundColor: "#223b7a",
    color: "white"
  }
};

export default function HomePage(){
  return (
    <>
      <>
        <div id="top-container" className='container-fluid'>
            <div id="top-info-container">
            <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul> 
            </div>
            <svg id = "svgStyle" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="pathStyle"d="M0,0  L110,0C35,150 35,0 0,100z"></path>
            </svg>
        </div>
      </>
      <>
      <div id='whyContainer' className="container-fluid">
        <h1>Equual columns</h1>
        <p>Note: blabla</p>
        <div id='firstRowContainer' className='row'>
          <div className='colorBlue col p-3 text-white'><h2>Why this page</h2><span className='break'></span><p>Inline SVG (Scalable Vector Graphics) refers to a method of embedding SVG markup directly into an HTML document using theelement, rather than referencing an external SVG file. SVG is a markup language for describing vector graphics that can be rendered in modern web browsers.</p></div>
          <div className='col p-3 bg-dark text-white'><p id="textAlign" >Inline SVG (Scalable Vector Graphics) refers to a method of embedding SVG markup directly into an HTML document usi element, rather than referencing an external SVG file. SVG is a markup language for describing vector graphics that can be rendered in modern web browsers.</p></div>
          <div className='colorBlue col p-3 text-white'><h2>Test</h2><span className='break'></span><p>Inline SVG (Scalable Vector Graphics) refers to a method of embedding SVG markup directly into an HTML document usi element, rather than referencing an external SVG file. SVG is a markup language for describing vector graphics that can be rendered in modern web browsers.</p></div>
        </div>
      </div>
      </>
      <>

      </>
    </> 
  );
}

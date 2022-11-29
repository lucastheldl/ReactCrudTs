import React,{useState,useEffect} from 'react';
import './App.css';
//css
import styles from "./App.module.css"

//components
import Footer from './components/footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className={styles.main}><h1>Conteudo...</h1></main>
      
      <Footer/>
    </div>
  );
}

export default App;

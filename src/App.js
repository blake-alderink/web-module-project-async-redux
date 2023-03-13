import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import { apiFetch } from './action';




function App(props) {
  

  const clickHandler = (e) => {
    e.preventDefault();
    props.apiFetch();
  }

  return (<>
   <div className="App">
      Async Redux Project
    </div>
    <button onClick={(e) => clickHandler(e)}>test the api</button>
    {props.facts.map(fact => {
      return <h1 key={fact.length}>{fact.fact}</h1>
    })}
  </>
   
  );
}

const mapStateToProps = state => {
  return {
    facts: state.facts
}}

export default connect(mapStateToProps, { apiFetch: apiFetch })(App);
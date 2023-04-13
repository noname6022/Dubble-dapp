import React, { useState } from 'react'
import './App.css'
import RoutesMap from './Pages/Backend/RouteMap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Pages/Header'


function App() {


  return (

    <div className="App">

        <Header/>      
        <RoutesMap/>
    </div>
  )
}

export default App

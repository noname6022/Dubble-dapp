import React from 'react'
import Dashboard from '../Dashboard';
import Mint from '../Mint';
import DuubleDub from '../DuubleDub';
import Farm from '../Farm';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const RoutesMap = () => {
  return (
           
    <Routes >
    <Route exact path="/" element={<Dashboard/>} />
    <Route path="/Mint" element={<Mint/>} />
    <Route path="/wDub" element={<DuubleDub/>} />
    <Route path="/Farm" element={<Farm/>} />
</Routes>
  )
}

export default RoutesMap

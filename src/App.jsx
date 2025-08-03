import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Awsome from './components/Awsome'
import Team from './components/Team'
import Client from './components/Client';

const App = () => {
  return (
    <div>
      <Navbar />
      <Awsome />
      <Team />
      <Client />
    </div>
  )
}

export default App

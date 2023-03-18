import Header from './components/header/Header'
import Dishmain from './components/body/Dishmain'
import React from 'react'
import { BrowserRouter} from 'react-router-dom'
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Dishmain/>
      </BrowserRouter>
    </div>
  );
}

export default App;

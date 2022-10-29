  import React from 'react';
  import Navbar from './Components/Navbar';
  import AllStock from './Components/AllStock';
  import AddStock from './Components/AddStock';
  import ManageStock from './Components/ManageStock';

  import {BrowserRouter, Routes, Route} from 'react-router-dom';

  
  function App() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'    element={<ManageStock/>} />
          <Route path='/add' element={<AddStock/>} />
          <Route path='/all' element={<AllStock/>} />
      </Routes>
    </BrowserRouter>
    );
    
  }

  export default App;

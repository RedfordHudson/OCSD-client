import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

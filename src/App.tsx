import Header from './Layout/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

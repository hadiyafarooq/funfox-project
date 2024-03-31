import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './Screens/FirstPage/FirstPage'
import SecondPage from './Screens/SecondPage/SecondPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>   
          <Route path='/' element={<FirstPage />} />
          <Route path='/SecondPage' element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );

};
export default App;

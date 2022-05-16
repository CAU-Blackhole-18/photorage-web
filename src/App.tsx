import { Header } from './component/layout/Header'; 
import { LoginPage } from './component/pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App


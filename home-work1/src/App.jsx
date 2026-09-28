import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Page1 from "./Page1"
import Header from "./Header"
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/page1' element={<Page1 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

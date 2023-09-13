import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './pages/Counter'

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />\
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

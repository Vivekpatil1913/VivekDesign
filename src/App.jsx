
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainIndex from './Pages/MainIndex'
import FAQ from './Pages/FAQ'
import Partners from './Pages/Partners'
import TopHeader from './Components/TopHeader'
import Header from './Components/Header'
import Abha from './Pages/Abha'
import VerifyCertificate from './Pages/VerifyCertificate'
import Footer from './Components/Footer'
import MainFooter from './Components/MainFooter'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path='/abha' element={<Abha />} />
        <Route path='/certificate' element={<VerifyCertificate />} />
      </Routes>
      <Footer />
      <MainFooter/>
    </>
  )
}

export default App

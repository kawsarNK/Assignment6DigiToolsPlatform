import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Stats from './component/Stats/Stats'
import Steps from './component/steps/Steps'
import Footer from './component/footer/Footer'
import ReadySection from './component/readySection/ReadySection'
import SimplePricing from './component/SimplePricing/SimplePricing'

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Stats />
      <Steps />
      <SimplePricing />
      <ReadySection />
      <Footer />
    </div>
  )
}

export default App

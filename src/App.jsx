import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Stats from './component/Stats/Stats'
import Steps from './component/steps/Steps'

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <Stats />
      <Steps />
    </div>
  )
}

export default App

import { useState, Suspense } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Stats from './component/Stats/Stats'
import Steps from './component/steps/Steps'
import Footer from './component/footer/Footer'
import ReadySection from './component/readySection/ReadySection'
import SimplePricing from './component/SimplePricing/SimplePricing'
import Product from './component/product/Product'
import { Toaster } from 'react-hot-toast';

const fetchCard = async () => {
  const res = await fetch("/cardData.json");
  return res.json();
}

function App() {
  const cardPromise = fetchCard();

  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar cartCount={cart.length} />

      <Banner />
      <Stats />
      <Steps />

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Product
          cardPromise={cardPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>

      <SimplePricing />
      <ReadySection />
      <Footer />
    </div>
  )
}

export default App
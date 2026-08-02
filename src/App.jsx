import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './Pages/Home'

const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section>
      <Home />
    </section>
  )
}

export default App
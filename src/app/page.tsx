import Customize from "./components/customixe"
import Extension from "./components/extension"
import Footer from "./components/Footer"
import Hero from "./components/hero"
import Navbar from "./components/Navbar"
import Project from "./components/project management"
import Sponsar from "./components/sponsar"
import Work from "./components/work together"
import Yourwork from "./components/your work"


export default function Home() {
  return(
      <div>
        <Navbar/>
        <Hero/>
        <Project/>
        <Work/>
        <Extension/>
        <Customize/>
        <Yourwork/>
        <Sponsar/>
        <Footer/>
      </div>
  )
}
import Compagnies from "./components/compagnies"
import Footer from "./components/Footer"
import GetInTouch from "./components/Get-in-touch"
import Header from "./components/Header"
import OurProjects from "./components/our-projects"
import Pricing from "./components/pricing"
import Reviews from "./components/reviews"

function Home() {
  return (
    <>
    {/* <Header /> */}
    <OurProjects />
    <Reviews />
    <Pricing />
    <Compagnies />
    <GetInTouch />
    <Footer />
    </>
  )
}

export default Home

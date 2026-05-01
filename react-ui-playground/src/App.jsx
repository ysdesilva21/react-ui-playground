import { Routes, Route } from "react-router-dom"
import Counter from "./components/counter/counter"
import Navbar from "./components/navbar/navbar"

const Home = () => {
 return(
  <div>
    <h1>Home Page</h1>
    <Counter />
  </div>
 )
}
const About = () => <h1>About Page</h1>
const Product = () => <h1>Product Page</h1>
const Contact = () => <h1>Contact Page</h1>


function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} end>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/product" element={<Product />}>Product</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </Routes>
    </div>
  )
}
export default App
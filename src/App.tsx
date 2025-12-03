import { Navbar, Hero, Service, Contact, About, Reviews, Portfolio } from './components';


export default function App() {
  return (
  <main className="overflow-x-hidden antialiased text-neutral-800">
    <Navbar />
    <Hero />
    <Service />
    <Portfolio />
    <About />
    <Reviews />
    <Contact />
  </main> 
  )
}

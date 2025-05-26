import { Hero } from './section/Hero'
import About from './section/About'
import TechStack from './section/TechStack'
import Contact from './section/Contact'

function App() {
  
  return (
    <div style={{ overflow: 'hidden' }}>
      <Hero />
      <About />
      <TechStack/>
      <Contact/>
    </div>
  )
}

export default App
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Layout>
        <div>
          <Home />
          <About />
          {/* TODO <Projects /> */}
          <Experience />
          <Contact />
        </div>
      </Layout>
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={1.4}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={false}
        innerStyle={{
          backgroundColor: 'red'
        }}
        outerStyle={{
          backgroundColor: 'var(--cursor-color)',
          mixBlendMode: 'exclusion'
        }}
        className="lg:visible md:hidden"
      />
    </>
  )
}

export default App

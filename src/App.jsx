import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AnimatedCursor from "react-animated-cursor";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Toaster } from '@/components/ui/toaster';
import useMediaQuery from '@/hooks/useMediaQuery';

function App() {
  const queryClient = new QueryClient();
  const isSmallScreen = useMediaQuery('(max-width: 920px)');

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
            display: isSmallScreen ? 'hidden' : 'flow',
            backgroundColor: 'red'
          }}
          outerStyle={{
            display: isSmallScreen ? 'hidden' : 'flow',
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }}
        />
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App

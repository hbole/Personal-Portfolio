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
import useDeviceDetection from '@/hooks/use-device-detection';

function App() {
  const queryClient = new QueryClient();
  const device = useDeviceDetection();

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
        {
          device === "Desktop" ?
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
          /> : null
        }
        
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App

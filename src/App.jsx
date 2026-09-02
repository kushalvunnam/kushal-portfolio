import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Universe from './components/3d/Universe';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Fixed Global 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
          <ambientLight intensity={0.2} color="#ffffff" />
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
          <directionalLight position={[-10, -10, -10]} intensity={1} color="#b000ff" />
          <Suspense fallback={null}>
            <Universe />
          </Suspense>
        </Canvas>
      </div>

      {/* DOM Content */}
      <div className="relative z-10 selection:bg-cyan-900 selection:text-cyan-50">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Languages />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

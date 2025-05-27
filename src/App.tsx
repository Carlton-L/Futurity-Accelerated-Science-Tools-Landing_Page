import { Flex } from '@chakra-ui/react';
import About from './components/About';
import Clients from './components/Clients';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Insights from './components/Insights';
import Navbar from './components/Navbar';
import WTLM from './components/WTLM';
import bgImage from './assets/background.svg';
import './index.css';

// Navbar
// Header
// About
// HowItWorks
// Clients
// Insights
// Demo
// WTLM
// Footer

// TODO: Fix horizontal overflow

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <main style={{ background: '#111111' }}> */}
      <Flex
        justifyContent='center'
        alignItems='center'
        as='main'
        direction='column'
        style={{ pointerEvents: 'auto' }}
        backgroundImage={`url(${bgImage})`}
        backgroundRepeat='no-repeat'
        backgroundPosition='top center'
        backgroundSize='cover'
        width='100%' // 🔑 Height is 100%, width scales to maintain aspect ratio
      >
        <About />
        <HowItWorks />
        <Clients />
        <Insights />
        <Demo />
        <WTLM />
      </Flex>
      <Footer />
    </div>
  );
}

export default App;

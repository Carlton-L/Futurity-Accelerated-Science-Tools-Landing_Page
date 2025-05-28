import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import CubeGrid from '../CubeGrid';
import Emphasis from '../Emphasis';
import Button from '../Button';

const Header = () => {
  return (
    <>
      <section
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          // display: 'inline-block',
          position: 'relative',
          zIndex: 1,
          background: 'rgba(26, 26, 26, 0.2)', // #1a1a1a with 50% opacity
          backdropFilter: 'blur(10px)',
          color: 'white',
        }}
      >
        <Flex
          direction='column'
          maxWidth='1480px'
          width='100%'
          height='100%'
          justifyContent='center'
          alignItems='center'
          gap='16px'
          md={{ gap: '32px' }}
        >
          <Heading
            fontSize='48px'
            md={{ lineHeight: '64px', fontSize: '64px' }}
            maxWidth='560px'
            lineHeight='48px'
          >
            Build better futures <Emphasis>faster</Emphasis> with FAST
          </Heading>
          <Text maxWidth='760px' color='#A7ACB2'>
            <b style={{ color: '#ffffff' }}>
              Futurity Accelerated Science Tools (FAST)
            </b>{' '}
            is an <b style={{ color: '#ffffff' }}>expert-led, AI-augmented</b>{' '}
            platform designed to help{' '}
            <b style={{ color: '#ffffff' }}>enterprises</b> and{' '}
            <b style={{ color: '#ffffff' }}>government agencies</b> anticipate
            trends, identify new opportunities, and make
            <b style={{ color: '#ffffff' }}>data driven innovation</b> decisions
            to <b style={{ color: '#ffffff' }}>reach markets and have impact</b>{' '}
            - faster and more accurately than ever before.
          </Text>
          <Flex
            gap='8px'
            direction='column'
            md={{ gap: '16px', flexDirection: 'row' }}
            pointerEvents='auto'
          >
            <Button>Request a Demo</Button>
            <Button asChild>
              <Link href='#About'>Learn More</Link>
            </Button>
          </Flex>
        </Flex>
      </section>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: 0,
          overflow: 'hidden',
          top: '0%',
          pointerEvents: 'auto',
        }}
      >
        <CubeGrid />
      </div>
    </>
  );
};

export default Header;

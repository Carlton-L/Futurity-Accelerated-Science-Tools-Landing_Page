import { Heading, Text } from '@chakra-ui/react';
import CubeGrid from '../CubeGrid';

const Header = () => {
  return (
    <>
      <section
        style={{ height: '100vh', width: '100%', pointerEvents: 'none' }}
      >
        <div>
          <Heading>Build better futures faster with FAST</Heading>
          <Text>
            Futurity Accelerated Science Tools (FAST) is an expert-led,
            AI-augmented platform designed to help enterprises and government
            agencies anticipate trends, identify new opportunities, and make
            data driven innovation decisions to reach markets and have impact -
            faster and more accurately than ever before.
          </Text>
        </div>
      </section>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: -1000,
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

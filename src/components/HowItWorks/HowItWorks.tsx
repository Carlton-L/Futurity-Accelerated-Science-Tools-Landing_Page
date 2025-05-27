import { Box, Card, Flex, Heading } from '@chakra-ui/react';
import Emphasis from '../Emphasis';

const HowItWorks = () => {
  return (
    <Flex
      maxWidth='1460px'
      padding='8px'
      justifyContent='center'
      pointerEvents='auto'
      direction='column'
      gap='16px'
    >
      <Heading size='2xl'>
        How <Emphasis>FAST</Emphasis> Works
      </Heading>
      <Flex direction='column' gap='8px' md={{ gap: '16px' }}>
        <Flex
          gap='8px'
          direction='column'
          md={{ gap: '16px', flexDirection: 'row' }}
        >
          {/* GATHER */}
          <Card.Root>
            <Card.Body gap='32px'>
              <Card.Header>Gather</Card.Header>
              <Card.Description>
                Gather large, diverse sources of information automatically -
                from academic research and patents to industry trends
              </Card.Description>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
          {/* ANALYZE */}
          <Card.Root>
            <Card.Body gap='32px'>
              <Card.Header>Analyze</Card.Header>
              <Card.Description>
                Analyze quantitative and qualitative data instantly by
                integrating scientific, technological, and economic data.
              </Card.Description>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
        </Flex>
        <Flex
          gap='8px'
          direction='column'
          md={{ gap: '16px', flexDirection: 'row' }}
        >
          {/* FORECAST */}
          <Card.Root>
            <Card.Body gap='32px'>
              <Card.Header>Forecast</Card.Header>
              <Card.Description>
                Forecast trends with predictive modeling and what-if scenarios
                to define actionable paths for innovation and investment.
              </Card.Description>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
          {/* INVENT */}
          <Card.Root>
            <Card.Body gap='32px'>
              <Card.Header>Invent</Card.Header>
              <Card.Description>
                Invent industry-changing solutions with augmented creativity and
                science-based rationale, prototype your ideas, and plan a
                dynamic roadmap to realize them in record time.
              </Card.Description>
            </Card.Body>
            <Card.Footer />
          </Card.Root>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowItWorks;

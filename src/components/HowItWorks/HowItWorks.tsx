import { Card, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaChartLine, FaDatabase, FaLightbulb, FaSearch } from 'react-icons/fa';
import Emphasis from '../Emphasis';
import Badge from '../Badge';

const HowItWorks = () => {
  return (
    <Flex
      id='HowItWorks'
      scrollMarginTop='100px'
      maxWidth='1460px'
      px='8px'
      py='32px'
      justifyContent='center'
      pointerEvents='auto'
      direction='column'
      gap='16px'
      md={{ marginBottom: '64px' }}
    >
      <Heading
        fontSize='32px'
        mb='16px'
        md={{ marginBottom: '32px' }}
        sm={{ fontSize: '48px' }}
      >
        How <Emphasis>FAST</Emphasis> Works
      </Heading>
      <Flex direction='column' gap='8px' md={{ gap: '16px' }}>
        <Flex
          gap='8px'
          direction='column'
          md={{ gap: '16px', flexDirection: 'row' }}
        >
          {/* GATHER */}
          <Card.Root flex='1' md={{ padding: '32px' }}>
            <Card.Body gap='32px'>
              <Card.Header fontSize='20px' textTransform='uppercase'>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex gap='16px' alignItems='center'>
                    <Badge>
                      <Text fontFamily='Jetbrains Mono'>01</Text>
                    </Badge>
                    Gather
                  </Flex>
                  <Badge bg='rgba(255, 255, 255, 0.1)'>
                    <Icon size='md'>
                      <FaSearch color='#8285FF' />
                    </Icon>
                  </Badge>{' '}
                </Flex>
              </Card.Header>
              <Card.Description color='#A7ACB2'>
                Gather large, diverse sources of information automatically -
                from academic research and patents to industry trends
              </Card.Description>
            </Card.Body>
          </Card.Root>
          {/* ANALYZE */}
          <Card.Root flex='1' md={{ padding: '32px' }}>
            <Card.Body gap='32px'>
              <Card.Header fontSize='20px' textTransform='uppercase'>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex gap='16px' alignItems='center'>
                    <Badge>
                      <Text fontFamily='Jetbrains Mono'>02</Text>
                    </Badge>
                    Analyze
                  </Flex>
                  <Badge bg='rgba(255, 255, 255, 0.1)'>
                    <Icon size='md'>
                      <FaDatabase color='#8285FF' />
                    </Icon>
                  </Badge>{' '}
                </Flex>
              </Card.Header>
              <Card.Description color='#A7ACB2'>
                Analyze quantitative and qualitative data instantly by
                integrating scientific, technological, and economic data.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>
        <Flex
          gap='8px'
          direction='column'
          md={{ gap: '16px', flexDirection: 'row' }}
          align='stretch'
        >
          {/* FORECAST */}
          <Card.Root flex='1' md={{ padding: '32px' }}>
            <Card.Body gap='32px'>
              <Card.Header fontSize='20px' textTransform='uppercase'>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex gap='16px' alignItems='center'>
                    <Badge>
                      <Text fontFamily='Jetbrains Mono'>03</Text>
                    </Badge>
                    Forecast
                  </Flex>
                  <Badge bg='rgba(255, 255, 255, 0.1)'>
                    <Icon size='md'>
                      <FaChartLine color='#8285FF' />
                    </Icon>
                  </Badge>{' '}
                </Flex>
              </Card.Header>
              <Card.Description color='#A7ACB2'>
                Forecast trends with predictive modeling and what-if scenarios
                to define actionable paths for innovation and investment.
              </Card.Description>
            </Card.Body>
          </Card.Root>
          {/* INVENT */}
          <Card.Root flex='1' md={{ padding: '32px' }}>
            <Card.Body gap='32px'>
              <Card.Header fontSize='20px' textTransform='uppercase'>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex gap='16px' alignItems='center'>
                    <Badge>
                      <Text fontFamily='Jetbrains Mono'>04</Text>
                    </Badge>
                    Invent
                  </Flex>
                  <Badge bg='rgba(255, 255, 255, 0.1)'>
                    <Icon size='md'>
                      <FaLightbulb color='#8285FF' />
                    </Icon>
                  </Badge>{' '}
                </Flex>
              </Card.Header>
              <Card.Description color='#A7ACB2'>
                Invent industry-changing solutions with augmented creativity and
                science-based rationale, prototype your ideas, and plan a
                dynamic roadmap to realize them in record time.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowItWorks;

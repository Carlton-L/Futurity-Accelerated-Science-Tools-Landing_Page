import { Box, Card, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaBuilding } from 'react-icons/fa';
import { FaBuildingColumns } from 'react-icons/fa6';
import { ImLab } from 'react-icons/im';
import { BsGraphUpArrow } from 'react-icons/bs';
import Emphasis from '../Emphasis';
import Tag from '../Tag';

const Clients = () => {
  return (
    <Flex
      id='Clients'
      scrollMarginTop='100px'
      maxWidth='1460px'
      px='8px'
      py='32px'
      justifyContent='center'
      alignItems='center'
      pointerEvents='auto'
      direction='column'
      gap='16px'
      sm={{ gap: '32px' }}
      // md={{ gap: '32px' }}
      my='32px'
    >
      <Tag>Our Clients</Tag>
      <Heading fontSize='32px' sm={{ fontSize: '48px' }}>
        Who We <Emphasis>Work With</Emphasis>
      </Heading>
      <Text>
        FAST is designed for innovation leaders, R&D teams, strategists, and
        policymakers in large enterprises and government agencies who need to
        stay ahead of technological shifts and market disruptions.
      </Text>
      <Box
        position='relative'
        w='100%'
        borderRadius='md'
        m={4}
        h='calc(100% - 2rem)'
        _before={{
          content: `""`,
          position: 'absolute',
          inset: 0,
          padding: '2px',
          borderRadius: '8px',
          background: 'linear-gradient(to bottom, #8285FF, #0005E9, #000383)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 0,
        }}
      >
        <Card.Root
          position='relative'
          zIndex='2'
          borderRadius='md'
          borderColor='transparent'
          w='100% -2px'
          h='100%'
          overflow='hidden'
          m='2px' // This creates the border effect
          md={{ padding: '32px' }}
        >
          <Card.Body>
            <Card.Header
              display='inline'
              md={{ fontSize: '48px', marginY: '32px' }}
              my='16px'
            >
              Client <Emphasis>Success</Emphasis>
            </Card.Header>
            <Card.Description
              display='inline'
              fontSize='32px'
              textAlign='center'
              md={{
                fontSize: '64px',
                textAlign: 'left',
                marginLeft: '32px',
                maxWidth: '100%',
              }}
              color='#ffffff'
              fontFamily='TT Norms Pro Normal'
              maxWidth='540px'
            >
              "You Saved us <Emphasis>150 Million</Emphasis>"
            </Card.Description>
            <Card.Footer ml='auto'>- Top 5 Global Pharma Company</Card.Footer>
          </Card.Body>
        </Card.Root>
      </Box>
      <Flex
        direction='column'
        gap='8px'
        md={{ gap: '16px', flexDirection: 'row' }}
        width='100%'
      >
        <Flex
          gap='8px'
          direction='column'
          md={{ gap: '16px', flexDirection: 'row' }}
        >
          {/* Enterprises */}
          <Card.Root md={{ paddingY: '32px' }}>
            <Card.Body gap='8px' md={{ gap: '16px', paddingY: '0' }}>
              <Card.Header fontSize='16px'>
                <Flex
                  w='100%'
                  justifyContent='center'
                  direction='column'
                  alignItems='center'
                  gap='8px'
                  textAlign='center'
                  fontSize='24px'
                  md={{ fontSize: '20px' }}
                  lg={{ fontSize: '24px' }}
                >
                  <svg width='0' height='0'>
                    <linearGradient
                      id='blue-gradient'
                      x1='50%'
                      y1='0%'
                      x2='50%'
                      y2='100%'
                    >
                      <stop stopColor='#8285FF' offset='0%' />
                      <stop stopColor='#0005E9' offset='100%' />
                    </linearGradient>
                  </svg>
                  <Icon boxSize='64px'>
                    <FaBuilding
                      style={{
                        fill: 'url(#blue-gradient)',
                      }}
                    />
                  </Icon>
                  Fortune 500 Companies
                </Flex>
              </Card.Header>
              <Card.Description textAlign='center' color='#A7ACB2'>
                Enterprise leaders looking to maintain competitive advantage
                through strategic innovation.{' '}
              </Card.Description>
            </Card.Body>
          </Card.Root>
          {/* Govt */}
          <Card.Root md={{ paddingY: '32px' }}>
            <Card.Body gap='8px' md={{ gap: '16px', paddingY: '0' }}>
              <Card.Header fontSize='16px'>
                {' '}
                <Flex
                  w='100%'
                  justifyContent='center'
                  direction='column'
                  alignItems='center'
                  gap='8px'
                  textAlign='center'
                  md={{ fontSize: '20px' }}
                  fontSize='24px'
                  lg={{ fontSize: '24px' }}
                >
                  <svg width='0' height='0'>
                    <linearGradient
                      id='blue-gradient'
                      x1='50%'
                      y1='0%'
                      x2='50%'
                      y2='100%'
                    >
                      <stop stopColor='#8285FF' offset='0%' />
                      <stop stopColor='#0005E9' offset='100%' />
                    </linearGradient>
                  </svg>
                  <Icon boxSize='64px'>
                    <FaBuildingColumns
                      style={{
                        fill: 'url(#blue-gradient)',
                      }}
                    />
                  </Icon>
                  Government & Policy Organizations
                </Flex>
              </Card.Header>
              <Card.Description textAlign='center' color='#A7ACB2'>
                Public sector institutions focused on future-proofing policies
                and infrastructure.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>
        <Flex
          gap='8px'
          direction='column'
          md={{ gap: '16px', flexDirection: 'row' }}
        >
          {/* R&D */}
          <Card.Root md={{ paddingY: '32px' }}>
            <Card.Body gap='8px' md={{ gap: '16px', paddingY: '0' }}>
              <Card.Header fontSize='16px'>
                {' '}
                <Flex
                  w='100%'
                  justifyContent='center'
                  direction='column'
                  alignItems='center'
                  gap='8px'
                  textAlign='center'
                  md={{ fontSize: '20px' }}
                  fontSize='24px'
                  lg={{ fontSize: '24px' }}
                >
                  <svg width='0' height='0'>
                    <linearGradient
                      id='blue-gradient'
                      x1='50%'
                      y1='0%'
                      x2='50%'
                      y2='100%'
                    >
                      <stop stopColor='#8285FF' offset='0%' />
                      <stop stopColor='#0005E9' offset='100%' />
                    </linearGradient>
                  </svg>
                  <Icon boxSize='64px'>
                    <ImLab
                      style={{
                        fill: 'url(#blue-gradient)',
                      }}
                    />
                  </Icon>
                  Research & Development Teams
                </Flex>
              </Card.Header>
              <Card.Description textAlign='center' color='#A7ACB2'>
                R&D professionals seeking to identify high-impact research
                directions and opportunities.
              </Card.Description>
            </Card.Body>
          </Card.Root>
          {/* INVENT */}
          <Card.Root md={{ paddingY: '32px' }}>
            <Card.Body gap='8px' md={{ gap: '16px', paddingY: '0' }}>
              <Card.Header fontSize='16px'>
                {' '}
                <Flex
                  w='100%'
                  justifyContent='center'
                  direction='column'
                  alignItems='center'
                  gap='8px'
                  textAlign='center'
                  md={{ fontSize: '20px' }}
                  fontSize='24px'
                  lg={{ fontSize: '24px' }}
                >
                  <svg width='0' height='0'>
                    <linearGradient
                      id='blue-gradient'
                      x1='50%'
                      y1='0%'
                      x2='50%'
                      y2='100%'
                    >
                      <stop stopColor='#8285FF' offset='0%' />
                      <stop stopColor='#0005E9' offset='100%' />
                    </linearGradient>
                  </svg>
                  <Icon boxSize='64px'>
                    <BsGraphUpArrow
                      style={{
                        fill: 'url(#blue-gradient)',
                      }}
                    />
                  </Icon>
                  Venture & Corporate Innovation Units
                </Flex>
              </Card.Header>
              <Card.Description textAlign='center' color='#A7ACB2'>
                Innovation and investment teams looking to identify emerging
                trends and technologies.{' '}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Clients;

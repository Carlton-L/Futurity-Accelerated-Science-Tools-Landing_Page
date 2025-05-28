import { Box, Card, Flex, Icon } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import Emphasis from '../Emphasis';
import Tag from '../Tag';
import screenshotImg from '../../assets/screenshot.png';
import Button from '../Button';
import Badge from '../Badge';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const About = () => {
  return (
    <Flex
      maxWidth='1460px'
      width='100%'
      px='8px'
      py='32px'
      justifyContent='center'
      alignItems='center'
      pointerEvents='none'
      direction='column'
      md={{ flexDirection: 'row-reverse', marginBottom: '64px' }}
      gap='16px'
    >
      {/* <Box
        p='2px'
        borderRadius='8px'
        background='linear-gradient(to bottom, #8285FF, #0005E9, #000383)'
        flex='1'
        aspectRatio='4096 / 2339' // Move aspect ratio to the wrapper Box
        minW='50%'
      >
        <Card.Root
          style={{ filter: 'drop-shadow(0 0 12px #0005e9)' }}
          borderRadius='md'
          backgroundImage={`url(${screenshotImg})`}
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          border='2px solid transparent'
          // aspectRatio='4096 / 2339' // Maintains the exact aspect ratio
          w='100%' // Fill the wrapper width
          h='100%' // Fill the wrapper completely
          overflow='hidden' // Clip the overflowing image at rounded corners
        ></Card.Root>
      </Box> */}
      <Box
        position='relative' // Needed for absolute positioning of children
        minW='50%'
        width='100%'
        md={{ width: '50%', paddingY: '32px' }}
        // height='auto'
        aspectRatio='4096 / 2339'
      >
        {/* Screenshot Box with margin */}
        <Box
          aspectRatio='4096 / 2339'
          width='calc(100% - 32px)'
          height='auto'
          p='2px'
          borderRadius='md'
          background='linear-gradient(to bottom, #8285FF, #0005E9, #000383)'
          m={4} // Margin so corner boxes appear to hover over edges
          // h='calc(100% - 2rem)' // Adjust height to account for margin (2rem = 32px total margin)
        >
          <Card.Root
            borderRadius='md'
            border='2px solid transparent'
            backgroundImage={`url(${screenshotImg})`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            style={{ filter: 'drop-shadow(0 0 12px #0005e9)' }}
            w='100%'
            h='100%'
            overflow='hidden'
          ></Card.Root>
        </Box>

        {/* Bottom-left corner box */}
        <Box
          position='absolute'
          bottom={0}
          left={0}
          h='60px'
          bg='rgba(26, 26, 26, 0.5)'
          backdropFilter='blur(10px)'
          borderRadius='md'
          borderWidth='1px'
          borderColor='white'
          zIndex={10}
          animation={`${float} 4s ease-in-out infinite`}
          animationDelay='0s'
          padding='8px'
          display='flex'
          fontSize='14px'
          textAlign='left'
          gap='4px'
          fontWeight='900'
        >
          <Badge fontSize='16px'>90%</Badge>
          Lower
          <br />
          Costs
        </Box>

        {/* Top-right corner box */}
        <Box
          position='absolute'
          top={0}
          right={0}
          h='60px'
          bg='rgba(26, 26, 26, 0.5)'
          backdropFilter='blur(10px)'
          borderRadius='md'
          borderWidth='1px'
          borderColor='white'
          zIndex={10}
          animation={`${float} 4s ease-in-out infinite`}
          animationDelay='2s'
          padding='8px'
          display='flex'
          fontSize='14px'
          textAlign='left'
          gap='4px'
          fontWeight='900'
        >
          <Badge fontSize='20px'>6x</Badge>
          Faster
          <br />
          Innovation
        </Box>
      </Box>
      <Card.Root pointerEvents='auto'>
        <Card.Body gap='32px' md={{ padding: '32px' }}>
          <Tag>Why Choose FAST?</Tag>
          <Card.Header display='inline'>
            Accelerate Your <Emphasis>Innovation Process</Emphasis>
          </Card.Header>
          <Card.Description color='white'>
            <Flex direction='column' gap='4'>
              <Flex gap='2'>
                <Icon size='sm'>
                  <svg
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_832_4353)'>
                      <path
                        d='M18.6523 2.34994L9.81977 11.1824L6.15227 7.51744C5.84477 7.20994 5.34477 7.20994 5.03727 7.51744C4.72977 7.82494 4.72977 8.32494 5.03727 8.63244L9.26227 12.8574C9.41727 13.0124 9.61727 13.0874 9.81977 13.0874C10.0223 13.0874 10.2223 13.0099 10.3773 12.8574L19.7698 3.46744C20.0773 3.15994 20.0773 2.65994 19.7698 2.35244C19.4598 2.04244 18.9623 2.04244 18.6523 2.34994Z'
                        fill='#8285FF'
                      />
                      <path
                        d='M9.8275 1.8275C11.815 1.8275 13.6375 2.5375 15.065 3.7125L16.185 2.5925C14.4725 1.1325 12.2575 0.25 9.8275 0.25C4.41 0.25 0 4.66 0 10.0775C0 15.495 4.41 19.905 9.8275 19.905C15.245 19.905 19.6475 15.495 19.6475 10.0775C19.6475 8.815 19.41 7.61 18.97 6.4975L17.7325 7.735C17.9525 8.4775 18.0725 9.265 18.0725 10.0775C18.0725 14.6275 14.3725 18.3275 9.83 18.3275C5.28 18.3275 1.58 14.6275 1.58 10.0775C1.5775 5.5275 5.2775 1.8275 9.8275 1.8275Z'
                        fill='#8285FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_832_4353'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </Icon>
                Faster Innovation: Vast amounts of data and rapid insights
                accelerate decision making reducing innovation cycles from
                months to weeks.
              </Flex>
              <Flex gap='2'>
                <Icon size='sm'>
                  <svg
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_832_4353)'>
                      <path
                        d='M18.6523 2.34994L9.81977 11.1824L6.15227 7.51744C5.84477 7.20994 5.34477 7.20994 5.03727 7.51744C4.72977 7.82494 4.72977 8.32494 5.03727 8.63244L9.26227 12.8574C9.41727 13.0124 9.61727 13.0874 9.81977 13.0874C10.0223 13.0874 10.2223 13.0099 10.3773 12.8574L19.7698 3.46744C20.0773 3.15994 20.0773 2.65994 19.7698 2.35244C19.4598 2.04244 18.9623 2.04244 18.6523 2.34994Z'
                        fill='#8285FF'
                      />
                      <path
                        d='M9.8275 1.8275C11.815 1.8275 13.6375 2.5375 15.065 3.7125L16.185 2.5925C14.4725 1.1325 12.2575 0.25 9.8275 0.25C4.41 0.25 0 4.66 0 10.0775C0 15.495 4.41 19.905 9.8275 19.905C15.245 19.905 19.6475 15.495 19.6475 10.0775C19.6475 8.815 19.41 7.61 18.97 6.4975L17.7325 7.735C17.9525 8.4775 18.0725 9.265 18.0725 10.0775C18.0725 14.6275 14.3725 18.3275 9.83 18.3275C5.28 18.3275 1.58 14.6275 1.58 10.0775C1.5775 5.5275 5.2775 1.8275 9.8275 1.8275Z'
                        fill='#8285FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_832_4353'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </Icon>
                Smarter Investments: Identify high-impact opportunities and
                optimize R&D resources for maximum ROI.
              </Flex>
              <Flex gap='2'>
                <Icon size='sm'>
                  <svg
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_832_4353)'>
                      <path
                        d='M18.6523 2.34994L9.81977 11.1824L6.15227 7.51744C5.84477 7.20994 5.34477 7.20994 5.03727 7.51744C4.72977 7.82494 4.72977 8.32494 5.03727 8.63244L9.26227 12.8574C9.41727 13.0124 9.61727 13.0874 9.81977 13.0874C10.0223 13.0874 10.2223 13.0099 10.3773 12.8574L19.7698 3.46744C20.0773 3.15994 20.0773 2.65994 19.7698 2.35244C19.4598 2.04244 18.9623 2.04244 18.6523 2.34994Z'
                        fill='#8285FF'
                      />
                      <path
                        d='M9.8275 1.8275C11.815 1.8275 13.6375 2.5375 15.065 3.7125L16.185 2.5925C14.4725 1.1325 12.2575 0.25 9.8275 0.25C4.41 0.25 0 4.66 0 10.0775C0 15.495 4.41 19.905 9.8275 19.905C15.245 19.905 19.6475 15.495 19.6475 10.0775C19.6475 8.815 19.41 7.61 18.97 6.4975L17.7325 7.735C17.9525 8.4775 18.0725 9.265 18.0725 10.0775C18.0725 14.6275 14.3725 18.3275 9.83 18.3275C5.28 18.3275 1.58 14.6275 1.58 10.0775C1.5775 5.5275 5.2775 1.8275 9.8275 1.8275Z'
                        fill='#8285FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_832_4353'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </Icon>
                Lower Risk & Higher Accuracy: Anticipate trends, avoid costly
                missteps, and leverage knowlegde from patents, startups,
                scientific research, and market trends.
              </Flex>
              <Flex gap='2'>
                <Icon size='sm'>
                  <svg
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_832_4353)'>
                      <path
                        d='M18.6523 2.34994L9.81977 11.1824L6.15227 7.51744C5.84477 7.20994 5.34477 7.20994 5.03727 7.51744C4.72977 7.82494 4.72977 8.32494 5.03727 8.63244L9.26227 12.8574C9.41727 13.0124 9.61727 13.0874 9.81977 13.0874C10.0223 13.0874 10.2223 13.0099 10.3773 12.8574L19.7698 3.46744C20.0773 3.15994 20.0773 2.65994 19.7698 2.35244C19.4598 2.04244 18.9623 2.04244 18.6523 2.34994Z'
                        fill='#8285FF'
                      />
                      <path
                        d='M9.8275 1.8275C11.815 1.8275 13.6375 2.5375 15.065 3.7125L16.185 2.5925C14.4725 1.1325 12.2575 0.25 9.8275 0.25C4.41 0.25 0 4.66 0 10.0775C0 15.495 4.41 19.905 9.8275 19.905C15.245 19.905 19.6475 15.495 19.6475 10.0775C19.6475 8.815 19.41 7.61 18.97 6.4975L17.7325 7.735C17.9525 8.4775 18.0725 9.265 18.0725 10.0775C18.0725 14.6275 14.3725 18.3275 9.83 18.3275C5.28 18.3275 1.58 14.6275 1.58 10.0775C1.5775 5.5275 5.2775 1.8275 9.8275 1.8275Z'
                        fill='#8285FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_832_4353'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </Icon>
                Cost-Effective & Scalable: Reduce time, costs, and reliance on
                traditional, resource-heavy methods like traditional
                consultancies and research firms.
              </Flex>
            </Flex>
          </Card.Description>
        </Card.Body>
        <Card.Footer padding='32px'>
          <Button>Request a Demo</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

export default About;

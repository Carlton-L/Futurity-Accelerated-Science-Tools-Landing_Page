import { Box, Card, Flex, Icon } from '@chakra-ui/react';
import Emphasis from '../Emphasis';
import Tag from '../Tag';

const Insights = () => {
  return (
    <Flex
      maxWidth='1460px'
      padding='8px'
      justifyContent='center'
      alignItems='center'
      pointerEvents='auto'
      direction='column'
      gap='16px'
    >
      <Box
        position='relative'
        w='100%'
        borderRadius='md'
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
          w='100% - 2px'
          h='100%'
          overflow='hidden'
          m='2px' // This creates the border effect
        >
          <Card.Body>
            <Tag>Exclusive Insights</Tag>
            <Card.Header display='inline' my='16px'>
              Share your voice. Get <Emphasis>early access.</Emphasis>
            </Card.Header>
            <Card.Description display='inline' color='#A7ACB2'>
              <Flex gap='16px' direction='column'>
                Help us understand how your organization drives innovation.
                Complete our quick, anonymous survey to:
                <Flex direction='column' gap='4'>
                  <Flex gap='2' color='white'>
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
                    Gain exclusive early access to FAST innovation platform
                  </Flex>
                  <Flex gap='2' color='white'>
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
                    Access valuable research insights
                  </Flex>
                  <Flex gap='2' color='white'>
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
                    Benchmark your innovation capabilities against industry
                    leaders
                  </Flex>
                  Takes just 5 minutes – transform how you innovate.
                </Flex>
              </Flex>
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </Box>
    </Flex>
  );
};

export default Insights;

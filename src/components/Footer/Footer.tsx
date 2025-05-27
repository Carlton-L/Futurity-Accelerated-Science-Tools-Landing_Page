import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import FuturitySystemsLogo from '../../assets/futurity_systems_logo.svg';
import WomenTechEU from '../../assets/WomenTechEU.png';

const Footer = () => {
  return (
    <Box
      width='100%'
      bg='#1a1a1a'
      padding='16px'
      md={{ padding: '32px' }}
      display='flex'
      justifyContent='center'
    >
      <Flex direction='column' width='100%' maxWidth='1480px'>
        <Flex
          direction='column'
          md={{ flexDirection: 'row', justifyContent: 'space-between' }}
          borderBottom='1px solid white'
          gap='32px'
          py='32px'
        >
          <Flex direction='column' gap='32px'>
            <Image src={FuturitySystemsLogo} maxWidth='256px' />
            <Text textAlign='left' md={{ maxWidth: '820px' }}>
              Pioneering scientific solutions and innovation for Fortune 500
              companies and givernmental agencies worldwide.
            </Text>
          </Flex>
          <Image src={WomenTechEU} maxWidth='265px' alignSelf='center' />
        </Flex>
        <Flex
          direction='column'
          alignItems='center'
          gap='32px'
          lg={{ flexDirection: 'row', justifyContent: 'space-between' }}
          pt='32px'
        >
          <Text textAlign='center'>© MarsBound S.L. All rights reserved.</Text>
          <Flex direction='column' gap='16px' md={{ flexDirection: 'row' }}>
            <Link>Privacy Policy</Link>
            {/* Cookie Policy and Setting not necessary without Google Analytics */}
            {/* <Link>Cookie Policy</Link>
            <Link>Cookie Settings</Link> */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

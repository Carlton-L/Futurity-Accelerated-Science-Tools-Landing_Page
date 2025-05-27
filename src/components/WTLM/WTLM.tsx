import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Button from '../Button';

const WTLM = () => {
  return (
    <Box
      width='100%'
      backdropBlur='10px'
      backdropFilter='blur(10px)'
      backgroundColor='rgba(26, 26, 26, 0.5)'
    >
      <Flex
        maxWidth='1460px'
        padding='8px'
        justifyContent='center'
        alignItems='center'
        pointerEvents='auto'
        direction='column'
        gap='16px'
        py='128px'
        md={{ py: '140px' }}
      >
        <Heading>Want to Learn More?</Heading>
        <Text>
          Book a quick demo with our experts and see how FAST can accelerate
          your innovation strategy.
        </Text>
        <Button>Request a Demo</Button>
      </Flex>
    </Box>
  );
};

export default WTLM;

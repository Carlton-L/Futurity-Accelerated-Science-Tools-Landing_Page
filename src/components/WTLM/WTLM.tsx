import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import DemoButton from '../DemoButton';

const WTLM = () => {
  return (
    <Box
      width='100%'
      backdropBlur='10px'
      backdropFilter='blur(10px)'
      backgroundColor='rgba(26, 26, 26, 0.5)'
      display='flex'
      justifyContent='center'
    >
      <Flex
        width='100%'
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
        <Heading color='white'>Want to Learn More?</Heading>
        <Text color='white'>
          Book a quick demo with our experts and see how FAST can accelerate
          your innovation strategy.
        </Text>
        <DemoButton />
      </Flex>
    </Box>
  );
};

export default WTLM;

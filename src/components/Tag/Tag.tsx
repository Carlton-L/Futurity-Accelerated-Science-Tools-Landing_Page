import { Box, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    // TODO: Replace hex value with theme color
    <Box
      p='4px 10px'
      bg='#0005E9'
      borderRadius='8px'
      display='flex'
      width='fit-content'
    >
      <Text display='flex' width='auto'>
        {children}
      </Text>
    </Box>
  );
};

export default Tag;

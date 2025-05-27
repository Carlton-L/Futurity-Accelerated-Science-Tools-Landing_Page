import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type BadgeProps = BoxProps & {
  children?: ReactNode;
};

const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <Box
      w='40px'
      h='40px'
      borderRadius='full'
      bg='#0005E9'
      display='flex'
      alignItems='center'
      justifyContent='center'
      {...props}
    >
      {children}
    </Box>
  );
};

export default Badge;

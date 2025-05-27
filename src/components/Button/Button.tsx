import { Button as ChakraButton } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  variant?: 'solid' | 'outline' | 'ghost'; // optionally restrict or extend variants
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      borderRadius='full'
      size='lg'
      colorScheme='brand'
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;

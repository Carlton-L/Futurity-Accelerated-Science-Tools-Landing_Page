import { defineRecipe } from '@chakra-ui/react';

const Button = defineRecipe({
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
        borderColor: '#ffffff',
      },
    },
  },
});

export default Button;

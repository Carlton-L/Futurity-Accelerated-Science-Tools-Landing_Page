import { defineSlotRecipe } from '@chakra-ui/react';

const Card = defineSlotRecipe({
  slots: ['root', 'header', 'body', 'footer'],
  base: {
    root: {
      bg: 'rgba(26, 26, 26, 0.5)', // #1a1a1a with 50% opacity
      backdropFilter: 'blur(10px)',
      borderColor: '#ffffff',
      borderWidth: '1px',
      borderRadius: '8px',
      boxShadow: 'none',
      color: 'white',
    },
    header: {
      fontSize: '32px',
      fontFamily: 'TT Norms Pro Normal',
      lineHeight: '32px',
      p: '0px',
    },
    body: {
      p: '16px 8px',
    },
    footer: {
      p: 4,
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          bg: 'rgba(26, 26, 26, 0.5)', // #1a1a1a with 50% opacity
          backdropFilter: 'blur(10px)',
          borderColor: 'white',
          borderWidth: '1px',
        },
      },
    },
  },
});

export default Card;

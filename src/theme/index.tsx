import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import Button from './components/Button';
import Card from './components/Card';
import fonts from './tokens/fonts';

const config = defineConfig({
  theme: {
    recipes: {
      button: Button,
    },
    slotRecipes: {
      card: Card,
    },
    breakpoints: {
      base: '0px',
      sm: '560px',
      md: '1024px',
      lg: '1460px',
    },
    tokens: {
      fonts: fonts,
    },
    semanticTokens: {
      colors: {
        danger: { value: '{colors.red}' },
      },
    },
    keyframes: {
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;

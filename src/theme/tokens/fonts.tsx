import { defineTokens } from '@chakra-ui/react';

// TODO: Update fallback fonts
const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const fonts = defineTokens.fonts({
  heading: {
    value: `TT Norms Pro Normal, ${fallback}`,
  },
  body: {
    value: `JetBrains Mono, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  mono: {
    value: `JetBrains Mono, SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
});

export default fonts;

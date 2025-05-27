import { chakra } from '@chakra-ui/react';
import type { HTMLChakraProps } from '@chakra-ui/react';
import React from 'react';

// You can extend Chakra's HTML props if needed
type EmphasisProps = HTMLChakraProps<'span'>;

const Emphasis: React.FC<EmphasisProps> = (props) => {
  return (
    <chakra.span
      fontWeight='bold'
      bgGradient='linear-gradient(to right, #8285FF, #0005E9)'
      bgClip='text'
      color='transparent'
      display='inline'
      {...props}
    />
  );
};

export default Emphasis;

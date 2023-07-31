import React from 'react';
import { Box } from '@chakra-ui/react';

import Wrapper from './NodeWrapper';

export default function StackNode({ data }) {
  const { label = '', emoji='' } = data;

  return (
    <Wrapper label={label}>
      <Box height="100%" width="100%">
        {emoji}
      </Box>
    </Wrapper>
  );
}
import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

import Wrapper from './NodeWrapper';

export default function StackNode({ data }) {
  const { label = '', image='', emoji='' } = data;

  return (
    <Wrapper label={label}>
      <Box height="100%" width="100%">
        {image ? 

          <Image src={image} width={100} height={100} alt=""/> :
          <>
          {emoji}
          </>
        }
      </Box>
    </Wrapper>
  );
}
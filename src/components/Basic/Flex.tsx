import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  overflow,
} from 'styled-system';
import Box from './Box';

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  overflow,
);

export default Flex;

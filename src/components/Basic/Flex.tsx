import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';
import Box from './Box';
import { FlexType } from '../../types/styles.types';

const Flex = styled(Box)<FlexType>`
  display: 'flex', ${flexWrap} ${flexDirection} ${alignItems} ${justifyContent};
`;

export default Flex;

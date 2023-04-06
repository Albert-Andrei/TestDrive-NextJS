import styled from 'styled-components';
import {
  space,
  layout,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  borders,
  position,
  zIndex,
  height,
  gridArea,
  top,
  left,
  right,
  bottom,
} from 'styled-system';

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  space,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  borders,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  height,
  gridArea,
);

export default Box;

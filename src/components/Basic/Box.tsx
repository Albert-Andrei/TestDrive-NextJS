import { BoxType } from '../../types/styles.types';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  width,
  flex,
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
  alignItems,
  justifyContent,
  overflow,
  gridGap,
} from 'styled-system';

const Box = styled.div<BoxType>`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${color}
  ${height}
  ${width}
  ${flex}
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${borders}
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${gridArea}
  ${overflow}
  ${position}
  ${gridGap}
`;

export default Box;

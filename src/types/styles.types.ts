import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  HeightProps,
  WidthProps,
  FlexProps,
  AlignSelfProps,
  AlignItemsProps,
  JustifyContentProps,
  BorderProps,
  PositionProps,
  ZIndexProps,
  TopProps,
  BottomProps,
  LeftProps,
  RightProps,
  GridAreaProps,
  OverflowProps,
  GridGapProps,
  GridColumnGapProps,
  GridRowGapProps,
  GridColumnProps,
  GridRowProps,
  GridAutoFlowProps,
  GridAutoColumnsProps,
  GridAutoRowsProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  GridTemplateAreasProps,
  FlexWrapProps,
  FlexDirectionProps,
} from 'styled-system';

export type BoxType = ColorProps &
  SpaceProps &
  LayoutProps &
  HeightProps &
  WidthProps &
  PositionProps &
  FlexProps &
  AlignSelfProps &
  AlignItemsProps &
  JustifyContentProps &
  BorderProps &
  PositionProps &
  ZIndexProps &
  TopProps &
  BottomProps &
  LeftProps &
  RightProps &
  GridAreaProps &
  OverflowProps &
  GridGapProps &
  GridColumnGapProps &
  GridRowGapProps &
  GridColumnProps &
  GridRowProps &
  GridAutoFlowProps &
  GridAutoColumnsProps &
  GridAutoRowsProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  GridTemplateAreasProps;

export type FlexType = FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps;

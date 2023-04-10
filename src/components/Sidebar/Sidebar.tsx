import Box from '@components/Basic/Box';
import Flex from '@components/Basic/Flex';
import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Item bg="green"></Item>
      <Box flex={1} bg="yellow"></Box>
      <Item bg="green"></Item>
    </SidebarContainer>
  );
};

const SidebarContainer = styled(Flex)`
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 20px;
  width: 100%;
  height: calc(100vh - 40px);
  border-radius: 15px;
  padding: 10px;
  background-color: ${({ theme }) => theme.default.primary};
  /* background-color: red; */

  ${({ theme }) => theme.mediaQueriers.maxSm} {
    height: 50px;
    top: 0px;
    padding: 5px;
    flex-direction: row;
  }
`;

const Item = styled(Box)`
  width: 100%;
  height: 60px;
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueriers.maxSm} {
    width: 50px;
    height: 100%;
  }
`;

import { DefaultTheme } from 'styled-components';
import global from '../theme';

const lightTheme: DefaultTheme = {
  ...global,
  default: {
    primary: '#fff',
    background: '#F7F6F9',
    fontColor: '#000',
  },
};

export default lightTheme;

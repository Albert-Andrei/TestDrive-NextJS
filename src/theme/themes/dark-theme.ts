import { DefaultTheme } from 'styled-components';
import global from '../theme';

const darkTheme: DefaultTheme = {
  ...global,
  default: {
    primary: '#000',
    background: '#171717',
    fontColor: '#fff',
  },
};

export default darkTheme;

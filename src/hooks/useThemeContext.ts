import { Dispatch, createContext, useContext } from 'react';

interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: Dispatch<React.SetStateAction<boolean>>;
}

export const Theme = createContext<DarkModeProps>({
  darkMode: true,
  setDarkMode: () => {},
});

export const useThemeContext = () => useContext(Theme);

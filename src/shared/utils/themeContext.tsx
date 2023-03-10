import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { AppThemes } from '../enums';
import { IProps } from '../interfaces';
import { LightTheme, DarkTheme } from '../themes';

interface IThemeContextData {
  themeName: AppThemes;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IProps> = ({ children }) => {
  const [themeName, setThemeName] = useState(AppThemes.LIGHT);

  const toggleTheme = useCallback(() => {
    setThemeName((oldTheme) =>
      oldTheme === AppThemes.LIGHT ? AppThemes.DARK : AppThemes.LIGHT,
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === AppThemes.LIGHT) return LightTheme;
    else return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

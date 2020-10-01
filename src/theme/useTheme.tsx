import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';

const useTheme = (
  themeOptions: ThemeOptions
): [ThemeOptions, (updateTheme: ThemeOptions) => void] => {
  const newTheme: Theme = createMuiTheme(themeOptions);
  const [theme, setTheme] = React.useState(newTheme);

  const updateTheme = (updatedTheme: ThemeOptions): void => {
    setTheme(createMuiTheme(updatedTheme));
  };

  return [theme, updateTheme];
};

export default useTheme;

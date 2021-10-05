export type ThemeType = 'light' | 'dark';

export const colors = {
  primary: '#0db293',
  secondary: '#00d9d5',
  success: '#33ff2f',
  danger: '#ff002e',
  waring: '#f2df0f',
  info: '#3a74e7',
};

export type Colors = typeof colors;
export type Themes = typeof light;

export const light = {
  type: 'light',
  background: '#fff',
  paper: '#ededed',
  disabled: '#c4c4c4',
  text: '#000',
  textContrast: '#fff',
  placeholder: '#6d6d6d',
};

export const dark: Themes = {
  type: 'dark',
  background: '#000',
  paper: '#414141',
  disabled: '#414141',
  text: '#fff',
  textContrast: '#000',
  placeholder: '#6d6d6d',
};

export const theme = [light, dark];

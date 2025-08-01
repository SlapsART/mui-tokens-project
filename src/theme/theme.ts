// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { spacingUnit } from './spacing';
/*import tokensData from './tokens.json';
const { tokens } = tokensData;

export const theme = createTheme({
  palette: {
            primary: {
            main: tokens.paletteLight.primary.main,
            },
            secondary: {
            main: tokens.paletteLight.secondary.main,
            },
            error: {
            main: tokens.paletteLight.error.main,
            },
            background: {
            default: tokens.paletteLight.background.Paper,
            },
            text: {
            primary: tokens.paletteLight.text.primary,
            secondary: tokens.paletteLight.text.secondary,
            },
        },
    }
)*/

// theme.ts
export const theme = createTheme({
    
  palette,
  typography,
  spacing: spacingUnit, // ejemplo: 8
});

// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import { tokens } from './tokens.json';

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
)

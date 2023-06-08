import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            light: '#052e21',
            main: '#061b14',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b6f28d',
            main: '#8cb570',
            dark: '#89d953',
            contrastText: '#061b14',
        },
        background: {
            paper: '#8cb570',
            default: '#EBEBEB',
        }
    }
});
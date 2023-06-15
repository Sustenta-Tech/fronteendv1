import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#b6f28d',
            main: '#fff',
            dark: '#89d953',
            contrastText: '#000',
        },
        secondary: {
            light: '#052e21',
            main: '#5E773E',
            dark: '#000000',
            contrastText: '#fff',
        },
        background: {
            paper: '#5E773E',
            default: '#061b14', //#131615
        },
    },
    typography: {
        allVariants: {
            color: 'white',
        }
    }
});
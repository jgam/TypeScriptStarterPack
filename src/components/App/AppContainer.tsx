import React, { ReactElement } from 'react'

import AppPresenter from './AppPresenter';

//reset & global styles
import {GlobalStyle} from '../../styles/global-style';

//theme
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';



interface Props {
    
}

export default function AppContainer({}: Props): ReactElement {
    return (
        <div>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <AppPresenter/>
            </ThemeProvider>
        </div>
    )
}

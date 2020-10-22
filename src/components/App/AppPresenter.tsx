import React, { ReactElement } from 'react'

//theme
import { theme } from '../../styles/theme';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${(props) => props.mainBackground};
    color: ${(props) => props.primaryText};
`;



interface Props {
    
}

function AppPresenter({}: Props): ReactElement {
    console.log(theme.dark)
    return (
        <div>
            aa
                <Container {...theme.dark}>
                    <h2>This is APp Presenter</h2>
                </Container>

        </div>
    )
}

export default AppPresenter

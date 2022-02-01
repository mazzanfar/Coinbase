import React from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import Main from '../Components/Main'


const Dashboard = ({address}) => {
    return (
        <Wrapper> 
            <MainContainer>
                <Header/>
                <Main/>
            </MainContainer>
        </Wrapper>  
    )
}

export default Dashboard

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    max-width: 100vw;
    background-color: #0a0b0d;
    color: white;
`
const MainContainer = styled.div`
    flex: 1;

`
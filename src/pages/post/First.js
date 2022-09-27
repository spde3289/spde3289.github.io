import React from 'react';
import styled from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FirstPost = () => {
    return(
        <>
            <Header/>
            <Main>
                <ContentHeader>
                <h1>useEffect 무한루프</h1>
                <Info>
                    
                </Info>
                </ContentHeader>
            </Main>
            <Footer/>
        </>
    );
};
    
const Main = styled.div`
    width: 1000px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 2.5rem;
`;

const ContentHeader = styled.header`
    
`;

const Info = styled.div`

`

export default FirstPost;
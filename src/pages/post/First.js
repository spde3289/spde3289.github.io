import React from 'react';
import styled from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';

const FirstPost = () => {
    return(
        <>
            <Header/>
            <Main>
                <ContentHeader>
                    <h1>useEffect 무한루프</h1>
                    <Info>
                        <Tag tagName="react"/>
                        2022.09.27
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
`;

const ContentHeader = styled.header`
    padding: 15px;
    border-bottom: 1px solid #ccc;
`;

const Info = styled.div`
    font-size: 15px;
`;



export default FirstPost;
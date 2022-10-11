import React from 'react';
import styled from "styled-components";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Giscus from '@giscus/react';

const SecondPost = () => {
    return(
        <>
        <Header/>
        <MarkDownstyle>
            asdasdasdas
        </MarkDownstyle>
        <Giscus
                repo="spde3289/spde3289.github.io"
                repoId="R_kgDOH_0sSg"
                category="Announcements"
                categoryId="DIC_kwDOH_0sSs4CR0Ux"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="light"
                lang="ko"
                loading="anonymous"
            />
        <Footer/>
        </>
    );
};

const MarkDownstyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;



export default SecondPost;
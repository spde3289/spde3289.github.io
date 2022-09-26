import React from 'react';
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MarkDownstyle = styled.div`
    width: 1000px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 2.5rem;
    `;

const markdown = `
# useEffect
첫 글은 내가 블로그를 만들면서 있었던 문제들을 적어보려 한다.
처음 렌더할때 데이터를 받아와 처리해야하는 일이 있는데 
useEffect를 

`;



const FirstPost = () => {
    return(
        <>
        <Header/>
        <MarkDownstyle>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </MarkDownstyle>
        <Footer/>
        </>
    );
};

export default FirstPost;
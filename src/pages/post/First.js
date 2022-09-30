import React from 'react';
import styled from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostHeader from '../../components/PostHeader';

const FirstPost = () => {
    return(
        <>
            <Header/>
            <Main>
                <PostHeader 
                title='useEffect 무한루프' 
                tagName='react' 
                date='2022.09.28'/>
                <div>
                <PostText>
                    이 블로그를 만들면서 useEffect를 사용했는데 렌더링이 계속 일어나 사이트가 다운됐었다 
                </PostText>
                <CodeBlock>
                    <code>
                       
                    </code>
                </CodeBlock>
                </div>

                
            </Main>
            <Footer/>
        </>
    );
};
    
const Main = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

const PostText = styled.p`
    font-size: 16px;
`;

const CodeBlock = styled.pre`
    white-space: normal;
    word-break: break-all;
    overflow: auto;
`;

export default FirstPost;
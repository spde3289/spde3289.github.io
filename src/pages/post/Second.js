import React from 'react';
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const SecondPost = () => {
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

const MarkDownstyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
    `;

const markdown = `
# h1
# 헤딩 h1
## h2
### h3

**굵게**
\`\`\`
    코드블럭
\`\`\`
*기울이기*
글자 \`배경색\`
> 인용문
그냥 글
두번째 글 
`;

export default SecondPost;
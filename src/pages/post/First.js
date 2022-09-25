import React from 'react';
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MarkDownstyle = styled.div`
    width: 1000px;
    font-size: 1rem;
    line-height: 2.5rem;
    `;

const markdown = `
# h1
# 헤딩 h1
## h2
### h3

* [ ] to do
* [x] done

**굵게**
\`\`\`
    코드블럭
\`\`\`
*기울이기*
글자 \`배경색\`
> 인용문
그냥 글
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
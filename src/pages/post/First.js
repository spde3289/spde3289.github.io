import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';


const FirstPost = () => {
    return(
        <>
            <Main>
                <PostHeader 
                title='useEffect 무한루프' 
                tagName='react' 
                date='2022.09.28'/>
                <div>
                    <PostText>
                        이 블로그를 만들면서 useEffect를 사용했는데 렌더링이 계속 일어나 사이트가 다운됐었다 
                    </PostText>
                    <PostText>
                        useEffect(함수,[종속성])
                    </PostText>
                    <div>
                        <img alt="code1" src='/img/useEffect_render1/code_1.png'/>
                    </div>
                    <PostText>
                        useEffect는 종속성이 변했을 때 useEffect 내부에 있는 함수를 실행시키는 역할을 한다. 
                        자꾸 렌더링이 일어나는 이유를 찾아보니 함수부분에 setState를 하고 종속성에 state 값을 넣어줘서 그런거였다.
                    </PostText>
                    <PostText>
                        setState를 해줘도 지장이 없는 값을 종속성에 넣어줌으로써 해결했다
                    </PostText>
                    <CodeBlock>
                        <Code>useEffect{'(() => {'}</Code>
                        <Code>  setPageDate(content.slice(currentPage*5-5, currentPage*5))</Code>
                        <Code>  setLoading(false)</Code>
                        <Code>{'},[currentPage])'}</Code>
                    </CodeBlock>
                    <PostText>
                        하나 더 배운점 너무 useEffect를 사용하면 같은 state값을 넣어주지 않아도 코드의 복잡성이 올라가 
                        예상하지 못한 문제가 생길 수 있으니 남발하는건 자제하도록 해야겠다.
                    </PostText>
                </div>
            </Main>
            <Comment>
                <GiscusApp/>
            </Comment>
        </>
    );
};

const Main = styled.main`
    width: 1000px;
    margin: 0 auto;
`;

const PostText = styled.p`
    font-size: 16px;
    margin: 50px 0;
`;

const CodeBlock = styled.pre`
    width: 900px;
    margin: 0 auto;
    margin-bottom: 25px;
    padding: 20px;
    background-color: #272822;
    font-size: 1em;
`;

const Code = styled.div`
    color: #CCC;
`;

const Comment = styled.div`
    margin: 0 auto;
    width: 800px;
`;


export default FirstPost;
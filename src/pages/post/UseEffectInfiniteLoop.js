import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';
import code_1 from '../../imgs/useEffect_render1/code_1.png';
import code_2 from '../../imgs/useEffect_render1/code_2.png';

const UseEffectInfiniteLoop = () => {
    return(
        <>
            <A>
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
                    <CodeImg>
                        <img alt="code1" src={code_1}/>
                    </CodeImg>
                    <PostText>
                        useEffect는 종속성이 변했을 때 useEffect 내부에 있는 함수를 실행시키는 역할을 한다. 
                        자꾸 렌더링이 일어나는 이유를 찾아보니 함수부분에 setState를 하고 종속성에 state 값을 넣어줘서 그런거였다.
                    </PostText>
                    <PostText>
                        setState를 해줘도 지장이 없는 값을 종속성에 넣어줌으로써 해결했다
                    </PostText>
                    <CodeImg>
                        <img alt='code2' src={code_2}/>
                    </CodeImg>
                    <PostText>
                        하나 더 배운점 너무 useEffect를 사용하면 같은 state값을 넣어주지 않아도 코드의 복잡성이 올라가 
                        예상하지 못한 문제가 생길 수 있으니 남발하는건 자제하도록 해야겠다.
                    </PostText>
                </div>
            <Comment>
                <B>
                    <GiscusApp/>
                </B>
            </Comment>
            </Main>
            </A>
        </>
    );
};

const A = styled.div`
    display: flex;
    justify-content: center;
`;
const Main = styled.main`
    width: 1000px;
`;

const PostText = styled.p`
    font-size: 16px;
    margin: 50px 0;
`;

const CodeImg = styled.div`
    display: flex;
    justify-content: center;
`;

const Comment = styled.div`
    
    display: flex;
    justify-content: center;
`;

const B = styled.div`
    width: 800px;
`;


export default UseEffectInfiniteLoop;
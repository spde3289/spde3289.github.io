import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';
import code_1 from '../../imgs/useEffect_render1/code_1.png';
import code_2 from '../../imgs/useEffect_render1/code_2.png';

const UseEffectInfiniteLoop = () => {
    
    return(
        <PostContainer>
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
                    우선 useEffect 가 무슨 일을 하는지 알아보자. <br/>
                    <br/>
                        useEffect는 컴포넌트가 마운트 된 후, 컴포넌트가 업데이트가 된 후 컴포넌트가 마운트 되기 전 실행된다.<br/>
                        이때 종속정에 특정 state나 props를 전달하면 혹은 변경될 때 useEffect가 실행된다. <br/>
                    <br/>
                        seEffect 가 어떻게 동작하는지 알았으면 다시 문제를 확인해보자. 
                    </PostText>
                    <PostText>
                        useEffect(함수,[종속성])
                    </PostText>
                    <CodeImg>
                        <img alt="code1" src={code_1}/>
                    </CodeImg>
                    <PostText>
                        useEffect 함수에 state를 변경하는 setPage를 실행시키면 page의 값이 변경이 되고 종속정의 값이 변하여 <br/>
                        useEffect 가 다시 실행돼서 무한렌더링이 일어났던 것이다.  
                    </PostText>
                    <PostText>
                        그럼 이 문제를 어떻게 해결해야 할까 <br/>
                    <br/>
                        첫번째로는 종속성에 빈 배열을 제공하는 것이다. 빈 배열을 제공함으로써 종속성의 값이 변할 일이 없으니<br/>
                        단 한번만 마운트후 종료된다. <br/>
                    <br/>
                        허나 위의 방법을 이용하면 처음 의도한 방법과 달리 state를 실행할 때 마다 값이 변경되지 않는다. <br/>
                        그러니 코드를 종속정에 의존하지 않도록 짜는것 이다. 
                    </PostText>
                    <CodeImg>
                        <img alt='code2' src={code_2}/>
                    </CodeImg>
                    <PostText>
                        react hook은 아주 편리한 기능인 것 같다 하지만 이와 같이 잘 모르고 사용하게 되면 에러가 생기게 되니 <br/>
                        잘 숙지후에 이용하도록 하자.
                    </PostText>
                </div>
                <Comment>
                    <GiscusApp/>
                </Comment>
            </Main>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
`;

const Main = styled.main`
    width: ${props => props.theme.boxSize.main};
`;

/* const SubTitle = styled.h2`
    font-size: ${props => props.theme.fontSize.subTitle};
    margin-bottom: ${props => props.theme.margin.titBtm};
`; */

const PostText = styled.p`
    font-size: ${props => props.theme.fontSize.nomal};
    margin-bottom: ${props => props.theme.margin.textBtm};
`;

const CodeImg = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    margin-bottom:  ${props => props.theme.margin.textBtm};
`;

const Comment = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    align-items: ${props => props.theme.display.content};
    width: ${props => props.theme.boxSize.main};
`;

export default UseEffectInfiniteLoop;
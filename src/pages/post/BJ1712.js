import React from 'react';
import styled from "styled-components";
import PostHeader from '../../components/PostHeader';
import GiscusApp from '../../components/GiscusApp';
import Bj1712 from '../../imgs/BJ1712/BJ1712.png';

const BJ1712 = () => {
    return(
        <>
            <A>
                <Main>
                    <PostHeader 
                    title='백준 알고리즘' 
                    tagName='알고리즘' 
                    date='2022.12.01'/>
                    <div>
                        <PostText>
                            <a href='https://www.acmicpc.net/problem/1712'>https://www.acmicpc.net/problem/1712</a>
                        </PostText>
                        <SubTitle>
                            문제 
                        </SubTitle>
                        <PostText>
                            첫 줄에 A, B, C 가 주어지는데 A는 고정비용 B는 가변비용 C는 판매가격이라고 할 때 최초로 총 수입이 총 비용보다 많아져 
                            이익이 발생하는 손익분기점을 구하는 문제이다
                        </PostText>
                        <SubTitle>
                            풀이
                        </SubTitle>
                        <CodeImg>
                            <img alt="code1" src={Bj1712}/>
                        </CodeImg>

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

const SubTitle = styled.h2`
    font-size: 26px;
`;

const PostText = styled.p`
    width: 56em;
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



export default BJ1712;
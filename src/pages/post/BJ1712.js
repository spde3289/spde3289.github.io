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
                        월드전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며, 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.

예를 들어 A=1,000, B=70이라고 하자. 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열 대 생산하는 데는 총 1,700만원이 든다.

노트북 가격이 C만원으로 책정되었다고 한다. 일반적으로 생산 대수를 늘려 가다 보면 어느 순간 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 많아지게 된다. 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 손익분기점(BREAK-EVEN POINT)이라고 한다.

A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.
                        </PostText>
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
import React from 'react';
import styled from "styled-components";
import Passengers from '../components/Passengers';

const Home = () => {
    return(
        <div>
            <Main>
                <Introduction>
                <p>
                README.md <br/>
                <br/>
                안녕하세요. <br/>
                꾸준하게 공부하는 주니어 개발자 김지훈입니다. <br/>
                잘못된 부분이 있으면 언제든지 알려주세요!
                </p>
                </Introduction>
                <Content>
                    <ContentBoxArea>
                        <Passengers/>
                    </ContentBoxArea>
                </Content>
            </Main>
        </div>
    );
};

const Main = styled.main`
    margin: 0 auto;
    width: 1000px;
    //border: 0.1px dashed #565655; // 나중에 제거
    font-size: 16px;
`;

const Introduction = styled.div`
    width: 100%;
    margin-bottom: 80px;
    //border: 0.1px dashed #565655; // 나중에 제거
    font-size: 20px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ContentBoxArea = styled.div`
    margin: 20px;
    flex-wrap: wrap;
`;


export default Home;


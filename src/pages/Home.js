import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentBox from '../components/ContentBox';


const Home = () => {
    return(
        <div>
            <Header></Header>
            <Main>
                <Introduction>
                안녕하세요. <p/>
                꾸준하게 공부하는 주니어 개발자 김지훈입니다.
                </Introduction>
                <ContentBoxArea>
                    최신 포스트 
                    <ContentBox title="나의 첫 글" ></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                </ContentBoxArea>

            </Main>
            <Footer></Footer>
        </div>
    );
};

const Main = styled.main`
    margin: 0 auto;
    padding: 20px;
    width: 1000px;
    border: 0.1px dashed #565655; // 나중에 제거
    font-size: 16px;
`;

const Introduction = styled.div`
    font-size: 20px;
`

const ContentBoxArea = styled.div`
    width: 640px;
    margin: 20px;
    padding: 20px;
    border: 0.1px dashed #565655; // 나중에 제거
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default Home;


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
                README.md <br/>
                안녕하세요. <br/>
                꾸준하게 공부하는 주니어 개발자 김지훈입니다. <br/>
                
                </Introduction>
                <Content>
                <ContentBoxArea>
                    <h2>최신 포스트</h2> 
                    <ContentBox title="나의 첫 글" content='보통 우리가' date='2022.09.13' category='웹 알고리즘'></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentBox title="나의 두번째 글"></ContentBox>
                    <ContentsMore>more</ContentsMore>
                </ContentBoxArea>
                <ConstentList></ConstentList>
                </Content>
            </Main>
            <Footer></Footer>
        </div>
    );
};

const Main = styled.main`
    margin: 0 auto;
    width: 1000px;
    border: 0.1px dashed #565655; // 나중에 제거
    font-size: 16px;
`;

const Introduction = styled.div`
    border: 0.1px dashed #565655; // 나중에 제거
    font-size: 20px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


const ContentBoxArea = styled.div`
    width: 640px;
    margin: 20px;
    //border: 0.1px dashed #565655; // 나중에 제거
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ContentsMore = styled.button`
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border: 1px solid #bbb;
    border-radius: 10px;
    text-align: center;
`;

const ConstentList = styled.div`
    border: 1px solid #000;
    width: 270px;
`;



export default Home;


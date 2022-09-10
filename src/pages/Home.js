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
                <Content>
                <ContentBoxArea>
                    최신 포스트 
                    <ContentBox title="나의 첫 글" content='나의 첫 글 내용'></ContentBox>
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
    padding: 20px;
    width: 1000px;
    border: 0.1px dashed #565655; // 나중에 제거
    font-size: 16px;
`;

const Introduction = styled.div`
    font-size: 20px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


const ContentBoxArea = styled.div`
    width: 640px;
    margin: 20px;
    padding: 20px;
    border: 0.1px dashed #565655; // 나중에 제거
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


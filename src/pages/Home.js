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
                    <ContentBox title="나의 첫 글" content='보통 우리가 웹 사이트를 접속할 때, URL을 통해 "http://domain.com", "https://domain.com"이러한 도메인 주소를 입력해서 접속한다. 이때 도메인 맨 앞에 HTTP라는 텍스트를 붙이는데, 이것이 바로 웹브라우저상에서 데이터를 주고받는 프로토콜이다. 프로토콜은 간단하게 말해서 하나의 규칙인데, 웹브라우저 상에서는 HTTP라는 규칙을 통해 통신한다고 생각하면 된다. HTTP는 Hyper Text Transfer Protocol의 약자로 HTML 파일을 전송하는 프로토콜이라는 의미를 갖는다. 하지만 이것은 초기의 목적이며 요즘은 Json이나 이미지와 같은 것들도 전송한다.  첫번째 글 내용'></ContentBox>
                    <ContentBox title="나의 두번째 글" ></ContentBox>
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


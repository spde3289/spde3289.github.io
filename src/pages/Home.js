import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Passengers from '../components/Passengers';
import Footer from '../components/Footer';

const Home = () => {
 
    return(
        <div>
            <Header/>
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
                    <CategoryList>
                        <ul>
                            웹
                            <li>웹 게시글1</li>
                            <li>웹 게시글2</li>
                            <li>웹 게시글3</li>
                        </ul>
                        <ul>
                            알고리즘
                            <li>알고리즘문제풀이  게시글1</li>
                            <li>알고리즘문제풀이  게시글2</li>
                            <li>알고리즘문제풀이  게시글3</li>
                        </ul>
                        <ul>
                            책
                            <li>책 게시글1</li>
                            <li>책 게시글2</li>
                            <li>책 게시글3</li>
                        </ul>
                    </CategoryList>
                </Content>
            </Main>
            <Footer/>
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
    //border: 0.1px dashed #565655; // 나중에 제거
    flex-wrap: wrap;
`;

const CategoryList = styled.div`
    border: 1px solid #000;
    width: 270px;
`;

export default Home;


import React from 'react';
import styled from "styled-components";
import MainHeader from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return(
        <div>
        <MainHeader></MainHeader>
        <AboutMain>
            <AboutMe>
                <h2 className="title">About Me</h2>
                이곳에 저의 성장과정과 근황을 올리려고 합니다.<p/>
                개발블로그를 시작한 김지훈 이라고 합니다.<p/>
                <TechStack>
                    <Tech>html</Tech>
                    <Tech>css</Tech>
                    <Tech>javascript</Tech>
                    <Tech>react</Tech>
                </TechStack>
            </AboutMe>
            <TimeLineSection>
                <h2 className="title">Time Line</h2>
                <TimeLine>
                    <div>2021년 12월 개발시작</div>
                </TimeLine>
                <TimeLine>
                    <div>2022년 9월 개발블로그 시작</div>
                </TimeLine>
            </TimeLineSection>
        </AboutMain>
        <Footer></Footer>
        </div>
    
    );
};

const AboutMain = styled.main `
    height: calc(100vh - 385px);
    margin: 0 auto;
    margin-top: 70px;
    width: 1000px;
    .title{
        margin-bottom: 15px;
        font-size: 24px;
    }
`;

const AboutMe = styled.div`
    padding: 15px;
    
    `;

const TechStack = styled.div`
    display:flex;
    font-size: 15px;
    font-weight: 500;
    `

const Tech = styled.div`
    border: 1px solid #f3f3f4;
    background: #f3f3f4;
    border-radius: 10px;
    padding: 5px 7px;
    margin-right: 10px;
`;

const TimeLineSection = styled.div`
    margin-top: 50px;
    padding: 15px;
`;

const TimeLine = styled.div`
    display: flex;
    padding-bottom: 10px;
    &:before {
        content: "";
        align-self: center;
        border: 2px solid #828282;
        border-radius: 10px;
        height: 10px;
        left: -1px;
        position: relative;
        transform: translatex(-50%);
        width: 10px;
    }
`

export default About;
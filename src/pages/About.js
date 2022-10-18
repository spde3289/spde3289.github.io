import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from '../components/Tag';

const About = () => {
    return(
        <>
            <Header></Header>
            <AboutMain>
                <AboutMe>
                    <h2 className="title">About Me</h2>
                    이곳에 저의 성장과정과 근황을 올리려고 합니다.<p/>
                    개발블로그를 시작한 김지훈 이라고 합니다.<p/>
                    <TagArea>
                        <Tag tagName='html'/>
                        <Tag tagName='css'/>
                        <Tag tagName='js'/>
                        <Tag tagName='react'/>
                    </TagArea>
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
        </>
    );
};

const AboutMain = styled.main `
    height: calc(100vh - 385px);
    margin: 0 auto;
    width: 1000px;
    .title{
        margin-bottom: 15px;
        font-size: 24px;
    };
`;

const AboutMe = styled.div`
    padding: 15px;
`;

const TagArea = styled.div`
    display:flex;
    font-size: 15px;
    font-weight: 500;
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
        height: 10px;
        width: 10px;
        align-self: center;
        border: 1.5px solid #828282;
        border-radius: 10px;
        transform: translatex(-50%);
    };
`;

export default About;
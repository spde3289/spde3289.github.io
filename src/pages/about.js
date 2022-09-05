import React from 'react';
import styled from "styled-components";
import MainHeader from '../components/MainHeader'

const About = () => {
    return(
        <div>
        <MainHeader></MainHeader>
        <div>
            개발블로그를 시작한 김지훈 이라고 합니다.<p/>
            이곳에 저의 성장과정과 근황을 올리려고 합니다. 
        </div>
        <Box>asd</Box>
        <div><a href='https://github.com/spde3289'>깃헙</a></div>
        </div>
    );
};

const Box = styled.div`
align-items: center;
width: 700px;
`

export default About;
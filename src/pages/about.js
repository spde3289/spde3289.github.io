import React from 'react';
/* import styled from "styled-components"; */
import MainHeader from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return(
        <div>
        <MainHeader></MainHeader>
        <div>
            개발블로그를 시작한 김지훈 이라고 합니다.<p/>
            이곳에 저의 성장과정과 근황을 올리려고 합니다. 
        </div>
        <div>사용한 기술 : React, styled-components, router, </div>
        <Footer></Footer>
        </div>
    
    );
};


export default About;
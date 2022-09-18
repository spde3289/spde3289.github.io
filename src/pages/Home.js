import { React, useState } from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Paging from '../components/Paging';
import ContentBox from '../components/ContentBox';



const Home = () => {
    const [content, setcontent] = useState([
        {key: 1, title: '타이틀', body: 'This is', date:'2022.09.13', category: '웹'},
        {key: 2, title: '타이틀', body: 'This is', date:'2022.08.17', category: '잡담'},
        {key: 3, title: '타이틀', body: 'This is', date:'2022.08.13', category: '서버'},
        {key: 4, title: '타이틀', body: 'This is', date:'2022.06.13', category: '책'},
        {key: 5, title: '타이틀', body: 'This is', date:'2022.01.13', category: '알고리즘'}
    ]);

    const ContentList = content.map((items)=>(
        <ContentBox title={items.title} content={items.content} date={items.date} category={items.category}></ContentBox>
    ))

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
                        <h2>최신 포스트</h2> 
                        {ContentList}
                        <Paging/>
                    </ContentBoxArea>
                    <CategoryList>
                        태그들~ 카테고리들~
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
    border: 0.1px dashed #565655; // 나중에 제거
    font-size: 16px;
`;

const Introduction = styled.div`
    width: 100%;
    margin-bottom: 80px;
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

const CategoryList = styled.div`
    border: 1px solid #000;
    width: 270px;
`;

export default Home;


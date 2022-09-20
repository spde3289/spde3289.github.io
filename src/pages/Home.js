import React, { useState } from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Paging from '../components/Paging';
import ContentBox from '../components/ContentBox';

const Home = () => {
    const content = [
        {key: 1, title: '타이틀1', body: 'This is 1', date:'2022.09.13', category: '웹'},
        {key: 2, title: '타이틀2', body: 'This is 2', date:'2022.08.17', category: '잡담'},
        {key: 3, title: '타이틀3', body: 'This is 3', date:'2022.08.13', category: '서버'},
        {key: 4, title: '타이틀4', body: 'This is 4', date:'2022.06.13', category: '책'},
        {key: 5, title: '타이틀5', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
        {key: 6, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
        {key: 7, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
        {key: 8, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
        {key: 9, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
        {key: 10, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
        {key: 11, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
    ];
    const [post, setPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(5);
    
    function keyIndex (key) {
        setCurrentPage(5*key);
        console.log(currentPage);

    };
    console.log(currentPage);
    React.useEffect(()=>{
        setPost(content.slice(currentPage-5,currentPage))
    },[currentPage])
    
    const PostList = post.map((items)=>(
        <ContentBox
        key={items.key} 
        title={items.title} 
        content={items.body} 
        date={items.date} 
        category={items.category}>
        </ContentBox>
    ));

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
                        {PostList}
                        <Paging propsFunction={keyIndex}/>
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
    height: 862px;
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


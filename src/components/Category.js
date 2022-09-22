import { React, useEffect, useState } from 'react';
import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'

const Paging = (props) => {
    const [page, setpage] = useState([
        {key: 1, isClicked:1 },
        {key: 2, isClicked:0 },
        {key: 3, isClicked:0 },
        {key: 4, isClicked:0 },
        {key: 5, isClicked:0 },   
        {key: 6, isClicked:0 },   
        {key: 7, isClicked:0 },   
        {key: 8, isClicked:0 },   
        {key: 9, isClicked:0 },   
    ]);

    let maxpage = Math.ceil(props.totalpost/5);
    let currentkey = page.find(item=>item.isClicked === 1).key;

    const dirextPage = (key) => {
        setpage([...page].slice(0, maxpage <= 10 ? maxpage : maxpage%10-5 ).map(item=>{
            return{
                key: item.key,
                isClicked: item.key === key ? 1 : 0
            };
        }));
    };

    const pageHandler = (type) => {
        let currentIndex = page.findIndex(item => item.isClicked === 1);
        let updateIndex = type === 'prev' 
        ? currentIndex -1
        : currentIndex + 1;
        console.log(updateIndex)
        console.log(currentkey)
        console.log(maxpage)

        if(updateIndex === maxpage ){
            if(maxpage <= currentkey){
                console.log('여기0')
                updateIndex = maxpage-1;
                setpage(
                    [...page]
                    .slice(0,2)
                    .map((item, index)=>{
                        return {
                            key : item.key,
                            isClicked: index === updateIndex ? 1 : 0
                        };
                }));
            }else{
            console.log('여기1')
            updateIndex = 0;

            setpage(
                [...page]
                .slice(0, maxpage <= 10 ? maxpage : maxpage%10-5 )
                .map((item, index)=>{
                    return {
                        key : item.key+5,
                        isClicked: index === updateIndex ? 1 : 0
                    };
            }))
        };
        }else if(updateIndex === -1){
            if(page[0].key !== 1 ){
                console.log('여기2')
                updateIndex = maxpage -1;
                setpage([...page].slice(0, maxpage <= 10 ? maxpage : maxpage%10-5 ).map((item, index)=>{
                    return {
                        key : item.key-5 > 0 ? item.key-5 : item.key ,
                        isClicked: index === updateIndex ? 1 : 0
                    };
                }));
            }else{
                console.log('여기3')
                updateIndex = 0
                setpage([...page].slice(0, maxpage <= 10 ? maxpage : maxpage%10-5 ).map((item, index)=>{
                    return {
                        key : item.key-5 > 0 ? item.key-5 : item.key ,
                        isClicked: index === updateIndex ? 1 : 0
                    };
                }));
            };
        }else{
            setpage([...page].slice(0, maxpage <= 10 ? maxpage : maxpage%10-5 ).map((item, index)=>{
                console.log('여기')
                return {
                    key : item.key,
                    isClicked: index === updateIndex ? 1 : 0
                };
            }));
        }
    };

    const pages = page
    .slice(0, maxpage <= 10 ? maxpage : maxpage%10-5 )
    .map(page=>(
        <Page onClick={()=>{dirextPage(page.key); }} 
            key={page.key} 
            className={page.isClicked ? 'active' : ''}>
            {page.key}
        </Page>
    ));
        
    useEffect(() => {
        props.onChangekey(page.find(item=>item.isClicked===1).key);
    });


    return(
        <ContentPoint>
            <Pages>
                <PrevPage onClick={()=>{pageHandler('prev'); }}> <GrPrevious/></PrevPage>
                {pages}
                <NextPage onClick={()=>{pageHandler('next'); }}> <GrNext/></NextPage>
            </Pages>
        </ContentPoint>
    );
};

const ContentPoint = styled.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    margin: 0 auto;

`;

const Pages = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    li:hover{
        cursor: pointer;
    }
    .active {
        font-weight: bold;
    }
`
const PrevPage = styled.li`
    margin-bottom: -4px;

    `;

const NextPage = styled.li`
    margin-bottom: -4px;
    `;

const Page = styled.li`
    margin: 5px;
    width: 20px;
    text-align: center;
`;

export default Paging;

//////////////////////////////////////////////////////////////////

import { React, useState } from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Paging from '../components/Paging';
import ContentBox from '../components/ContentBox';

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
    {key: 12, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
    {key: 13, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
    {key: 14, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
    {key: 15, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
    {key: 16, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},
    {key: 17, title: '타이틀6', body: 'This is 5', date:'2022.01.13', category: '알고리즘'},

];

const Home = () => {
    const [currentkey, setcurrentkey] = useState(5)
    const [post, setpost] = useState(
        content.slice(0,5).map((items)=>(
            <ContentBox
            key={items.key} 
            title={items.title} 
            content={items.body} 
            date={items.date} 
            category={items.category}>
        </ContentBox>
    ))); 
    
    function keyIndex (key) {
        let maxPostNumber = key*5
        if(currentkey !== maxPostNumber){
            setpost(
                content.slice(maxPostNumber-5, maxPostNumber).map((items)=>(
                <ContentBox
                    key={items.key} 
                    title={items.title} 
                    content={items.body} 
                    date={items.date} 
                    category={items.category}>
                </ContentBox>
            )));
            setcurrentkey(maxPostNumber)
        };
    }; 

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
                        <PostColumn>
                        {post}
                        </PostColumn>

                        <Paging totalpost={content.length} onChangekey={keyIndex}/>
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
    position: relative;
    //border: 0.1px dashed #565655; // 나중에 제거
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PostColumn = styled.div`
    height: 812px;
`;

const CategoryList = styled.div`
    border: 1px solid #000;
    width: 270px;
`;

export default Home;


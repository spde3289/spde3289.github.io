import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import Tag from '../components/Tag';

const Home = () => {

    const [text, setText] = useState('')
    const navigate = useNavigate()
    const inputRef = useRef();

    const inputOnClick = () => {
        inputRef.current.focus();
    };

    const ChangeText = (e) => {
        setText(e.target.value)
    }

    const DeleteText = () => {
        setText('')
    }

    const OnKeyDown = (e) => {
        if(e.key ==='Enter' && text !== undefined){
            navigate('/search',{
                state: {
                    Title: 'Search',
                    value : text
                }
            });
        }else if(text === null && e.key ==='Enter' ){
            alert('검색어를 입력해주세요');
        };
    };  


    return(
            <Main>
                <IntroductionContainder> 
                    <Introduction>
                        안녕하세요. <br/>
                        다앙한 경험을 좋아하는 <br/>
                        개발자 김지훈입니다. <br/>
                    </Introduction>
                    <Categories>
                        <Tag tagName={'HTML'}/>
                        <Tag tagName={'CSS'}/>
                        <Tag tagName={'JavaScript'}/>
                        <Tag tagName={'react'}/>
                        <Tag tagName={'문제풀이'}/>
                        {/* <Tag tagName={'react-Qurey'}/>
                        <Tag tagName={'recoil'}/> */}
                    </Categories>
                </IntroductionContainder>
                <Container>
                    <SearchContainer onClick={()=>{inputOnClick()}}>
                        <AiOutlineSearch className='icon'/>
                        <Search placeholder='search' 
                        ref={inputRef}
                        value={text} 
                        onChange={ChangeText} 
                        onKeyDown={OnKeyDown}/>
                        <AiOutlineClose 
                        className={ 'icon positions ' + (text.length === 0 ? 'none' : '')}
                        onClick={DeleteText}
                        />
                    </SearchContainer>
                </Container>
            </Main>
    );
};

const Main = styled.main`
    height: calc(100vh - 495px);
    margin: 0 auto;
    width: 1000px;
`;

const IntroductionContainder = styled.div`
    width: 700px;
    margin: 160px auto 80px;
    display: flex;
    justify-content: space-between;
`;

const Introduction = styled.p`
    font-family: "Jua";
    font-size: 36px;
`;

const Categories = styled.div`
    width: 295px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 540px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 2px;
    padding-left: 10px;

    .none{
        display: none;
    }

    .positions{
        position: absolute;
        right: 10px;
    }

`;

const Search = styled.input`
    font-size: 16px;
    height: 34px;
    width: 460px;
    margin-left: 8px;
    border: none;
    outline: none;
`;



export default Home;


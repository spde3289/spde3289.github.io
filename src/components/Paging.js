import { React, useState, useEffect } from 'react';
import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'

const Paging = (props) => {
    const [page, setpage] = useState([
        {key: 1, isClicked:1 },
        {key: 2, isClicked:0 },
        {key: 3, isClicked:0 },
        {key: 4, isClicked:0 },
        {key: 5, isClicked:0 }
    ]);
    
    let currentKey = page.find(item=>item.isClicked === 1).key
    useEffect(()=>{
        props.propsFunction(currentKey); 
    },[currentKey])
    console.log(currentKey);

    const dirextPage = (key) => {
        setpage([...page].map(item=>{
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
        
        setpage([...page].map((item, index)=>{
            return {
                key : item.key,
                isClicked: index === updateIndex ? 1 : 0
            };
        }));
        
        if(updateIndex === page.length ){
            updateIndex = 0;
            setpage([...page].map((item, index)=>{
                return {
                    key : item.key+5,
                    isClicked: index === updateIndex ? 1 : 0
                };
            }));
        }else if(updateIndex === -1){
            if(page[0].key !== 1 ){
                updateIndex = page.length -1;
                setpage([...page].map((item, index)=>{
                    return {
                        key : item.key-5 > 0 ? item.key-5 : item.key ,
                        isClicked: index === updateIndex ? 1 : 0
                    };
                }));
            }else{
                updateIndex = 0
                setpage([...page].map((item, index)=>{
                    return {
                        key : item.key-5 > 0 ? item.key-5 : item.key ,
                        isClicked: index === updateIndex ? 1 : 0
                    };
                }));
            };
        };
    };

    const pages = page.map(page=>(
        <Page onClick={()=>{dirextPage(page.key)}} 
        key={page.key} 
        className={page.isClicked ? 'active' : ''}>
        {page.key}
    </Page>
    ));

    return(
        <ContentPoint>
            <Pages>
                <PrevPage onClick={()=>{pageHandler('prev')}}> <GrPrevious/></PrevPage>
                {pages}
                <NextPage onClick={()=>{pageHandler('next')}}> <GrNext/></NextPage>
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
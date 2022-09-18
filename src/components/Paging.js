import {React, useState} from 'react';

import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'

const Paging = () => {
    const [page, setpage] = useState([
        {key: 1, isClicked:0 },
        {key: 2, isClicked:0 },
        {key: 3, isClicked:1 },
        {key: 4, isClicked:0 },
        {key: 5, isClicked:0 }
    ]);
    
    const pages = page.map((page) =>(
        <Page className={page.isClicked ? 'active' : ''}><a href='/'>{page.key}</a></Page>
    ));
    
    const nextPage = () => {
        if(page.find(img).isClicked){
            
        }
    };

    function img(element){
        if(element.isClicked===1){
            return true;
        };
    };

    return(
        <ContentPoint>
            <Pages>
                <PrevPage><GrPrevious/></PrevPage>
                {pages}
                <NextPage><GrNext onClick={()=>{
                    nextPage();
                }}/></NextPage>
            </Pages>
        </ContentPoint>
    );
};

const ContentPoint = styled.div`
    margin: 0 auto;
`;

const Pages = styled.ul`
    display: flex;
    align-items: center;
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
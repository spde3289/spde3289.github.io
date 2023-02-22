import  React  from 'react';
import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'
import ContentBox from './ContentBox';

const Pagination = (props) => {
    
    const {currentPage,maxPageLimit,minPageLimit,totalPages} = props;
    const postList = props.pageDate.map(date =>(
            <ContentBox
                key={date.key}
                title={date.title}
                body={date.body}
                date={date.date}
                category={date.category}
                link={date.link}>
            </ContentBox>
    ));
    
    const page = [];
    for(let i = 1; i <= totalPages; i++) {
        page.push(i);
    };

    const handlePrevClick = ()=>{
        props.onPrevClick();
    };

    const handleNextClick = ()=>{
        props.onNextClick();
    };

    const handlePageClick = (e)=>{
        props.onPageChange(Number(e.target.id));
    };

    const pageNumber = page.map(page=>{
        if(page <= maxPageLimit && page > minPageLimit){
            return(
                <Page key={page} id={page} onClick={handlePageClick} 
                    className={currentPage===page ? 'active' : null}>
                    {page}
                </Page>
            );
        }else{
            return null;
        };
    });

    return(
        <>
            { props.pageDate === 0 ? 
                <ContentPoint>
                    <PostColumn>
                    {postList}
                    </PostColumn>
                    <Pages>
                        <PrevPage 
                            onClick={handlePrevClick} 
                            disabled={currentPage === page[0]}> 
                            <GrPrevious/>
                        </PrevPage>
                            {pageNumber}
                        <NextPage 
                            onClick={handleNextClick} 
                            disabled={currentPage === page[page.length-1]}>
                            <GrNext/>
                        </NextPage>
                    </Pages>
                </ContentPoint>
             : <div>검색결과가 없습니다.</div> 
            }
        </>
    );
};

const ContentPoint = styled.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    margin: 0 auto;
`;

const PostColumn = styled.div`
    height: 812px;
`;

const Pages = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    li:hover{
        cursor: pointer;
    };
    .active {
        font-weight: bold;
    };
`;
    
const Page = styled.li`
    margin: 5px;
    width: 20px;
    text-align: center;
`;

const PrevPage = styled.button`
    margin-bottom: -4px;
`;

const NextPage = styled.button`
    margin-bottom: -4px;
`;

export default Pagination;
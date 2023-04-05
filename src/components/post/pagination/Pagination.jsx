import  React, { useState, useMemo }  from 'react';
import styled from "styled-components";
import { GrNext, GrPrevious } from 'react-icons/gr'
import ContentBox from '../ContentBox';

const Pagination = ({
    currentPage,
    maxPageLimit,
    minPageLimit,
    totalPages,
    pageDate,
    onPrevClick,
    onNextClick,
    onPageChange
    }) => {
    
    const [currentNum, setCurrentNum] = useState(1);

    useMemo(()=>{setCurrentNum(currentPage)},[currentPage]);

    const page = [];

    for(let i = 1; i <= totalPages; i++) {
        page.push(i);
    };

    const handlePrevClick = ()=>{
        onPrevClick();
    };

    const handleNextClick = ()=>{
        onNextClick();
    };

    const handlePageClick = (e)=>{
        onPageChange(+e.target.id);
    };

    return(
        <>
            { pageDate.length === 0 ? 
            <NotFound>검색결과가 없습니다.</NotFound> :
            <ContentPoint>
                <PostColumn>
                {pageDate.map(date =>(
                    <ContentBox
                        key={date.key}
                        title={date.title}
                        body={date.body}
                        date={date.date}
                        category={date.category}
                        link={date.link}>
                    </ContentBox>
                ))}
                </PostColumn>
                <Pages>
                    <PageBtn 
                        onClick={handlePrevClick} 
                        disabled={currentPage === page[0]}> 
                        <GrPrevious/>
                    </PageBtn>
                        <Number>
                            {page.map(page=>{
                                if(page <= maxPageLimit && page > minPageLimit){
                                    return(
                                        <Page 
                                        key={page} 
                                        id={page} 
                                        onClick={handlePageClick}
                                        color={currentNum === page ? '#000' : '#ccc'}>
                                            {page}
                                        </Page>
                                    );
                                }else{
                                    return null;
                                };
                            })}
                        </Number>
                    <PageBtn 
                        onClick={handleNextClick} 
                        disabled={currentPage === page[page.length-1]}>
                        <GrNext/>
                    </PageBtn>
                </Pages>
            </ContentPoint>
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
    align-items: stretch;
    justify-content: space-evenly;
    li:hover{
        cursor: pointer;
    };
`;
    
const Number = styled.div`
    display: flex;
`;

const Page = styled.li`
    color: ${({ color }) => color};
    margin: 5px;
    width: 20px;
    text-align: center;
`;

const PageBtn = styled.button`
    margin-bottom: -4px;
`;

const NotFound = styled.div`
    text-align: center;
`;

export default Pagination;
import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ContentBox = ({
    category,
    link,
    title,
    body,
    date
}) => {

/*      const CategoryList = category.map((date, index) => (
        <Category key={index}>{date}</Category>
    )); 
 */
    return(
        <Link to={link} state={{ Title: title }}>
            <PostBox >
                <PostBoxTitle>
                    {title}
                </PostBoxTitle>
                <PostBoxContent>
                    {body}
                </PostBoxContent>
                <PostBoxInfo>
                    <div>{date}</div>
                    <CategoryContainer>
                        <Category>
                            {category} 
                        </Category>
                    </CategoryContainer>
                </PostBoxInfo>
            </PostBox>
        </Link>
    );
};

const PostBox = styled.div`
    width: 620px;
    height: 120px;
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: .3px solid #ccc;
`;

const PostBoxTitle = styled.h2`
    margin-bottom: 12px;
    font-size: 16px;
    ${PostBox}:hover & {
        text-decoration: underline
    };
`;

const PostBoxContent = styled.p`
    width: 580px;
    height:51px;
    margin: 0 0 12px 20px;
    font-size: 14px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const PostBoxInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
`;

const CategoryContainer = styled.ul`
    display: flex;
`;

const Category = styled.li`
    margin-right: 5px;
`;

export default ContentBox;
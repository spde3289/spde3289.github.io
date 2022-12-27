import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ContentBox = (props) => {

    const category = props.category.map(date => (
        <Category key={date.key}>{date.category}</Category>
    ));

    return(
        <Link to={props.link}>
            <PostBox >
                <PostBoxTitle>
                    {props.title}
                </PostBoxTitle>
                <PostBoxContent>
                    {props.body}
                </PostBoxContent>
                <PostBoxInfo>
                    <div>{props.date}</div>
                    <CategoryList>
                        {category} 
                    </CategoryList>
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
    border: .3px solid #000;
    border-radius: 10px;
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
    //margin-bottom: 12px;
    font-size: 13px;
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

const CategoryList = styled.ul`
    display: flex;
`;

const Category = styled.li`
    margin-right: 5px;
`;

export default ContentBox;
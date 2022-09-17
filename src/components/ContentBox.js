import React from 'react';
import styled from "styled-components";

const ContentBox = (props) => {
    return(
        <PostBox>
            <PostBoxTitle>
                {props.title}
            </PostBoxTitle>
            <PostBoxContent>
                {props.content}
            </PostBoxContent>
            <PostBoxInfo>
                <div>{props.date}</div>
                <div>{props.category}</div>
            </PostBoxInfo>
        </PostBox>
    );
};

const PostBox = styled.div`
    width: 640px;
    height: 120px;
    margin-bottom: 20px;
    padding: 10px;
    border: .3px solid #000;
    border-radius: 10px;
`;

const PostBoxTitle = styled.h2`
    margin-bottom: 12px;
    ${PostBox}:hover & {
        text-decoration: underline
    };
`;

const PostBoxContent = styled.p`
    width: 618px;
    height:51px;
    margin-bottom: 12px;
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

export default ContentBox;
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
                <div>2022.09.11</div>
                <div>웹</div>
                <div>알고리즘</div>
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
`;

const PostBoxContent = styled.p`
    width: 618px;
    height:72px;
    margin-bottom: 10px;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: normal;
    line-height: 1.2;
    word-wrap: break-word;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const PostBoxInfo = styled.div`
    display: flex;
    font-size: 13px;
`;

export default ContentBox;
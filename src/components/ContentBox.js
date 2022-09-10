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
        </PostBox>
    );
};

const PostBox = styled.div`
    width: 600px;
    height: 120px;
    margin: 10px auto;
    border: .3px solid #000;
    border-radius: 10px;
`;

const PostBoxTitle = styled.h2`
    margin: 10px;
`;

const PostBoxContent = styled.p`
    margin: 15px;
    font-size: 13px;
`;

export default ContentBox;
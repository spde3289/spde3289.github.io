import React from "react";
//import styled from "styled-components";
import PostHeader from '../../../components/post/PostHeader'
import GiscusApp from '../../../components/post/GiscusApp';
import { 
    PostContainer, 
    Main, 
    SubTitle, 
    TextBox, 
    CodeContainer, 
    ReferenceLink, } from '../style'

export default function ReactRouterLearn(){
    return(
        <PostContainer>
             <PostHeader 
                title='styled-component를 사용해보자'
                tagName='styled-component'
                date='2023.02.03' />
            <Main>
                asda
            </Main>
            <GiscusApp />
        </PostContainer>
    );
};
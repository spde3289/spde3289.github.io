import React from "react";
import PostHeader from '../../../components/post/PostHeader'
import GiscusApp from '../../../components/post/GiscusApp';
import { 
    PostContainer, 
    Main, 
    SubTitle, 
    TextBox, 
    CodeContainer, 
    ReferenceLink, } from '../style'

export default function DisplayGridLearn(){
    return(
        <PostContainer>
            <PostHeader 
            title='display Grid를 배워보자'
            tagName='css'
            date='2023.02.11' />
            <Main>
                <TextBox>
                    오늘은 gird에 대해서 정리해보려한다.
                </TextBox>
            </Main>
            <GiscusApp />
        </PostContainer>
    )
}
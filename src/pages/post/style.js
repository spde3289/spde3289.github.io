import styled from "styled-components";

export const PostContainer = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
`;

export const Main = styled.main`
    width: ${props => props.theme.boxSize.main};
`;

export const SubTitle = styled.h2`
    font-size: ${props => props.theme.fontSize.subTitle};
    margin-bottom: ${props => props.theme.margin.titBtm};
`; 

export const PostText = styled.p`
    font-size: ${props => props.theme.fontSize.nomal};
    margin  : ${props => props.theme.margin.textBtm};
`;

export const CodeImg = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    margin-bottom:  ${props => props.theme.margin.textBtm};
`;

export const Comment = styled.div`
    display: ${props => props.theme.display.flex};
    justify-content: ${props => props.theme.display.content};
    align-items: ${props => props.theme.display.content};
    width: 1000px;
`;

export const CodeContainer = styled.div`
    background-color: #282c34;
    text-align: left;
    color: #abb2bf;
    font-size: 15px;
`;
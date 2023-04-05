import { createGlobalStyle } from 'styled-components';

export const GlobleStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Gothic A1";
    font-weight: 500;
  };

  ul, li {
  text-decoration: none;
  list-style:none;
  padding-left:0px;
  margin: 0;
  };

  h2, p {
    margin: 0;
  };

  h3 {
    font-size: 1.2rem;
  };

  p {
    font-size: 1rem;
  };

  a {
    text-decoration: none;
    color: #000;
  };

  input {
    cursor: text;
  }

  .icon{
    width: 24px;
    height: 24px;
  }
`;
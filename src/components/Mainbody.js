import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';


const MainBody = () => {
    return(
          <Box> asd  <Link to = "/about">about</Link> </Box>
    );
};

const Box = styled.div`
    width: 100px;
    height: 100px;
    font-size: 40px;
    font-weight: bold;
`;

export default MainBody;
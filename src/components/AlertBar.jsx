import { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai'


export default function AlertBar() {

  const [disPlay, setDisPlay] = useState(true);

  const hendleDisPlay = () => {
    setDisPlay(false)
  }

  return(
    <>
        <Container value={disPlay}>
            <a href='https://spde3289.github.io/blog/' rel="noreferrer" target='_blank'>
                블로그가 이전 되었습니다. 텍스트를 클릭하면 이동합니다.
            </a>  
            <span>
              <AiOutlineClose onClick={hendleDisPlay} style={{marginBottom: "-3px", marginLeft:"10px"}} />
            </span>
        </Container>
    </>
  );
};

const Container = styled.div`
    ${({value}) => value ? "" : "display: none"};
    padding: 20px;
    background-color: aliceblue;
    text-align: center;
`;


import styled from "styled-components";

const Footer = () => {
    return(
        <FooterBar>
            <div>Copyright © 2022, All right reserved.</div>
        </FooterBar>
    );
};

const FooterBar = styled.footer`
    position: relative;
    
    padding: 40px 20px ;
    text-align: center;
`

export default Footer;
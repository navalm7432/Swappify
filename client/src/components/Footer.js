import styled from "styled-components";

const Footer = (props) => {
    return (
        <Container>
            <Logo>
                <span>Swappify</span>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua.</p>
                    <Icon>
                        <img className="fb" src="/images/facebook.png" alt="" />
                        <img src="/images/linkedin.png" alt="" />
                        <img src="/images/twitter.png" alt="" />
                        <img src="/images/instagram.png" alt="" />
                        
                    </Icon>
            </Logo>
            <Content>
                <span>Discovery</span>
                <span>About</span>
                <span>Help Us</span>
            </Content>
        </Container>
    )
}

const Container = styled.div`
margin-top: 100px;
border-top: 1px solid lightgray;
display: flex;
width: 100%;
background-color: rgb(138,43,226);
border-radius: 70px 0px 0px 0px;
@media (max-width: 768px) {
     
      font-size: 16px;
      text-align: center;
    
  }
`;

const Logo = styled.div`
display: flex;
flex-direction: column;
flex: 0.4;
width: 100%;

span {
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px;
    margin-left: 100px;
    color: #fff;
}

p {
    margin-left: 100px;
    color: white;
}
`;

const Icon = styled.div`
display:  flex;
flex-direction: row;
gap: 0;

.fb {
    margin-left: 100px;
}

img {
    width: 35px;
    height: 35px;
    margin-left: 15px;
    margin-top: 15px;
    gap:0px;
    cursor: pointer;
}


`;

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

span {
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    margin-left: 250px;
    color: #fff;
}
`;




export default Footer;
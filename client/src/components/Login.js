
import styled from "styled-components";
//import Login_Section from "./Login_Section";
import Login_Suggestion from "./Login__Suggestion";

const Login = (props) => {
    return (
        <Container>
            <Content>
                 <BgImage /> 
                <Login_Suggestion />
                {/* <Login_Section /> */}
                
            </Content>
        </Container>
    )

}

const Container = styled.section`
overflow: scroll;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;

`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100% ;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/p-3.png");
background-color: white;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;                     //adds all the content on the top of the image 
/* @media (max-width: 768px) {
        margin-top: 0px;
        width: 50rem;
        position: initial;
        height: 550rem;
    } */
`;



export default Login;
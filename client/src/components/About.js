import styled from "styled-components";
import Footer from "./Footer";
import Help from './Help';


const About = (props) => {
 return (
     <Container>
         <Video>
         <video autoPlay loop playsInline>
          <source src="/video/com.mp4" type="video/mp4" />
        </video>
        <h1>About Us</h1>
         </Video>
         <TextField>
             <h5>We cutout the middleman and get money
                  directly into the hand of weavers</h5>
         </TextField>
         
         <Help />
         <Footer />
     </Container>
 )
}

const Container = styled.section`
padding:  0 0 26px;

`;


const Video = styled.div`
margin-top: 100px ;
width: 100%;
height: 100%;

video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 1;
    z-index: 0;
    left: 0;
    object-fit: cover;
    justify-content: center;
    align-items: center;
  }

  h1 {
    z-index: 1;
    position: absolute;
    color: white;
    font-size: 70px;
    bottom: 0;
    text-align: center;
    margin-left: 600px;
    margin-bottom: 0;
  }



  
`;

const TextField = styled.section`
margin-top: 50rem;
text-align: center;
font-size: 40px;
margin-left: 350px;
margin-right: 350px;
word-wrap: break-word;
font-weight: 300;
font-family: Avenir-Roman, sans-serif;
color: rgb(138,43,226);
`;

export default About;
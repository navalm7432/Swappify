import styled from "styled-components";
//import LoginPopup from "./LoginPopup";
import { useHistory } from 'react-router';
//import { Modal } from "./Modal";
//import './Model.css'

const Login_Section = (props) => {
    const history = useHistory();
    const handleClick = () => history.push('/loginpopup');
    // const [showModal, setShowModal] = useState(false);

    // const openModal = () => {
    //     setShowModal(true);
    // }
    return (
        <Section>
            <Hero>
                <h1>Welcome to Swappify</h1>
                <p>Please click on button to login and add your product to get swapped with our verified and trusted customers. </p>
                <img src="/images/team.svg" alt="" />
            </Hero>
            <Form>
                <Google  onClick={handleClick}>
                    {/* onClick={() => props.signIn()} */}
                    <img src="/images/google.svg" alt="" />
                    Swap The Best Deals
                    
                </Google>
            </Form>
        </Section>
    )
}

const Section = styled.div`
display: flex;
align-content: center;
min-height: 700px;
padding-bottom: 20px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
margin-top: 50rem;
@media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
}
`;

const Hero = styled.div`
width: 100%;
h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 52px;
    color: purple;
    font-weight: 200;
    line-height: 70px;
    text-align: left;
    @media(max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
        margin-top: 600px
    }
}
p{
    margin-left: -20px;
    width: 50%;
    margin-top: -20px;
    color: darkgray;
    text-align: left;
}
img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
        margin-top: 0px;
        width: initial;
        position: initial;
        height: initial;
    }
}
`;

const Form = styled.div`
margin-top: 100px;
width: 408px;
@media (max-width: 768px) {
    margin-top: 20px;
}
`;

const Google = styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset  0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 /0%);
vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: #bf53ff;
margin-top: -30px;
&:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0,0,0,0.75);
}
`;


export default Login_Section;
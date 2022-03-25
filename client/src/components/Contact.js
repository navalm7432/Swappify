import styled from "styled-components";
import Footer from "./Footer";

const Contact = (props) => {
    return (
        <Container>
            <Top>
                <h3>Get In Touch</h3>
                <p>Let us know how we can help you!!</p>
            </Top>
            <Center>
                    <h5>Contact US</h5>
                    <Content>
                        <img src= "images/cont.svg" alt=""/>
                        <form>
                            <input type="text"  placeholder="Fullname"/>
                            <input type="text"  placeholder="Email"/>
                            <input type="number"  placeholder="Phone Number"/>
                            <select name="Country">
                                <option>India</option>
                                <option>USA</option>
                            </select>
                            <input type="text" placeholder="message" className="msg"/>
                            <button>Send</button>
                        </form>
                    </Content>
                   
            </Center>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Top = styled.div`
width: 100%;
margin-top: 0px;
background-color: rgb(138,43,226);
height: 400px;
border-radius: 0px 0px 70px 0px;
color: white;

h3 {
    margin-top: 120px;
    text-align: center;
    font-size: 40px;
}

p {
    margin-top: -30px;
    text-align: center;
    font-size: 20px;
}
`;

const Center = styled.div`
width: 100%;

h5{
    font-size: 30px;
    text-align: center;
}


`;

const Content = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: -50px;
img {
    width: 700px;
    height: 700px;
    margin-top: -60px;
}

form {
    margin-top: -90px;
    input {
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: row;
        padding: 10px;
        margin-bottom: 20px;
        width: 500px;
        border-radius: 7px;
        border: 1px solid gray;
        background-color: #eee;
        color: darkgray;
    }

    select {
        width: 200px;
        padding: 10px;
        border-radius: 7px;
        background-color: #eee;
        color: gray;
    }

    .msg {
        height: 80px;
        margin-top: 20px;
    }

    button {
        padding: 10px 30px;
        margin-top: 20px;
        margin-left: 200px;
        border-radius: 5px;
        border: none;
        background-color: #7f00ff;
        color: #fff;
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &:hover {
            background-color: #bf53ff;
            transform: translate(0px) ease-in-out;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            color: #000;
        }
    }
}
`;

export default Contact;
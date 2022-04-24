import styled from "styled-components";

const Help = (props) => {
    return (
        <Block>
            <Email>
            <img src="images/email.svg" alt="" />
           <h5>Perfer Email ?</h5>
           <p>We’d love to hear from you, go on and drop us an email at</p>
           <i>swappify01@gmail.com</i>
            </Email>
            <Services>
            <img src="images/services.svg" alt="" />
            <h5>Services</h5>
            <p>We'd love to share our services with you</p>
            </Services>
            <Developer>
            <img src="images/developer.svg" alt="" />
            <h5>Developer</h5>
            <p>The developer and our team details are here</p>
            </Developer>

        </Block>
    )
}

const Block = styled.div`
margin-top: 100px;
display: flex;
justify-content:space-around ;
align-items: center;
margin-bottom: 100px;

img {
    height: 200px;
    width: 200px;
    padding: 2px 2px;
    margin-bottom: 20px;
}
`;

const Email = styled.div`
width: 200px;
height: 300px;

h5 {
    text-align: center;
    font-size: 20px;
    color: purple;
}

p {
    text-align: left;
    color: darkgrey;
    margin-top: -20px;
    margin-bottom: 1px;
}

i {
    color: #9f33ff;
    font-size: 15px;
}


`;

const Services = styled.div`
width: 200px;
height: 300px;

h5 {
    text-align: center;
    font-size: 20px;
    color: purple;
}

p {
    text-align: left;
    color: darkgrey;
    margin-top: -20px;
}
`;

const Developer = styled.div`
width: 200px;
height: 300px;

h5 {
    text-align: center;
    font-size: 20px;
    color: purple;
}

p {
    text-align: left;
    color: darkgrey;
    margin-top: -20px;
}
`;

export default Help;
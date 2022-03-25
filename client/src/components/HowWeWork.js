import styled from "styled-components";

const HowWeWork = (props) => {
    return (
        <Container>
            <h3>How We Work ?</h3>
            <h4>Experience</h4>
            <Detail>

                <Img>

                    <img src="/images/exp.svg" alt="" />
                </Img>

                <Content>
                    <p>Lorem ipsum dolor sit amet.
                        Eos laboriosam maiores non vero eos repellat omnis ut
                        architecto consequatur cum odio dignissimos est dolores accusantium
                        ut voluptate sint. Id adipisci omnis qui autem architecto sit iure
                        rerum quo deleniti tempore? Aut sint deleniti sed tenetur Quis in magnam
                        enim et dolores doloribus qui vitae voluptate ut dolor aperiam.
                        Lorem ipsum dolor sit amet.
                        Eos laboriosam maiores non vero eos repellat omnis ut
                        architecto consequatur cum odio dignissimos est dolores accusantium
                        ut voluptate sint. Id adipisci omnis qui autem architecto sit iure
                        rerum quo deleniti tempore? Aut sint deleniti sed tenetur Quis in magnam
                        enim et dolores doloribus qui vitae voluptate ut dolor aperiam.
                    </p>
                    <button>See more</button>
                </Content>
            </Detail>

        </Container>
    )
}

const Container = styled.div`
margin-top: 70px;
height: 80vh;
width: 100%;



h3 {
    /* margin-left: 40px; */
    text-align: right;
    margin-right: 40px;
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;
    color: #191919;
    margin-bottom: 2px;
    font-family: 'Heebo', sans-serif;
}

h4 {
    /* margin-left: 50px; */
    text-align: right;
    margin-right: 40px;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;

}


`;


const Detail = styled.div`
margin-top: 40px;
display: flex;

h4 {
    margin-left: 20px;
    font-size: 25px;
    font-weight: 400;
    float: left;
   
}
 p{
     float: left;
     margin-left: 60px;
     font-size: 20px;
 }

img {
    width: 700px;
    height: 600px;
    float: right;
    margin-top: -130px;
}
`;

const Content = styled.div`
flex: 0.6;

button {
    margin-top: 20px;
    margin-left: 500px;
    padding: 12px 40px;
    border-radius: 4px;
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
`;

const Img = styled.div`
flex: 0.4;
`;




export default HowWeWork;

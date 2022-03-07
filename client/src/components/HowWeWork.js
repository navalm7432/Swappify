import styled from "styled-components";

const HowWeWork = (props) => {
    return (
        <Container>
            <h3>How We Work ?</h3>
            <h4>Experience</h4>
            <Detail>
                
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
                    
                    <img src = "/images/ext.gif"  alt=""/>
                    
            </Detail>
            <button>See More</button>
        </Container>
    )
}

const Container = styled.div`
margin-top: 70px;
height: 80vh;
width: 100%;



h3 {
    margin-left: 40px;
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;
    color: #191919;
    margin-bottom: 2px;
    font-family: 'Heebo', sans-serif;
}

h4 {
    margin-left: 50px;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;

}

button {
    margin-top: -320px;
    margin-left: 10px;
    margin-bottom: 20px;
    padding: 10px 30px;
        margin-top: -520px;
        margin-left: 200px;
        border-radius: 5px;
        border: none;
        background-color: #002366;
        color: #fff;
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &:hover {
            background-color: #002C80;
            transform: translate(0px) ease-in-out;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }
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
    width: 1000px;
    height: 600px;
    float: right;
    margin-top: -130px;
}
`;




export default HowWeWork;

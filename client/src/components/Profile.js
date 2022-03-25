import styled from "styled-components";

const Profile = (props) => {
    return(
        <Container>
        <Picture>
            <img src="images/man.jpg" alt=""/>
            <Text>
                <h3>Hello Florin,</h3>
                <p>This is your profile page. You can edit your profile and update your progress.</p>
            </Text>
        </Picture>

        <Detail>

            <User>
               <h4>My Account</h4> 
                <Field>
                <label>Username</label>
                    <i>Florin12</i>
                    <label>Email</label>
                    <i>florinpop12@gmail.com</i>
                    <label>Firstname</label>
                    <i>Florin</i>
                    <label>Lastname</label>
                    <i>Pop</i>
                    <label>Contact</label>
                    <i>+91 0008976541</i>
                    <label>DOB</label>
                    <i>12-07-1981</i>
                </Field>

            </User>
            <EditProfile></EditProfile>
        </Detail>

        </Container>
    )
}

const Container = styled.div``;

const Picture = styled.div`
img {
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);;
}
`;

const Text = styled.div`
h3 {
    margin-top: -540px;
    margin-bottom: -5px;
    color: #fff;
    font-size: 50px;
    margin-left: 90px;
}
p{
    width: 230px;
    text-align: left;
    margin-left: 90px;
    color: darkgray;
    font-size: 20px;
}
`;

const Detail = styled.div`
display: flex;
width: 80%;
height: 400px;
margin-top: 17rem;
`;

const User = styled.div`
flex: 0.8;
margin-left: 90px;
background-color: #C4C4C4;
font-size: 30px;
border-radius: 5px;
 
h4 {
    margin-left: 20px;
    margin-top: 12px;
    font-size: 25px;
    text-decoration: underline;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
}
`;

const Field = styled.div`
label {
    font-size: 20px;
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.63);
    
    margin-bottom: 10px;
    margin-top: 10px;
}
i{
    font-size: 18px;
    margin-left: 20px;
    width: 100%;
    background-color: white;
    padding: 10px 10px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.43);
}
`;

const EditProfile = styled.div`
flex: 0.2;
`;

export default Profile;
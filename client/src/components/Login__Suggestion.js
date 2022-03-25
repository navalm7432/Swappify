import styled from 'styled-components'

const Login_Suggestion = (props) => {
    return (
       <Container>
           <Hero>
               <h3>Find the best deals and grap the  amazing opportunities</h3>
               
              <ul>
                  <li>Mobile</li>
                  <li>Electronics</li>
                  <li>Mobile</li>
                  <li>Electronics</li>
                  <li>Mobile</li>
                  <li>Electronics</li>
                  <li>Dictionary</li>
              </ul>
           </Hero>
          
       </Container>

 
    )
}

const Container = styled.div`
//background-color: #df70ff;
display: flex;
align-content: center;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
margin-top: 1rem;
@media (max-width: 768px) {
    //margin: auto;
    min-height: 0px;
}
`;

const Hero = styled.div`
width: 100%;
//float: left;
 
h3{
    padding-bottom: 0;
    width: 55%;
    font-size: 52px;
    color: #000;
    font-weight: 200;
    line-height: 70px;
    text-align: left;
    @media(max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
        margin-top: 50px
    }
}
 ul{
     text-align: right;
    position: absolute;
    right: -115px;
    top: 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 12px;
    flex-wrap: wrap;

     li {
         list-style: none;
         padding: 10px;
         border: 1px solid lightgray;
         width: 150px;
         text-align: right;
         margin-right: 10px;
         justify-content: center;
         align-items: center;
         text-align: center;
         border-radius: 20px;
         font-size: 23px;
         background-color: #eee;
         color: rgba(0, 0, 0, 0.8);

     }

     @media(max-width: 768px) {
         margin-top: -110px;
         font-size: 20px;
         align-content: center;
         font-weight: 400;
        
         li {
             align-content: center;
            
            
         }
         
     }
 }



`;
/* 
const Labels = styled.div`
a{
 width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
        margin-top: 60rem;
        width: initial;
        position: initial;
        height: initial;
    }

    li {
        font-size: 20px;
        color: #000;
    }
}
`; */


export default Login_Suggestion;
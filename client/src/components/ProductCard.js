import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push('/product');

  return (
    <Container>
      <Head>
        <Head_1>
        <h3>What are you looking to swap ?</h3>
    <p>We have best deals</p>
    </Head_1>
    <Button_1>
    <button type="button" onClick={handleClick}>See all</button>
    </Button_1>
    </Head>

    <Content>
   
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images10.gaadicdn.com/usedcar_image/medium_srp/used_car_2323899_1629278804.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Car
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>

<CardActionArea>
  <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="160"
    image="https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Chair
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>

<Card className={classes.root}>

<CardActionArea>
  <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="160"
    image="https://images.pexels.com/photos/4117678/pexels-photo-4117678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Vegetables
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>


<Card className={classes.root}>

<CardActionArea>
  <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="160"
    image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Smart-Phone
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>
</Content>
    </Container>
  );
}


const Container = styled.div`
padding: 0 0 26px;
 

h3 {
    /* margin-top: 790px; */
    margin-left: 40px;
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;
    color: #191919;
    margin-bottom: 2px;
    font-family: 'Heebo', sans-serif;
}

p {
    margin-left: 40px;
    margin-top: 2px;
    font-size: 20px;
    color: gray;
    font-family: 'Heebo', sans-serif;
    margin-bottom: 50px;
}
`;

const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

const Head_1 = styled.div``;

const Button_1 = styled.div`
button {
  padding:  10px 12px;
  border: none;
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: navy;
    font-weight: 700;
    letter-spacing: 1px;
  }
}
`;

const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`;



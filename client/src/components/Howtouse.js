// import styled from "styled-components";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    marginLeft: '25px',
    border: 'none',
    borderBottom: '1px solid lightgray',
    marginBottom: "20px",
    borderRadius: "10px",

  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.typography.pxToRem(20)
  },
  title: {
    textAlign: 'left',
    marginTop: '80px',
    marginBottom: '50px',
    marginLeft: '40px',
    fontSize: '30px',
    fontWeight: '500',
    color: 'rgb(138,43,226)',
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (

    <div className={classes.root}>
        <h3 className= {classes.title}>How To Use Swappify ?</h3>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Step 1: Login to Swappify</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          User,
          
          </Typography>
          <Typography>
           Go to the Login pages register yourself. If already register then signin to your registered account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Step 2: Click On Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After registration has been done successfully, You will be landed on to the home page, Click on Product which is in navbar.Here you will find all the registered products by our different customers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Step 3: Send Swap Request</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After clicking on Product page , Search your required items on to this page. While Searching once you found your required product send the swap request to the user who product you want to swap. The request that you have send, now will be visible on the natification page that is click on the bell icon on the top of the page.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Step 4: Swap request response</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After sending swap request, weather your has been accepted or rejected will be notified on to the notification. Thank You
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}


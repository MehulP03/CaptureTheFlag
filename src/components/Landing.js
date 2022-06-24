import { Container, Grid ,Typography } from '@mui/material'
import React from 'react'

function Landing() {
  return (
    <Container maxWidth= 'lg' sx={{marginTop: 4}}>
         <Typography component='div' sx={{color: '#415465' , fontSize: '2.5rem', textAlign: 'center', marginBottom:5}}>Welcome to Tenable's 2022 Capture the Flag event!</Typography>

        <Grid container spacing={2}>
           
            <Grid item xs={8}>
           <Typography component='div' sx={{color: '#415465' ,textAlign: 'left', fontSize:'1rem'}}>Join the Tenable Capture the Flag to compete in a series of security-related challenges!
Do you have what it takes? Sign up today and put your skills to the test!</Typography>

<Typography component='div' sx={{color: '#415465' ,textAlign: 'left', fontSize:'1rem'}}><a href='/' style={{textDecoration: 'none', lineHeight:'2rem'}}>Register now!</a></Typography>
<Typography  component='div' sx={{color: '#415465' ,textAlign: 'left'}}>See the <a href='/'> About page </a> for more details and Official Rules.</Typography>
<Typography  component='div' sx={{color: '#415465' ,textAlign: 'left'}}>Let us help with any questions with our <a href='/'> FAQ </a>page.</Typography>

<Typography  component='div' sx={{color: '#415465' ,textAlign: 'left'}}><b>Challenges Open:</b> June 9, 2022 at 12:00 pm EDT </Typography>
<Typography  component='div' sx={{color: '#415465' ,textAlign: 'left'}}><b>Challenges Close:</b> June 13, 2022 at 12:00 pm EDT  <a href='/'> FAQ </a>page.</Typography>

            </Grid>
            <Grid item xs={4}>
                <img src="/files/db93ecf8f5857c9aa90900a576d2ddc7/CTF-Shirt-2022-Hackerbot-alpha.png" alt='img1' xs={{justifyContent: 'bottom'}}/>
            </Grid>
        </Grid>
       
    </Container>
  )
}

export default Landing
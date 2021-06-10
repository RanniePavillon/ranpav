// import RannieImg from './images/Rannie F. Pavillon.jpg';
// import './App.css';
// import './css/Index.css';

// import {Grid,Box,Container,makeStyles,Avatar,Typography} from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     sizeAvatar:{
//         height: theme.spacing(25),
//         width: theme.spacing(25)
//     },
// }));

// function App() {
//    const classes = useStyles();
//    return (
//       <>
//          <Grid container direction="row" className="bg-white" alignItems="center">
//             <Grid item xs={2}>
//                <Grid container justify="center">
//                   <Avatar src={RannieImg} className={classes.sizeAvatar} />
//                </Grid>
//             </Grid>
//             <Grid item xs={10} className="pl-4 mt-2">
//                <Grid container >
//                   <Box m={2}>
//                      <Typography variant="h3">Rannie F. Pavillon</Typography>
//                      <Box component="span" className="f-15">Rannie F. Pavillon</Box>
//                   </Box>
//                </Grid>
//             </Grid>
//          </Grid>
//       </>
//    );
// }

// export default App;


import { Avatar, Box, Chip, Container, createMuiTheme, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, ThemeProvider, Typography, useMediaQuery } from '@material-ui/core'
import image from './images/Rannie F. Pavillon.jpg'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import StarsIcon from '@material-ui/icons/Stars';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const theme = createMuiTheme({
  typography:{
    fontFamily:'Poppins',
  },
  overrides:{
    MuiChip:{
      root:{
        backgroundColor:'#212121',
        color:'#fff',
        padding:'10px'
      }
    },
  }
})

const pageStyles = makeStyles(() => ({
  image:{
    height:'300px',
    width:'300px',
    boxShadow:'1px 5px 20px #d7d7d7',
    border:'5px solid #fff'
  },
  mobileSkills:{
    width:'100%'
  },
}))

const App = () =>{
  const styles = pageStyles()
  const isMobile = useMediaQuery('(max-width:601px)')
  const details = [{'label':'ranniepavillon@gmail.com','icon':<AlternateEmailIcon/>},{'label':'+63 9196753332','icon':<PhoneIcon/>},{'label':'#47 Airforce south signal Taguig city','icon':<LocationOnIcon/>}]
  const skills = ['ReactJS','Python','API','PHP Laravel','html, css, javascript','C#','GIT','AWS','MySql', 'PostgreSQL','MongoDB']
  const experience1 = ['Internal Systems Developer','Creating integrated website as a Business tool for an ongoing project','Support for all production systems concern','Training for new framwework development','Upgrading systems from PHP native to PHP Laravel framework','Upgrading systems from PHP Laravel to ReactJS Frontend and Python as Backend','Standard file management implementation','System Integration API','Collaboration for System Implementation']
  const experience2 = ['Maintenance for Commercial website using Wordpress','Creating emails from Webhosting','Graphic Designs for Events','Support for Internet connection concerns, Software / Hardware Troubleshooting']
  return(
    <ThemeProvider theme={theme}>
      <Container disableGutters={true}> 
        <Box p={isMobile ? 2 : 5} width={1} style={{height:'100vh'}}>
          <Grid container>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <Paper elevation={5}>
                  <Box px={isMobile ? 2 : 4} pt={2}>
                    <Grid container justify="center">
                      <Avatar className={styles.image} src={image} alt="N"/>
                    </Grid>
                    <Box pt={5} px={1} width={1} height={1}>
                      <Box pb={2} width={1}>
                        <Grid container justify="center">
                          <Typography style={{fontSize:'25px'}}>Rannie Pavillon</Typography>
                        </Grid>
                      </Box>
                      {details.map((data, i) => (
                        <Grid container key={i}>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                {data.icon}
                              </ListItemAvatar>
                                <Box overflow="hidden" textOverflow="ellipsis">
                                  {data.label}
                                </Box>
                            </ListItem>
                          </List>
                        </Grid>
                      ))}
                      <Box mt={1}>
                        <Grid container>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <StarsIcon/>
                              </ListItemAvatar>
                              <ListItemText primary={<Typography style={{fontSize:'22px'}}>SKILLS</Typography>}/>
                            </ListItem>
                          </List>
                        </Grid>
                      </Box>
                      <Box py={1} px={isMobile ? 1 : 4}>
                        {skills.map((data, i) => (
                          <Grid container key={i}>
                            <Box px={isMobile ? 0 : 3} py={1} width={1}>
                              <Chip className={isMobile ? styles.mobileSkills : null} label={data}></Chip>
                            </Box>
                          </Grid>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Paper elevation={5}>
                  <Box px={2} py={2}>
                    <Grid container alignItems="center">
                      <WorkIcon style={{fontSize:'25px'}}/>
                      <Box px={2}>
                        <Typography component="h1" style={{fontSize:'25px'}}> Work Experience</Typography>
                      </Box>
                    </Grid>
                  </Box>
                  <Box px={3} width={1}>
                    <Box px={3} pt={3} width={1} style={{fontSize:'20px',fontWeight:'bold'}}>
                      Lead Web Developer (Fullstack) / I4One Inc.
                    </Box>
                    <Box px={3} pt={3} width={1} style={{fontSize:'20px',fontWeight:'bold'}}>
                      <Grid container alignItems="center" justify="flex-start">
                        <Box p={1} style={{marginTop:'5px'}}>
                          <CalendarTodayIcon/>
                        </Box>
                        <Box p={1}>
                          <Typography>June 2019 - </Typography> 
                        </Box>
                        <Box p={1} style={{marginTop:'-2px'}}>
                          <Chip label="Current"></Chip>
                        </Box>
                      </Grid>
                    </Box>
                    <Box px={isMobile ? 0 : 3} py={2} width={1}>
                      {experience1.map((data, i) => (
                        <Box pt={isMobile ? 1 : 3} px={4} width={1} key={i}>
                          ● {data}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box p={isMobile ? 0 : 3} width={1}>
                    <Divider variant="middle"/>
                    <Box px={3} pt={3} width={1} style={{fontSize:'20px',fontWeight:'bold'}}>
                      IT Specialist / FunMania Inc.
                    </Box>
                    <Box px={3} pt={3} width={1} style={{fontSize:'20px',fontWeight:'bold'}}>
                      <Grid container alignItems="center" justify="flex-start">
                        <Box p={1} style={{marginTop:'5px'}}>
                          <CalendarTodayIcon/>
                        </Box>
                        <Box p={1}>
                          <Typography>June 2012 - Apr 2019</Typography> 
                        </Box>
                      </Grid>
                    </Box>
                    <Box px={isMobile ? 0 : 3} pb={4} width={1}>
                      {experience2.map((data, i) => (
                        <Box pt={isMobile ? 1 : 3} px={4} width={1} key={i}>
                          ● {data}
                        </Box>
                      ))}
                    </Box>
                    <Divider variant="middle"/>
                    <Box px={1} pt={2} width={1} style={{fontSize:'20px',fontWeight:'500'}}>
                      <Grid container alignItems="center">
                        <Box px={2} py={1}>
                          <SchoolIcon/>
                        </Box>
                        <Typography style={{fontSize:'20px'}}>Education</Typography>
                      </Grid>
                    </Box>
                    <Box px={isMobile ? 0 : 3} width={1}>
                      <Box pt={1} px={4} width={1}>
                        ● The Fisher Valley College
                      </Box>
                      <Box pt={3} px={4} width={1}>
                        ● Bachelor of Science in  Information Technology
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App;

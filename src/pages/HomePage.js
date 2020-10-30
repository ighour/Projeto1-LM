import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Player } from 'video-react';
import UXMapImg from '../imgs/UXMap.png';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(1),
      paddingBottom: theme.spacing(3)
    },
    section: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
    sectionTitle: {
      fontWeight: "bold",
      borderRadius: "5px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    imgWrapper: {
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      padding: theme.spacing(2)
    },
    img: {
      maxWidth: "100%"
    },
    divider: {
      marginBottom: theme.spacing(1)
    },
    paper: {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      height: "350px"
    }
}));
  
function HomePage() {
    const classes = useStyles();

    return (
        <React.Fragment>
          <Grid container spacing={1} className={classes.mainGrid}>
            <Grid item xs={12} className={classes.section}>
              <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <div className={classes.sectionTitle}>
                <Typography variant="h5" gutterBottom>
                  About
                </Typography>
              </div>
              <Divider className={classes.divider}/>
              <div>
                <Typography gutterBottom>
                Donec id ultricies felis. Etiam condimentum neque vel mollis porta. Praesent et ultrices erat. Cras aliquam ultricies sem, et ultricies ante commodo sed. Morbi efficitur suscipit augue non euismod. Praesent a nisl facilisis, laoreet diam vel, luctus dolor. Aliquam id lacus sit amet lorem tincidunt pharetra. Nunc bibendum, libero sed gravida dapibus, ex lacus facilisis nulla, a commodo dui justo sed metus. In mollis sodales auctor. Ut sit amet massa gravida, porta turpis vitae, eleifend diam. Vivamus aliquet massa vel lectus sagittis, at ultricies dui convallis.
                </Typography>
                <Typography gutterBottom>
                Quisque vel fermentum est. Nam finibus mauris metus. Donec dignissim ut quam eu hendrerit. Aenean sodales nulla ac nunc ullamcorper, id tempor ipsum fringilla. Duis ac augue quis quam laoreet bibendum. Integer at eros sodales, lobortis dolor sed, iaculis dui. Nulla diam sapien, venenatis vel eros sagittis, finibus fringilla tortor. Proin maximus ac neque non vehicula. Ut bibendum, nulla pretium molestie sagittis, nibh lectus condimentum nisl, sed ornare odio odio quis odio. Vivamus non tincidunt dolor, ac scelerisque tellus.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <div className={classes.sectionTitle}>
                <Typography variant="h5" gutterBottom align="right">
                  Pitch
                </Typography>
              </div>
              <Divider className={classes.divider}/>
              <Grid container spacing={1} alignContent="space-around" justify="space-around">
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <Typography variant="overline" gutterBottom align="center">
                      What
                    </Typography>
                    <Divider light/>
                    <List aria-label="what list">
                      <ListItem>
                        <ListItemText primary="A digital immersive experience in a room with video and sound." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="A video telling the story of a soldier that comes home with a post traumatic stress disorder." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="The users heart rate will be measured to analyse, visually, it’s fluctuations as the experience advances." />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <Typography variant="overline" gutterBottom align="center">
                      Why
                    </Typography>
                    <Divider light/>
                    <List aria-label="why list">
                      <ListItem>
                        <ListItemText primary="Bring awareness to mental disorders, especially in school projects." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Understand behaviours of the patient and understand how to help." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Conscious donations to associations that support PTSD." />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <Typography variant="overline" gutterBottom align="center">
                      Who
                    </Typography>
                    <Divider light/>
                    <List aria-label="who list">
                      <ListItem>
                        <ListItemText primary="People who want to know more about post-war trauma." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Family and friends of those with the trauma." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Students looking for references." />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <Typography variant="overline" gutterBottom align="center">
                      How - Product
                    </Typography>
                    <Divider light/>
                    <List aria-label="how product list">
                      <ListItem>
                        <ListItemText primary="Our key partners would be High Schools and Universities, Associations related to mental disorders, Journals, Tv channels and Municipal Councils." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Our costs would pass by the electronic components, tools and construction materials." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="As far as revenue streams go, it is a non-profit campaign, meaning that all financial aid will be obtained through donations." />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <Typography variant="overline" gutterBottom align="center">
                      How - Interface
                    </Typography>
                    <Divider light/>
                    <List aria-label="how interface list">
                      <ListItem>
                        <ListItemText primary="We intend to create a single user simulation/experience of the disorder by placing the user in an immersive environment (an installation in the dark with no stimuli other than our video and sound) and having him/her follow a linear story about a soldier that comes from war with PTSD." />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="We’ll also have a heart rate measurer and respective video visualization." />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <Typography variant="overline" gutterBottom align="center">
                      How - Communication
                    </Typography>
                    <Divider light/>
                    <List aria-label="how communication list">
                      <ListItem>
                        <ListItemText primary="We will have a website, social media accounts and some physical publicity (flyers, posters)." />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <div className={classes.sectionTitle}>
                <Typography variant="h5" gutterBottom>
                  UX Mapping
                </Typography>
              </div>
              <Divider className={classes.divider}/>
              <div className={classes.imgWrapper}>
                <img alt="ux map" src={UXMapImg} className={classes.img}/>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <div className={classes.sectionTitle}>
                <Typography variant="h5" gutterBottom align="right">
                  Bibliographic Research
                </Typography>
              </div>
              <Divider className={classes.divider}/>
              <div>
                <Typography gutterBottom>
                Donec id ultricies felis. Etiam condimentum neque vel mollis porta. Praesent et ultrices erat. Cras aliquam ultricies sem, et ultricies ante commodo sed. Morbi efficitur suscipit augue non euismod. Praesent a nisl facilisis, laoreet diam vel, luctus dolor. Aliquam id lacus sit amet lorem tincidunt pharetra. Nunc bibendum, libero sed gravida dapibus, ex lacus facilisis nulla, a commodo dui justo sed metus. In mollis sodales auctor. Ut sit amet massa gravida, porta turpis vitae, eleifend diam. Vivamus aliquet massa vel lectus sagittis, at ultricies dui convallis.
                </Typography>
                <Typography gutterBottom>
                Quisque vel fermentum est. Nam finibus mauris metus. Donec dignissim ut quam eu hendrerit. Aenean sodales nulla ac nunc ullamcorper, id tempor ipsum fringilla. Duis ac augue quis quam laoreet bibendum. Integer at eros sodales, lobortis dolor sed, iaculis dui. Nulla diam sapien, venenatis vel eros sagittis, finibus fringilla tortor. Proin maximus ac neque non vehicula. Ut bibendum, nulla pretium molestie sagittis, nibh lectus condimentum nisl, sed ornare odio odio quis odio. Vivamus non tincidunt dolor, ac scelerisque tellus.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <div className={classes.sectionTitle}>
                <Typography variant="h5" gutterBottom>
                  Resources
                </Typography>
              </div>
              <Divider className={classes.divider}/>
              <div>
                <Typography gutterBottom>
                Donec id ultricies felis. Etiam condimentum neque vel mollis porta. Praesent et ultrices erat. Cras aliquam ultricies sem, et ultricies ante commodo sed. Morbi efficitur suscipit augue non euismod. Praesent a nisl facilisis, laoreet diam vel, luctus dolor. Aliquam id lacus sit amet lorem tincidunt pharetra. Nunc bibendum, libero sed gravida dapibus, ex lacus facilisis nulla, a commodo dui justo sed metus. In mollis sodales auctor. Ut sit amet massa gravida, porta turpis vitae, eleifend diam. Vivamus aliquet massa vel lectus sagittis, at ultricies dui convallis.
                </Typography>
                <Typography gutterBottom>
                Quisque vel fermentum est. Nam finibus mauris metus. Donec dignissim ut quam eu hendrerit. Aenean sodales nulla ac nunc ullamcorper, id tempor ipsum fringilla. Duis ac augue quis quam laoreet bibendum. Integer at eros sodales, lobortis dolor sed, iaculis dui. Nulla diam sapien, venenatis vel eros sagittis, finibus fringilla tortor. Proin maximus ac neque non vehicula. Ut bibendum, nulla pretium molestie sagittis, nibh lectus condimentum nisl, sed ornare odio odio quis odio. Vivamus non tincidunt dolor, ac scelerisque tellus.
                </Typography>
                <Typography gutterBottom>
                Report (PDF). Benchmarking. dissemination materials. link to product or demo
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <div className={classes.sectionTitle}>
                <Typography variant="h5" gutterBottom align="right">
                Gallery
                </Typography>
              </div>
              <Divider className={classes.divider}/>
              <div>
                <Typography gutterBottom>
                Donec id ultricies felis. Etiam condimentum neque vel mollis porta. Praesent et ultrices erat. Cras aliquam ultricies sem, et ultricies ante commodo sed. Morbi efficitur suscipit augue non euismod. Praesent a nisl facilisis, laoreet diam vel, luctus dolor. Aliquam id lacus sit amet lorem tincidunt pharetra. Nunc bibendum, libero sed gravida dapibus, ex lacus facilisis nulla, a commodo dui justo sed metus. In mollis sodales auctor. Ut sit amet massa gravida, porta turpis vitae, eleifend diam. Vivamus aliquet massa vel lectus sagittis, at ultricies dui convallis.
                </Typography>
                <Typography gutterBottom>
                http://skyentific.me/adding-fonts-to-create-react-app/
                </Typography>
              </div>
            </Grid>
          </Grid>
      </React.Fragment>
    );
}

export default HomePage;

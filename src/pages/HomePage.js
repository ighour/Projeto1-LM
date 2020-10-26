import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import MainFeaturedPost from '../components/homepage/MainFeaturedPost';
// import FeaturedPost from '../components/homepage/FeaturedPost';
import { Player } from 'video-react';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(1),
      paddingBottom: theme.spacing(3)
    },
    section: {
      marginBottom: theme.spacing(5)
    }
}));
  
// const mainFeaturedPost = {
//     title: 'Title of a longer featured blog post',
//     description:
//       "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//     image: 'https://source.unsplash.com/random',
//     imgText: 'main image description',
//     linkText: 'Continue reading…',
//   };
  
  // const featuredPosts = [
  //   {
  //     title: 'Featured post',
  //     date: 'Nov 12',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //     image: 'https://source.unsplash.com/random',
  //     imageText: 'Image Text',
  //   },
  //   {
  //     title: 'Post title',
  //     date: 'Nov 11',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //     image: 'https://source.unsplash.com/random',
  //     imageText: 'Image Text',
  //   },
  // ];
  
function HomePage() {
    const classes = useStyles();

    return (
        <React.Fragment>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={1} className={classes.mainGrid}>
            <Grid item xs={12} className={classes.section}>
              <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <p>
                About
              </p>
              {/* <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid> */}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom align="right" color="primary">
                Pitch
              </Typography>
              <Divider />
              <Grid container spacing={1} alignContent="space-around" justify="space-around">
                <Grid item xs={4}>
                  <Typography variant="overline" gutterBottom align="center" color="secondary">
                    What
                  </Typography>
                  <Typography>
                    A digital immersive experience in a room with video and sound.
                  </Typography>
                  <Typography>
                  A video telling the story of a soldier that comes home with a post traumatic stress disorder.
                  </Typography>
                  <Typography>
                    The users heart rate will be measured to analyse, visually, it’s fluctuations as the experience advances.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="overline" gutterBottom align="center" color="secondary">
                    Why
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="overline" gutterBottom align="center" color="secondary">
                    Who
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="overline" gutterBottom align="center" color="secondary">
                    How
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="overline" gutterBottom align="center" color="secondary">
                    UX Mapping
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <Typography variant="h5" gutterBottom>
              Bibliographic research 
              </Typography>
              <Divider />
              <p>
               ...
              </p>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <Typography variant="h5" gutterBottom>
                Resources
              </Typography>
              <Divider />
              <p>
               Report (PDF)
              </p>
              <p>
               Benchmarking
              </p>
              <p>
              dissemination materials
              </p>
              <p>
              link to product or demo
              </p>
            </Grid>
            <Grid item xs={12} className={classes.section}>
              <Typography variant="h5" gutterBottom>
                Gallery
              </Typography>
              <Divider />
              <p>
                ...
              </p>
            </Grid>
          </Grid>
      </React.Fragment>
    );
}

export default HomePage;

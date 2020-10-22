import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MainFeaturedPost from '../components/homepage/MainFeaturedPost';
import FeaturedPost from '../components/homepage/FeaturedPost';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    post: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    postLeft: {
      marginBottom: theme.spacing(5)
    },
    postRight: {
      marginBottom: theme.spacing(5),
      textAlign: "right"
    },
    postTitle: {
      marginLeft: theme.spacing(3)
    },
    postTitleRight: {
      marginRight: theme.spacing(3)
    }
}));
  
const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  
  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];
  
function HomePage() {
    const classes = useStyles();

    return (
        <React.Fragment>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} className={classes.postLeft}>
              <Typography variant="h5" gutterBottom className={classes.postTitle}>
                Project
              </Typography>
              <Divider />
              <div className={classes.post}>
                Lorem Ipsum...
              </div>
              <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.postRight}>
              <Typography variant="h5" gutterBottom className={classes.postTitleRight}>
                Pitch
              </Typography>
              <Divider />
              <div className={classes.post}>
                Lorem Ipsum...
              </div>
            </Grid>
            <Grid item xs={12} className={classes.postLeft}>
              <Typography variant="h5" gutterBottom className={classes.postTitle}>
                Prototype
              </Typography>
              <Divider />
              <div className={classes.post}>
                Lorem Ipsum...
              </div>
            </Grid>
            <Grid item xs={12} className={classes.postRight}>
              <Typography variant="h5" gutterBottom className={classes.postTitleRight}>
                Report
              </Typography>
              <Divider />
              <div className={classes.post}>
                Lorem Ipsum...
              </div>
            </Grid>
            <Grid item xs={12} className={classes.postLeft}>
              <Typography variant="h5" gutterBottom className={classes.postTitle}>
                Gallery
              </Typography>
              <Divider />
              <div className={classes.post}>
                Lorem Ipsum...
              </div>
            </Grid>
            <Grid item xs={12} className={classes.postRight}>
              <Typography variant="h5" gutterBottom className={classes.postTitleRight}>
                Team
              </Typography>
              <Divider />
              <div className={classes.post}>
                Lorem Ipsum...
              </div>
            </Grid>
          </Grid>
      </React.Fragment>
    );
}

export default HomePage;

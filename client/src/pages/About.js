// About.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  aboutText: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <h2>About Page</h2>
      <p className={classes.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis purus elit, in
        ullamcorper nulla semper a. Nullam aliquam pellentesque elementum. Integer vestibulum
        dapibus pellentesque. Donec condimentum nisl lectus, nec cursus erat viverra in. Quisque ut
        consequat enim. Cras nec fringilla est, non euismod nulla. Suspendisse potenti. Suspendisse
        scelerisque augue vel posuere interdum. Phasellus tincidunt mi at sagittis convallis.
      </p>
      <p className={classes.aboutText}>
        Nunc vitae ultricies erat. Mauris pretium massa ipsum, id egestas tortor lobortis vel.
        Phasellus nec interdum mauris. Aliquam dapibus arcu sed ipsum euismod, id feugiat justo
        consectetur. Nulla vitae dolor rhoncus, tristique elit id, malesuada nisl. In convallis
        felis non malesuada cursus. Aliquam facilisis lacus a urna eleifend placerat. Vestibulum
        auctor consequat libero nec congue. Donec luctus sapien at risus egestas, ut lacinia lorem
        consequat. Curabitur placerat, ligula ac pharetra euismod, neque lectus eleifend justo, sed
        volutpat ex metus eu justo. Sed eu neque faucibus, rutrum turpis sed, bibendum justo.
      </p>
    </div>
  );
}

export default About;

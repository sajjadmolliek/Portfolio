import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100px', backgroundColor: '#191919' }}>
      <Grid item>
        <Typography variant="body2" color="white">
          Copyright © 2023 Sajjad Hossain
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

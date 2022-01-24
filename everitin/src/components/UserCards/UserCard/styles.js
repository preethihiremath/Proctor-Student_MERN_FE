import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    
    width:'400px',
    height:'150px'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
      maxWidth:'400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    // backgroundColor:'#4F5490'
  },
  overlay: {
    marginTop:'30px',
    // position: 'absolute',
    // top: '20px',
    // left: '20px',
    // color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
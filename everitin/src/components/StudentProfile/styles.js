import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      right:{
        padding:'1rem 2rem',
border:'1px solid white',
      },
      dFlexRow :{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
marginBottom:'20px'
      },
      
      dFlexRow2 :{
        marginTop:'10px',
display:'flex',
flexDirection:'row'
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flexDirection:"column-reverse"
           }
      }
}));
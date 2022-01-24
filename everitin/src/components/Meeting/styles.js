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
      title:{
marginBottom:'15px'
      },
card:{
  marginTop:'10px',
width:'100%',

backgroundColor:'white'
},
right :{
padding:'1rem 2rem',
},
upcoming:{
minHeight:'200px',
overFlowY:'scroll',
scrollBehavior:'smooth',
height:'300px'
},
requests:{
  minHeight:'200px',
  overFlowY:'scroll',
  scrollBehavior:'smooth',
  height:'300px'
},
dflexRow:{
  display:'flex',
  flexDirection:'row',
  marginTop:'10px',
  alignItems:'left',
  justifyContent:'space-between',
},
dflexCol:{
  display:'flex',
  flexDirection:'column',
},
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flexDirection:"column"
           }
      }
}));
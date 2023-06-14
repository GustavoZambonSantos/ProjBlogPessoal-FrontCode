
import './App.css'
import { Grid } from '@material-ui/core'
import Home from './pages/home'
import './App.css';

function App() {
 

  return (
    <>
    
    <Grid container spacing={3}>
    <Grid item xs={12} sm={12}>
      <Home/>
    </Grid>
    
  </Grid>


  </>
  )
}

export default App

import { Grid } from '@material-ui/core'
import Container from './components/Container'
import MenuLang from './components/MenuLang'
import Title from './components/Title'

function App() {
  return (
    <div>
      <header>
        <MenuLang />
      </header>
      <Grid item xl='auto' direction="column"  justify="center" alignItems="center">
        <body >
          <Title />
          <Container />
        </body>
      </Grid>
    </div>
    
   
  );
}

export default App;

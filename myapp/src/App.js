import logo from './reignite_logo_komplett_big.svg';
import React from 'react';
import { TextField, Button} from '@material-ui/core';


class App extends React.Component {
  
  render(){
    return (
      <div>
        <form  noValidate autoComplete="off">
          <TextField id="filled-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="contained" color="primary">Send</Button>
        </form>
      </div>
    )
  }

}
export default App;

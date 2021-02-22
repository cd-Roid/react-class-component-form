import logo from './reignite_logo_komplett_big.svg';
import {Component} from 'react';
import { TextField, Button, FormLabel, Select, MenuItem, InputLabel} from '@material-ui/core';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '', 
      email: '',
      password: '',
      framework: ''
     }
  
  }
  
 handleEvent = (event) => {
   //name statt id weil der Select kein id property hat 
    let target = event.target.name; 
    switch (target) {
      case "email":
        this.setState({email: event.target.value});
        break;
      
      case "username":
        this.setState({username: event.target.value});
        break;
      
      case "password":
        this.setState({password: event.target.value});
        break;
      
      case "framework":
        this.setState({framework: event.target.value});
        break;
      
      default: throw new Error("no Event passed");
      break;
    }
 }
 sendAlert = () =>{
   //Post request can be made here
   alert("Form Sent");
 }

  render(){
    return (
      <div>
        <form  noValidate autoComplete="off">
          <FormLabel color="secondary">
          Username</FormLabel>
          <TextField 
            id="username" 
            name="email"
            label="Standard" 
            value={this.state.username} 
            onChange={this.handleEvent}/>
          <FormLabel>E-mail</FormLabel>
          <TextField 
            id="email"
            name="email" 
            label="Filled" 
            variant="filled" 
            value={this.state.email} 
            onChange={this.handleEvent}/>
          <FormLabel>Password</FormLabel>
          <TextField 
            name="password"
            id="password" 
            type="password"
            label="Outlined" 
            variant="outlined" 
            value={this.state.password} 
            onChange={this.handleEvent}/>
          
          <FormLabel id="label">Framework</FormLabel>
          <Select
            name="framework"
            labelId="label"
            id="framework"
            value={this.state.framework}
            onChange={this.handleEvent}
          >
          <MenuItem value={"React"}>React</MenuItem>
          <MenuItem value={"Angular"}>Angular</MenuItem>
          <MenuItem value={"Vue"}>Vue</MenuItem>
        </Select>
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.sendAlert}
          >Send</Button>
        </form>
      </div>
    )
  }

}
export default App;

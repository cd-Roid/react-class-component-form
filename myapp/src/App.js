import logo from './reignite_logo_komplett_big.svg';
import {Component} from 'react';
import { TextField, Button, FormLabel, Select, MenuItem} from '@material-ui/core';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '', 
      email: '',
      password: '',
      framework: 0
     }
  
  }
  
  handleUserName = (event) => {
    this.setState({username: event.target.value});
 }
  handleEmail = (event) => {
    this.setState({email: event.target.value});
 }
  handlePassword = (event) => {
    this.setState({password: event.target.value});
 }
  handleFramework = (event) => {
    this.setState({framework: event.target.value});
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
            id="filled-basic" 
            label="Standard" 
            value={this.state.username} 
            onChange={this.handleUserName}/>
          <FormLabel>E-mail</FormLabel>
          <TextField 
            id="filled-basic" 
            label="Filled" 
            variant="filled" 
            value={this.state.email} 
            onChange={this.handleEmail}/>
            <FormLabel>Password</FormLabel>
          <TextField 
            id="outlined-basic" 
            type="password"
            label="Outlined" 
            variant="outlined" 
            value={this.state.password} 
            onChange={this.handlePassword}/>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={this.state.framework}
            onChange={this.handleFramework}
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

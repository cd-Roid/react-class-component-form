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
      framework: '',
      userNameError: false,
      passwordError: false,
      emailError: false,
      frameworkError: false,
    }
    
  }
  
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  handleEvent = (event) => {
   //name statt id weil der Select kein id property hat 
    let target = event.target.name; 
    switch (target) {
      case "email":
        this.setState({email: event.target.value});
        let email = this.state.email;
        if(this.validateEmail(email)){
          this.setState({emailError: false});
        }else{
          this.setState({emailError: true});
        }
        break;
      
      case "username":
        this.setState({username: event.target.value});
        if(this.state.username.length < 5){
          this.setState({userNameError: true});
        }else{
          this.setState({userNameError: false});
        }
        break;
      
      case "password":
        this.setState({password: event.target.value});
        if(this.state.password.length < 5){
          this.setState({passwordError: true});
        }else{
          this.setState({passwordError: false});
        }
        break;
      
      case "framework":
        this.setState({framework: event.target.value});
        break;
      
      default: throw new Error("no Event passed");
    }
 }

 sendAlert = () =>{
   //Post request can be made here

   let postObject = {
     //password sollte vorher gehashed sein wenn möglich
     username: this.state.username,
     email: this.state.email,
     password: this.state.password,
     framework: this.state.framework,
    }
    alert(`Sent form with ${JSON.stringify(postObject)}`);  
 }

  render(){
    return (
      <div>
        <form  noValidate autoComplete="off">
          <FormLabel color="secondary">
          Username</FormLabel>
          <TextField 
            id="username" 
            name="username"
            label="Standard" 
            value={this.state.username} 
            onChange={this.handleEvent}
            error= {this.state.userNameError}
            helperText={this.state.userNameError ? 'Username must be longer than five characters':''}
            required= {true}/>
          <FormLabel>E-mail</FormLabel>
          <TextField 
            id="email"
            name="email" 
            label="Filled" 
            variant="filled" 
            required= {true}
            value={this.state.email} 
            onChange={this.handleEvent}
            error= {this.state.emailError}
            helperText={this.state.emailError ? 'Invalid E-mail':''}/>
          <FormLabel>Password</FormLabel>
          <TextField 
            name="password"
            id="password" 
            type="password"
            label="Outlined" 
            variant="outlined" 
            required= {true}
            value={this.state.password} 
            onChange={this.handleEvent}
            error= {this.state.passwordError}
            helperText={this.state.passwordError ? 'Password must be longer than 5 characters':''}/>
          
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

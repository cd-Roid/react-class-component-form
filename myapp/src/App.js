import logo from './reignite_logo_komplett_big.svg';
import {Component} from 'react';
import { TextField, Button, FormLabel, Select, MenuItem, Grid, withStyles, Paper } from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(24),
    alignItems: "center",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: "20px"
  },
  fields: {
    marginLeft:"12px",
    marginBottom: "12px"
  },
  logo: {
    width: "12em",
    margin: "2em"
  }
});


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
  
  validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
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
        let password = this.state.password;
        if(this.validatePassword(password)){
          this.setState({passwordError: false});
        }else{
          this.setState({passwordError: true});
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
    if(this.state.username === '' || this.state.password === '' || this.state.email === ''){
      this.setState({userNameError: true, passwordError: true, emailError: true });
    }else {
      alert(`Sent form with ${JSON.stringify(postObject)}`);  
    }
 }

  render(){

    const { classes } = this.props;

    return (
      <div className = {classes.root}>
      <img src={logo} className={classes.logo}/>
      <form  noValidate autoComplete="off">
        <Grid container spacing = {12}  m= {10} justify="center" alignItems="center">
          <Paper className={classes.paper}>
            <Grid item xl= {10} className={classes.fields}>
              <FormLabel 
              color="secondary"
              >Username</FormLabel>
              <TextField 
                id="username" 
                name="username"
                label="Standard" 
                value={this.state.username}
                onChange={this.handleEvent}
                error= {this.state.userNameError}
                helperText={this.state.userNameError ? 'Username must be longer than five characters':''}
                required= {true}/>
          </Grid>
              <Grid item xs = {10} className={classes.fields}>
                <FormLabel>E-mail</FormLabel>
                <TextField 
                  id="email"
                  name="email" 
                  label="Standard" 
                  variant="standard" 
                  required= {true}
                  value={this.state.email} 
                  onChange={this.handleEvent}
                  error= {this.state.emailError}
                  helperText={this.state.emailError ? 'Invalid E-mail':''}/>  
              </Grid>
          
              <Grid item xs ={10} className={classes.fields}>
                
                  <FormLabel>Password</FormLabel>
                  <TextField 
                    name="password"
                    id="password" 
                    type="password"
                    label="Standard" 
                    variant="standard" 
                    required= {true}
                    value={this.state.password} 
                    onChange={this.handleEvent}
                    error= {this.state.passwordError}
                    helperText={this.state.passwordError ? 'Minimum eight characters, at least one letter and one number':''}/>
                  
              </Grid>
            
              <Grid item xs ={10} className={classes.fields}>
                  <FormLabel id="label">Framework</FormLabel>
                  <Select
                    name="framework"
                    labelId="label"
                    id="framework"
                    value={this.state.framework}
                    onChange={this.handleEvent}å
                  >
                    <MenuItem value={"React"}>React</MenuItem>
                    <MenuItem value={"Angular"}>Angular</MenuItem>
                    <MenuItem value={"Vue"}>Vue</MenuItem>
                  </Select>
                
              </Grid>
            <Grid item xs={10} className= {classes.button}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.sendAlert}
                  >Send</Button>
            </Grid>
          </Paper>
        </Grid>
      </form>
      </div>
    )
  }

}

export default withStyles(useStyles)(App)

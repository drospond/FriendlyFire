import React, { Component } from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

class AboutMe extends Component {
  render() {
    return (
      <div>
        About me page works!
        {/* BELOW IS COMMENTED OUT FOR TESTING */}
        {/* <h2>About Me</h2>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="First Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <br/>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <br/>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Discord Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <br/>
        <br/>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Game</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Call of Duty: Modern Warfare</MenuItem>
          <MenuItem value={20}>GTA V</MenuItem>
          <MenuItem value={30}>Red Dead Redemption 2</MenuItem>
        </Select>
        <FormHelperText>Game</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Platform</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Xbox</MenuItem>
          <MenuItem value={20}>Playstation</MenuItem>
          <MenuItem value={30}>PC</MenuItem>
          <MenuItem value={40}>Nintendo</MenuItem>
          <MenuItem value={50}>Mobile</MenuItem>
        </Select>
        <FormHelperText>What Platforms do you play games on?</FormHelperText>
      </FormControl> */}
      </div>
    );
  }
}

export default AboutMe
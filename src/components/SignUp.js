import React from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SleepyRacoon from "../images/sleepyRacoon.png";
import styled from "styled-components";
import { CardContent } from "@material-ui/core";
import { Button } from "./Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const Paper = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Form = styled.form`
  width: "100%";
`;

const Header = styled.h1`
  font-family: "Helvetica Neue";
  font-size: 2.5em;
  color: #0d47a1;
  margin-bottom: 20px;
  align-items: center;
  text-align: center;
`;

const SubHeader = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 1em;
  color: #0d47a1;
  text-align: center;
  margin-bottom: 40px;
`;

const SleepyRacoonImg = styled.img`
  position: absolute;
  max-width: 400px;
  right: 0px;
  bottom: 0px;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.8em;
  color: #0d47a1;
`;

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    marginTop: 30,
    paddingBottom: 30,
    margin: "auto",
    borderRadius: 40,
    maxWidth: 400,
  },
}));

export default function SignUp() {
  const styles = useStyles();
  return (
    <>
      <Card className={styles.cardStyle}>
        <Paper>
          <CardContent>
            <Header> Sign up Today! </Header>
            <Grid item xs={12}>
              <SubHeader>
                Reflect is currently in an open Beta. <br /> Sign up to try it
                out before the official release!
              </SubHeader>
            </Grid>
            <Form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Link to="/components/Success">
                    <Button label="Let's go!" />
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <StyledLink to="/components/LogIn">
                    Already have an account? Log in!
                  </StyledLink>
                </Grid>
              </Grid>
            </Form>
          </CardContent>
        </Paper>
      </Card>
      <SleepyRacoonImg src={SleepyRacoon} alt="SleepyRacoonImg" />
    </>
  );
}

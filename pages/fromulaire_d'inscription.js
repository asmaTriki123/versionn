import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookies, setCookies } from "cookies-next";
import { Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import './auth/login';
import { NavLink, useNavigate } from "react-router-dom";
import { TextField, Button, Alert } from "@mui/material";


export default function Login() {
    const[email , setEmail]=useState("")
    const[nom , setNom]=useState("")
    const[prenom , setPrenom]=useState("")
    const[Num_tel , setNum_tel]=useState("")
   
    const[Adr , setAdr]=useState("")
    const[MPass, setPassword]=useState("")
  
    const router = useRouter()
    const handleLogin = async () =>
    {
        let item = {nom , prenom , email , Adr , MPass , Num_tel}
        console.warn(item)
        let result = await fetch("http://localhost:3001/utilisateur/ajoutadmin" , {
            method: 'post',
            body:JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }

        }
        
        )
       
        result = await result.json();
        router.push("/auth/login");
     
       
    }

  return (
    <form >
      <Grid container sx={{ height: "100vh" }}>
     
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url('/add.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 3, height: 530 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs textColor="secondary" indicatorColor="secondary">
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                    style={{ color: 'rgb(223,29,142)' }}
                  ></Tab>
                </Tabs>
              </Box>

              <Box component="form" noValidate sx={{ mt: 1 }} id="login-form">
                <TextField
                  required
                  fullWidth
                  margin="normal"
                 
                  label="Email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}


                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                 
                 
                  label="Nom"
                  type="text"
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                />
                 <TextField
                  required
                  fullWidth
                  margin="normal"
                 
                  label="Prenom"
                  type="text"
                  onChange={(e) => {
                    setPrenom(e.target.value);
                  }}
                />



<TextField
                  required
                  fullWidth
                  margin="normal"
                 
                  label="Num_phone"
                  type="Number"
                  onChange={(e) => {
                    setNum_tel(e.target.value);
                  }}
                />


<TextField
                  required
                  fullWidth
                  margin="normal"
                 
                  label="Adresse"
                  type="text"
                  onChange={(e) => {
                    setAdr(e.target.value);
                  }}
                />
<TextField
                  required
                  fullWidth
                  margin="normal"
                 
                  label="Mot passe"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />












              </Box>
              <br/><br/><br/><br/>
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5 }}
                  style={{ backgroundColor: 'rgb(228,73,164)' }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Box textAlign="center" sx={{ mt: 2 }}>
             
            </Box>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

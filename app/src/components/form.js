import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BookIcon from "@mui/icons-material/Book";
import { AppBar, Toolbar } from "@material-ui/core";
import About from "./about.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function SignIn() {
  const [book, setBook] = useState("");
  const [prop, setProp] = useState("");

  const handleClick = (event) => {
    console.log(book, prop);
  };

  const handleBookChange = (event) => {
    setBook(event.target.value);
  };

  const handlePropChange = (event) => {
    setProp(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <header style={{ marginTop: "-140px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
              maxWidth: "1800px",
            }}
          >
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  bgcolor: "secondary.main",
                  borderRadius: "20px",
                }}
              >
                Great Books Search
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  bgcolor: "secondary.main",
                  borderRadius: "20px",
                }}
              > <Link to="/about" style={{textDecoration: 'none', color: 'white'}}>About Us</Link>
              </Button>
          </div>
        </div>
      </header>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          marginTop: 10,
          border: "1px solid rgba(0,0,0, .3)",
          height: "500px",
          borderRadius: "10px",
          backgroundColor: "rgba(255,255,255, .95)",
          boxShadow: "-2px 2px 29px 3px rgba(0,0,0,0.35)",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            paddingTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3" sx={{ marginBottom: 2 }}>
            Euclid Search
          </Typography>

          <Avatar sx={{ m: 1, bgcolor: "secondary.light" }}>
            <BookIcon fontSize="medium" />
          </Avatar>
          <Typography component="h4" variant="h7">
            Created with care by Johnnies
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Book"
              name="book"
              autoFocus
              onChange={handleBookChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="proposition"
              label="Proposition"
              id="password"
              onChange={handlePropChange}
            />
            <Button
              onClick={handleClick}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 0, bgcolor: "secondary.light" }}
            >
              Search Prop
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

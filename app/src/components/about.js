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

export default function About() {
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
            <CssBaseline />
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
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">Great Books Search</Link>
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  bgcolor: "secondary.main",
                  borderRadius: "20px",
                }}
              > About Us
              </Button>
          </div>
        </div>
      </header>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          marginTop: 5,
          border: "1px solid rgba(0,0,0, .3)",
          maxHeight: "80vh",
          minHeight: '500px',
          borderRadius: "10px",
          backgroundColor: "rgba(255,255,255, .95)",
          boxShadow: "-2px 2px 29px 3px rgba(0,0,0,0.35)",
        }}
      >
        <h1></h1>
      </Container>
    </ThemeProvider>
  );
}

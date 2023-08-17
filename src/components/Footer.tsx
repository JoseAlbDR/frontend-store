import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://jadelgadorobles.com/" target="_blank">
        J.Alberto
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Store Api Frontend Demo
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Front end to test STORE Api project from{" "}
        <a
          href="https://www.udemy.com/course/nodejs-tutorial-and-projects-course"
          target="_blank"
        >
          NodeJs Tutorial and Projects Course
        </a>{" "}
        by{" "}
        <a href="https://johnsmilga.com/" target="_blank">
          John Smilga
        </a>
      </Typography>
      <Copyright />
    </Box>
  );
}

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Store Api Demo
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Front End for Store Api
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      ></Stack>
    </>
  );
}

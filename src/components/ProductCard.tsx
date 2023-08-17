import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IProductProps } from "../types/interfaces";
import _ from "lodash";
import { Grid } from "@mui/material";

export default function ProductCard({ product }: IProductProps) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={`https://source.unsplash.com/random?${product.name
            .split(" ")
            .at(-1)}`}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "15px",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {_.capitalize(product.name)}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Company: {_.capitalize(product.company)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Price: {product.price}</Typography>
            <Typography>Rating: {product.rating}</Typography>
          </Box>
          <Typography>Featured: {product.featured ? "Yes" : "No"}</Typography>
          <Typography>ID: {product._id}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

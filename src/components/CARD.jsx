import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const CARD = ({ img, title, price, id }) => {
  return (
    <Card key={id} sx={{ flex: "1 0 270px" }}>
      <CardMedia
        component="img"
        style={{ objectFit: "contain" }}
        height="360"
        image={img}
        alt={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h5" color="primary">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CARD;

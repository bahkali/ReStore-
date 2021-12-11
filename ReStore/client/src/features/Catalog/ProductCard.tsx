import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
interface Props {
  product: Product;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  header: {
    fontWeight: "bold",
  },
  media: {
    height: 140,
    backgroundSize: "contain",
    backgroundColor: "#757ce8",
  },
});
export default function ProductCard({ product }: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        className={classes.header}
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.brand} - {product.type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Button
          component={Link}
          to={`/catalog/${product.id}`}
          size="small"
          color="primary"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

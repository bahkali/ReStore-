import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (!loading) return <h3>Product not found</h3>;

  return <Typography variant="h2">{product?.name}</Typography>;
}

import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
    const {productId} = useParams();
    return <div>Product: {productId} </div>;
}

export default ProductDetails;
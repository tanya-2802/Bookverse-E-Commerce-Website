import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded bg-[#111] border border-gray-700 shadow-lg transition hover:scale-105 hover:shadow-xl duration-200">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          className="rounded-lg object-cover h-64 w-full"
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title
            as="div"
            className="product-title text-lg font-semibold text-white hover:text-purple-400 transition"
          >
            {product.name}
          </Card.Title>
        </Link>

        <div className="mt-2">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </div>

        <Card.Text as="h3" className="text-xl text-green-400 font-bold mt-2">
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

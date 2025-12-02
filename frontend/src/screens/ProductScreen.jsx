import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from '../slices/productsApiSlice';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useGetProductDetailsQuery(productId);

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  // ------------------ ADD TO CART HANDLER ------------------
const dispatch = useDispatch();

const addToCartHandler = () => {
  dispatch(
    addToCart({
      ...product,
      qty: Number(qty),
    })
  );

  navigate('/cart');
};


  // ------------------ SUBMIT REVIEW ------------------
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      alert('Review Submitted!');
      setRating(0);
      setComment('');
      refetch();
    } catch (err) {
      alert(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <Row>
          {/* LEFT IMAGE */}
          <Col md={5}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="rounded shadow-lg"
              style={{ maxHeight: '550px', width: '100%', objectFit: 'contain' }}
            />
          </Col>

          {/* CENTER DETAILS */}
          <Col md={4}>
            <ListGroup variant="flush" className="bg-transparent text-light">
              <ListGroup.Item className="bg-transparent text-light">
                <h3 className="text-light">{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item className="bg-transparent text-light">
                <Rating value={product.rating} />
              </ListGroup.Item>

              <ListGroup.Item className="bg-transparent text-light">
                Price: ₹{product.price}
              </ListGroup.Item>

              <ListGroup.Item className="bg-transparent text-light">
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* RIGHT SIDEBAR - ADD TO CART + REVIEW */}
          <Col md={3}>
            <Card className="bg-dark text-light border-secondary">
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-light border-secondary">
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item className="bg-dark text-light border-secondary">
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          className="bg-dark text-light"
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item className="bg-dark text-light border-secondary">
                  <Button
                    className="w-100"
                    type="button"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            {/* REVIEW SECTION */}
            <Card className="mt-4 bg-dark text-light border-secondary">
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-light border-secondary">
                  <h4>Write a Review</h4>

                  {loadingProductReview && <Loader />}

                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="rating" className="my-2">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as="select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="bg-dark text-light"
                      >
                        <option value="">Select...</option>
                        <option value="1">⭐ Poor</option>
                        <option value="2">⭐⭐ Fair</option>
                        <option value="3">⭐⭐⭐ Good</option>
                        <option value="4">⭐⭐⭐⭐ Very Good</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="comment" className="my-2">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="bg-dark text-light"
                      ></Form.Control>
                    </Form.Group>

                    <Button
                      disabled={loadingProductReview}
                      type="submit"
                      className="my-3 w-100"
                    >
                      Submit Review
                    </Button>
                  </Form>
                </ListGroup.Item>

                {/* Reviews */}
                <ListGroup.Item className="bg-dark text-light border-secondary">
                  <h4>Reviews</h4>
                  {product.reviews?.length === 0 && <Message>No Reviews</Message>}

                  {product.reviews?.map((review) => (
                    <ListGroup.Item
                      key={review._id}
                      className="bg-dark text-light border-secondary"
                    >
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;

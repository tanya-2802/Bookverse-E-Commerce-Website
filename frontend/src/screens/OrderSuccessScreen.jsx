import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const OrderSuccessScreen = () => {
  return (
    <Container className='py-5'>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Card className='text-center shadow'>
            <Card.Body className='p-5'>
              <div className='mb-4'>
                <i
                  className='fas fa-check-circle'
                  style={{ fontSize: '60px', color: '#28a745' }}
                ></i>
              </div>
              <h1 className='mb-3'>Thank You for Your Order!</h1>
              <Card.Text className='mb-4'>
                <p className='lead'>
                  Your order has been successfully placed.
                </p>
                <p>
                  The order will be delivered soon. We appreciate your business!
                </p>
              </Card.Text>
              <div className='d-grid gap-2'>
                <Link to='/'>
                  <Button variant='primary' className='w-100'>
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSuccessScreen;

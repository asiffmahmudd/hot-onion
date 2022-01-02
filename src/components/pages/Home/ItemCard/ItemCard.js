import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ItemCard = ({item}) => {
    return (
        <Col>
            <Card className="mt-4 shadow">
                <Card.Img variant="top" src={item.strMealThumb} />
                <Card.Body>
                    <Card.Title>{item.strMeal}</Card.Title>
                    <h3>$100</h3>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemCard;
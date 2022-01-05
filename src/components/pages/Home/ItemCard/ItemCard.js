import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ItemCard.css';

const ItemCard = ({item}) => {
    return (
        <Col>
            <Card className="mt-4 single-item border-0">
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
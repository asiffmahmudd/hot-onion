import React, { useEffect, useState } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import ItemCard from '../ItemCard/ItemCard';
import './Options.css'

const Options = () => {

    const [allItems, setAllItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState("chicken")

    useEffect(() => {
        setLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
        .then(res => res.json())
        .then(data => {
            setAllItems(data.meals)
            setLoading(false)
        })
    }, [category])
    
    const changeCategory = (e) => {
        setCategory(e)
    }

    return (
        <section className="options mt-5">
            <Tabs
                defaultActiveKey="chicken"
                transition={false}
                id="options"
                onSelect={changeCategory}
                className="d-flex mt-3 b-0 justify-content-center mb-3"
            >
                <Tab eventKey="chicken" title="Chicken">
                    <Container>
                        <Row xs={1} sm={2} md={3} lg={4}>
                        {
                            // eslint-disable-next-line array-callback-return
                            !loading &&
                            allItems?.map(item => <ItemCard key={item.idMeal} item={item} />)
                        }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="beef" title="Beef">
                    <Container>
                        <Row xs={1} sm={2} md={3} lg={4}>
                        {
                            // eslint-disable-next-line array-callback-return
                            !loading &&
                            allItems?.map(item => <ItemCard key={item.idMeal} item={item} />)
                        }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="seafood" title="Seafood">
                    <Container>
                        <Row xs={1} sm={2} md={3} lg={4}>
                        {
                            // eslint-disable-next-line array-callback-return
                            !loading &&
                            allItems?.map(item => <ItemCard key={item.idMeal} item={item} />)
                        }
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </section>
    );
};

export default Options;
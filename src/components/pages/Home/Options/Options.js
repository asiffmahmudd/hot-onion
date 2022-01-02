import React, { useEffect, useState } from 'react';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import ItemCard from '../ItemCard/ItemCard';
import './Options.css'

const Options = () => {

    const [allItems, setAllItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => {
            setAllItems(data.meals)
            setLoading(false)
        })
    }, [])
    

    return (
        <section className="options mt-5">
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="options"
                className="d-flex mt-3 b-0 justify-content-center mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <Container>
                        <Row xs={1} sm={2} md={3} lg={4}>
                        {
                            // eslint-disable-next-line array-callback-return
                            !loading &&
                            allItems.map(item => <ItemCard key={item.idMeal} item={item} />)
                        }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    hjghj
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    zxczxc
                </Tab>
            </Tabs>
        </section>
    );
};

export default Options;
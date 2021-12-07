import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Options.css'

const Options = () => {

    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllItems(data)
        })
    }, [])
    
    console.log(allItems)

    return (
        <section className="options mt-5">
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="options"
                className="d-flex mt-3 b-0 justify-content-center mb-3"
            >
                <Tab eventKey="home" title="Home">
                    asdsdf
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
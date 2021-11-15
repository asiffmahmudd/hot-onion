import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Options.css'

const Options = () => {
    return (
        <div className="options ">
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

            {/* <Tab.Container
                defaultActiveKey="home"
                transition={false}
                id="options"
                type="tab"
                className="d-flex mt-3 b-0 justify-content-center mb-3"
                >
                <Row>
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">Home</NavItem>
                            <NavItem eventKey="profile">Profile</NavItem>
                            <NavItem eventKey="contact">Contact</NavItem>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="home">
                                asdsdf
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile">
                                hjghj
                            </Tab.Pane>
                            <Tab.Pane eventKey="contact">
                                zxczxc
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container> */}
        </div>
    );
};

export default Options;
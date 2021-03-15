/**
  * @import classes
  * @import Header
  * @import Row, Col
*/
import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import classes from './layout.module.scss';
import { Row, Col } from 'reactstrap';

/**
  * @desc Define the scheme of our app
  * @params props - page properties
  * @return object view
*/
const Layout = (props) =>{

    return (
        <>
            <Header></Header>
            <div className={classes.container}>
                <Row>
                    <Col xs={10} className={classes.products}>
                        {props.children}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default withRouter(Layout)
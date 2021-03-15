/**
  * @import Col, Row
  * @import logo
  * @import NavbarSearch
  * @import classes
*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import logo from '../../assets/logo_ml.png';
import NavbarSearch from '../Navbar';
import classes from './header.module.scss';

/**
  * @desc defines the visual layout of the search bar
  * @return object view
*/
const Header = () =>{

    const [textProduct, setTextProduct] = useState('');

    return (
        <header className={classes.header}>
            <Row>
                <Col xs={4} sm={4} md={3} xl={2} className="text-right">
                    <Link to="/" onClick={() => setTextProduct('')}>
                        <img className={classes.img} src={logo} alt="Mercado Libre"/>
                    </Link>
                </Col>
                <Col xs={8} sm={8} md={9} xl={10}>
                    <div className={classes.search_bar}>
                        <NavbarSearch textProduct={textProduct} setTextProduct={setTextProduct}></NavbarSearch>
                    </div>
                </Col>
            </Row>
        </header>
                
        )
}

export default Header;
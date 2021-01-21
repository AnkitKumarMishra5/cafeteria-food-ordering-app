import React, { useEffect, useState } from 'react';
import {Table, Row, Col, Button} from 'react-bootstrap';
import './Cart.css';
const Cart = () => {
    return(
        <>
        <Row className="justify-content-center" id="main-cart-container">
            <Col md={4} xs={12} className="main-cart-div">
            <Table responsive="xl"className="new-table">
                <thead>
                    <th>Dish Name</th>
                    <th> Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Dish Name ( Rs 150)</td>
                        <td> x 2</td>
                        <td className="values">Rs 300 </td>
                    </tr>
                    <tr>
                        <td>Dish Name ( Rs 150)</td>
                        <td> x 2</td>
                        <td className="values">Rs 300 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total : </td>
                        <td className="values">Rs 300 </td>
                    </tr>

                </tbody>
               
            </Table>
            <Button className="float-right cart-button" >Order</Button>
            </Col>
        </Row>
        </>
    );

}
export default Cart;
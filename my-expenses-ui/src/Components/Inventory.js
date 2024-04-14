import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { getInventory } from '../Services/Inventory'

function ResponsiveExample() {
    const responseMapping = {
        "store_id": "Tienda",
        "product_code": "Codigo",
        "product_description": "Descripcion",
        "stock_quantity": "Disponible",
    }
    const [inventory, setIntentory] = useState([])

    useEffect(() => {
        getInventory().then((result) => setIntentory(result));
    }, []);
    console.log("inv", inventory)
    return (
        <Container>
            <br/>
            <Row className="row justify-content-center align-items-center">
                <Col className='col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                    <Table responsive>
                        <thead>
                            <tr>
                                {Object.values(responseMapping).map( (header,index) => (
                                    <th key={index}>{header}</th>
                                ) )}
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item, rowIdx) => ( 
                                <tr>
                                { Object.keys(responseMapping).map( (key,columdIdx) => (
                                    <td key={`${rowIdx}_${columdIdx}`}> {item[key]} </td>
                                ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>
            </Row>
        </Container>
    );
}

export default ResponsiveExample;
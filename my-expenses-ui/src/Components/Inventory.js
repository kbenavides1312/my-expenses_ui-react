import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { getInventory, deleteInventoryItem } from '../Services/Inventory'

function ResponsiveExample() {
    const responseMapping = {
        "StoreId": "Tienda",
        "Codigo": "Codigo",
        "Detalle": "Descripcion",
        "Cantidad": "Disponible",
    }
    const [inventory, setIntentory] = useState([])

    useEffect(() => {
        getInventory().then((result) => setIntentory(result));
    }, []);

    const deleteItem = (itemId, all) => () => {
        console.log("clicked", itemId, all)
        deleteInventoryItem(itemId, all).then(
            () => getInventory().then((result) => setIntentory(result))
        )
    }
    
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
                                <th ></th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item, rowIdx) => ( 
                                <tr>
                                { Object.keys(responseMapping).map( (key,columdIdx) => (
                                    <td key={`${rowIdx}_${columdIdx}`}> {item[key]} </td>
                                ))}
                                <td key={`${rowIdx}_reduce`}>
                                    <Button 
                                    variant='warning'
                                    onClick={deleteItem(item["ProductId"])}>
                                        Reduce
                                    </Button>
                                </td>
                                <td key={`${rowIdx}_delete`}>
                                    <Button 
                                    variant='danger'
                                    onClick={deleteItem(item["ProductId"], true)}>
                                        Delete
                                    </Button>
                                </td>
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
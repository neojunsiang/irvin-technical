import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useStateValue } from '../Components/StateProvider'


const CreateProductPage = () => {
    const [{ allProducts }, dispatch] = useStateValue();

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProductData = {
            name: event.target.formGridName.value,
            price: event.target.formGridPrice.value,
            description: event.target.formGridDescription.value,
            image: event.target.formImage.value,
            tags: event.target.formGridTags.value
        }

        console.log({ ...newProductData })

        fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(newProductData),
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        }).then((res) => res.json())
            .then((resJson) => {
                console.log('resJson', resJson);
                dispatch({
                    type: "CREATE_A_PRODUCT",
                    product: resJson
                })
            })
            .catch(err => console.log({ error: err }))
        history.push('/');
    }

    return (
        <>
            <h1>Create A New Product</h1>
            <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="string" placeholder="Enter Product Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="float" placeholder="Enter Price" required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" placeholder="Enter Product Description" />
                </Form.Group>

                <Form.Group controlId="formImage" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="string" placeholder="Enter Image Link" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default CreateProductPage

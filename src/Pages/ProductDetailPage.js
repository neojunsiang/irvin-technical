import React, { useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useStateValue } from '../Components/StateProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ProductDetailPage = () => {
    const { id } = useParams();
    console.log('id', id)

    const [{ product }, dispatch] = useStateValue();
    console.log('product', product)

    const history = useHistory()

    const handleDelete = (recordId) => {
        console.log('deleted', recordId);
        fetch(`/api/products/${recordId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            console.log(res.json());
            dispatch({
                type: "DELETE_A_PRODUCT",
                recordId: recordId,
            })
        })
        history.push("/")
    }

    //* useEffect 
    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await fetch(`/api/products/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const productData = await response.json();
            console.log('productData', productData);
            try {
                dispatch({
                    type: "READ_SINGLE_PRODUCT",
                    product: productData
                })
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllProducts();
    }, [dispatch])

    return (
        <div>
            <h1>Product Detail Page</h1>
            {product.length > 0 ? product.map((ele) => {
                return (
                    <Card key={ele._id} style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={ele.image} alt={ele.description} />
                        <Card.Body>
                            <Card.Title>{ele.name}</Card.Title>
                            <Card.Text>
                                Price - {ele.price.$numberDecimal}
                            </Card.Text>
                            <Card.Text>
                                Descripton - {ele.description}
                            </Card.Text>
                            <Card.Text>
                                Tags - {ele.tags}
                            </Card.Text>
                            <Card.Text>
                                Created At - {ele.createdAt}
                            </Card.Text>
                            <Card.Text>
                                Updated At - {ele.updatedAt}
                            </Card.Text>
                            <ButtonGroup className="me-2" aria-label="Edit">
                                <Button variant="warning">Edit</Button>
                            </ButtonGroup>
                            <ButtonGroup className="me-2" aria-label="Edit">
                                <Button variant="warning" onClick={() => handleDelete(ele._id)}>Delete</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                )
            }) : <h2>No Record Found</h2>}
        </div>
    )
}

export default ProductDetailPage

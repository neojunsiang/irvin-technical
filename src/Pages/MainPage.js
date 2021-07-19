import React, { useEffect } from 'react'
import { useStateValue } from '../Components/StateProvider'
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';


const MainPage = () => {

    //* access to the array of all products
    const [{ allProducts }, dispatch] = useStateValue();
    console.log('all', allProducts)

    const history = useHistory()

    //* handleClick 
    const handleClick = (id) => {
        console.log('id', id);
        history.push(`products/${id}`);
    }

    //* useEffect 
    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await fetch("/api/products/all", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const allProductDatas = await response.json();
            console.log('inner allProd', allProductDatas);
            try {
                dispatch({
                    type: "READ_ALL_PRODUCTS",
                    product: allProductDatas
                })
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllProducts();
    }, [dispatch])


    return (
        <>
            <div style={{ display: "flex" }}>
                {allProducts.map((ele) => {
                    return (
                        <Card style={{ width: '25rem' }} key={ele._id}>
                            <Card.Img variant="top" src={ele.image} />
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
                            </Card.Body>
                            <Button variant="warning" onClick={() => handleClick(ele._id)}>
                                Go To Product
                            </Button>
                        </Card>
                    )
                })}

            </div>

        </>
    )
}

export default MainPage

import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import {Button, Form, Container, Row, Col} from 'react-bootstrap'
import CategoriesOptions from './CategoriesOptions'


const StartNewRound = () => {

    const [categories, setCategories] = useState([]);

    fetch('api/v1/Categories')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setCategories(data);
        })
        .catch(error => console.error('Unable to get categories.', error)); 

    return(
    <div className="mt-3"> 
      <Container>
        <Row>
            <Col>    
                <Form className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label class="form-label">Number of questions</Form.Label>
                    <Form.Control             
                        type="number"
                        defaultValue="10" />  
                </Form>
            </Col>  
            <Col>  
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label> Choose category</Form.Label>
                    <Form.Select defaultValue="Choose..." className="mb-3">
                    {categories.map((categori, i) => (
                        <option key={i}>{categori.name}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
            </Col>  
        </Row>
        <Button>Start Quiz</Button>
      </Container>
    </div>
    )
}
        
export default StartNewRound;
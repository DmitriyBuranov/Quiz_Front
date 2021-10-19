import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert, Card, Navbar, Form, NavDropdown, Nav, Container, Row, Col} from 'react-bootstrap'


const StartNewRound = () => {
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
                        <option>Choose...</option>
                        <option>...</option>
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
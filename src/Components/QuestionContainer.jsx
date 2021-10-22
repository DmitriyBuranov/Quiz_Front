import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Card, Form, Container, Row, Col} from 'react-bootstrap'


const QuestionContainer = () => {
    return(
    <div>
      <Container> 
        <Row> 
          <Card className="mt-3 mb-3">
            <Card.Body>
              <Card.Text> This is question text </Card.Text>
            </Card.Body>
          </Card>
        </Row> 
      </Container> 
      <Container>
        <Form className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label class="form-label">Answer field</Form.Label>
          <Form.Control as="textarea" rows={1} />  
        </Form>
        <Button>Answer</Button>
        <Row className="mt-3 mb-3">
          <Col> 
            <Row>
              <Button className="mb-3" variant="primary" size="lg">
                1 answer
              </Button>
            </Row>
            <Row>
              <Button className="mb-3 " variant="primary" size="lg">
                2 answer
              </Button>
            </Row>
          </Col> 
          <Col>
            <Row>
              <Button className="mb-3 " variant="primary" size="lg">
                3 answer
              </Button>
            </Row>
            <Row>
              <Button className="mb-3 " variant="primary" size="lg">
                4 answer
              </Button>
            </Row>

          </Col>
        </Row>
       <Button>Next Qusetion</Button>
      </Container>   
      </div>
    )
}
export default QuestionContainer;
import React from 'react';
import { Col, Row ,Card} from 'react-bootstrap';
import './Categories.css';
import Fade from 'react-reveal/Fade';


const Categories = ({FoodItems}) => {
  return (
    <Row xs={1} md={3} sm={2} className="g-5 w-100">
    {FoodItems.map((item, idx) => (
      <Fade bottom>
      <Col key={idx}>
        <Card className='mx-4 mt-4 mb-4  CardStruc '  >
          <Card.Img variant="top" src={item.image}  className='imageStyle'/>
          <Card.Body>
            <Card.Title className=' d-flex  justify-content-between my-2'>

           <div className='item-title'> {item.title}</div>
           <div className='item-price'> {item.price} ريال</div>

            </Card.Title>
            <Card.Text className='mt-5 Description'>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Fade>
    ))}
  </Row>
  )
}

export default Categories

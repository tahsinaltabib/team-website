import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import awsome from '../assets/awsome.png'
import Image from '../components/Image'

const Awsome = () => {
  return (
    <section className='aw-sec'>
      <Container>
         <Row>
           <Col lg={6}>
            <h1>Title Copy Goes Here Be Awesome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <button className='awbtn'>GET STARTED</button>
           </Col>
           <Col lg={6}>
              <Image className="className" src={awsome}/>
           </Col>
         </Row>
      </Container>
    </section>
  )
}

export default Awsome
import React from 'react'
import { Container,Form } from 'react-bootstrap';

const Formpart = () => {
  return (
   <section className='form-part'>
    <Container>
        <div className='maintouch'>
            <h2>Get in touch</h2>
            <p>Let us know how we can help</p>
        </div>

        <div>
          <Form className='form-design'>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                 <Form.Label>Name</Form.Label>
                 <Form.Control className='form-border'  type="email" placeholder="Your full name" />
               </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control className='form-border' type="email" placeholder="Enter email" />
               </Form.Group>
              <Form.Group className="mb-3" >
                 <Form.Label>Message</Form.Label>
                 <Form.Control className='form-border' type="textarea" placeholder="Your message..." />
               </Form.Group>
               <button className='form-btn'>Sent message</button>
               
           </Form>
        </div>

    </Container>
    
   </section>
  )
}

export default Formpart
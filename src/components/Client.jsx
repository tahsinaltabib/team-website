import React from 'react'
import { Container } from 'react-bootstrap'
import Image from '../components/Image';
import C1 from '../assets/c1.png'
import C2 from '../assets/c2.png'
import C3 from '../assets/c3.png'
import C4 from '../assets/c4.png'
import C5 from '../assets/c5.png'
import C6 from '../assets/c6.png'

const Client = () => {
  return (
    <section className='clientPart'>
      <Container>
        <h2>Clients Section</h2>
        <div className='client-img'>
          <Image src={C1}/>
          <Image src={C2}/>
          <Image src={C3}/>
          <Image src={C4}/>
          <Image src={C5}/>
          <Image src={C6}/>
        </div>
      </Container>
    </section>
  )
}

export default Client
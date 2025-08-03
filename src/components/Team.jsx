import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Image from '../components/Image';
import One from '../assets/team1.png'
import Two from '../assets/team2.png'
import Three from '../assets/team3.png'

const Team = () => {
  return (
    <section className='team-sec'>
      <Container>
        <div className='team-heading'>
          <h2>Team section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Quisque quis euismod lorem.
          </p>
        </div>
        <div className="card-main">
          <Card className="card" style={{ width: "18rem" }}>
            <Image src={One}/>
            <Card.Body>
              <Card.Title className="card-title">Ismail Haniyeh</Card.Title>
              <p>Leader</p>
              <Card.Text className="card-text">
                *Ismail Haniyeh was a Palestinian politician, a leading political leader of Hamas. He became Prime Minister after Hamas won the 2006 legislative elections. Israeli forces martyred him on July 31 2024.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Image src={Two}/>
            <Card.Body>
              <Card.Title className="card-title">Yahya as-Sinwar</Card.Title>
              <p>Co-Founder</p>
              <Card.Text>
                *Yahya as-Sinwar was a Palestinian politician and head of the political wing of Hamas. He was one of the co-founders of 'Hamas' security apparatus. Israeli forces martyred him on October 16, 2024.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Image src={Three}/>
            <Card.Body>
              <Card.Title className="card-title">Abu Ubaida</Card.Title>
              <p>Spokesperson</p>
              <Card.Text>
                *Abu Ubaydah represents the Qassam Brigades in the media and at press conferences. After the Israeli disengagement from Gaza in 2005, he was officially appointed as the spokesman for Al-Qassam.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Team;

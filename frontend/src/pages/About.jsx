import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/about.css';

import aboutImg from '../assets/images/about-img01.jpg';
import aboutImg02 from '../assets/images/about-img02.avif';
import aboutImg03 from '../assets/images/about-img03.jpg';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <>
        <section className="about_head-section">
        <Container>
            <Row>
                <Col lg='12'><h1>About Us</h1></Col>
            </Row>
        </Container>
    </section>

    <section className='about_who-section'>
  <div className="about_split-container">
    <div className="about_content">
      <h2>Who Are We?</h2>
      <p>Travel World is a dedicated B2B digital travel/tourism/hospitality/cruise/airline industry magazine and trade network.<br />
      Travel And Tour World boasts a readership of over 5,000,00 industry leaders in 195 countries the travel, tourism, airlines, cruise and hospitality industries and also social media influencers and think tanks.<br />
      We take immense pride in our extensive media partnership history, spanning over a decade since 2009, with 1200+ prestigious travel trade shows worldwide.<br />
      From Tour Operators, Travel Agents who curate unforgettable journeys to Destination Management Companies ensuring seamless travel experiences, and MICE (Meetings, Incentives, Conferences, and Exhibitions) Planners orchestrating successful events, to Luxury Planners crafting high-end getaways – our readers are at the forefront of shaping the travel landscape.
      </p>
    </div>

    <div className="about_img-box">
      <img src={aboutImg} alt="" className="about_img1" />
      <img src={aboutImg02} alt="" className="about_img2" />
      <img src={aboutImg03} alt="" className="about_img3" />
    </div>
  </div>
</section>

    <section className='about_our-future'>
    <div className="about_our-split-container">
    <div className="about_our-future-title">
      <h2>OUR MISSION, VISION AND VALUES</h2>
      <p>Our vision is the future we want to achieve. Our mission is what we do every day to bring that vision to life.</p>
    </div>

    <div className="about_our-future-content">
      <div className="mission">
        <h3>Mission</h3>
        <p>Helping people and companies travel smart and achieve more</p>
      </div>
      <div className="vision">
        <h3>Vision</h3>
        <p>To be the world’s most trusted, innovative and sustainable travel management company</p>
      </div>
    </div>
  </div>
  </section>

  <section className='our_values'>
    <h2>Our values</h2>
    <div className="our_value-container">
    <div className="box">
      <h4>Solve it together</h4>
      <p>Collaboration connects us. There’s no problem so tough that we can’t tackle it together. Working as a team, we harness the wisdom (and energy!) of the crowd.</p>
    </div>
    <div className="box">
      <h4>Act with purpose</h4>
      <p>We embrace change and foster innovation. Our creativity and drive are positively contagious – and they get results.</p>
    </div>
    <div className="box">
      <h4>Do what’s right</h4>
      <p>We operate openly and foster transparency. Our team members, clients and communities always know where we stand.</p>
    </div>
    <div className="box">
      <h4>Give your best</h4>
      <p>Passion powers us. We believe the only way to do great work is to love what you do. We’re inspired by the people and places around us.</p>
    </div>
    <div className="box">
      <h4>Feed the future</h4>
      <p>When we give others the tools, skills and opportunities to succeed, they flourish. When we give ourselves the same, we’re unstoppable.</p>
    </div>
</div>

  </section>
    </>
  )
}

export default About
import React, { useEffect } from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt=''/>
              </div>
              <h1>Travels opens the door of creating <span className="highlight"> memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi non ullam blanditiis excepturi? Ipsum, ex. Expedita, iste qui corrupti voluptatibus consequuntur id rerum ex deserunt exercitationem sequi, non ea!</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve</h5>
            <h2 className="services title">We offer our best services</h2>
          </Col>

          <ServiceList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured_tour-title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience_content">
              <Subtitle subtitle={"Experience"} />

              <h2>
                With our all experience <br /> We will serve you
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Labore, corporis! Autem facilis maiores recusandae alias?
              </p>
            </div>

            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter_box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter_box">
                <span>15</span>
                <h6>years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience_img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Home
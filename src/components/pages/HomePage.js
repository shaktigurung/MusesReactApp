import React, { Component } from "react";
import logoImage from "./../images/logo.svg";
import bg from "./../images/musesbackground.jpg";
import ReactRotatingText from "react-rotating-text";
import "../structure/ReactRotatingText.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';


class HomePage extends Component {

  render() {
    return (
      <div>
        <div style={{ fontSize: '30px' }}>
          <Container>
            <Row>
              <Col xs="12">
                <img src={logoImage} alt="logo" style={{ width: "60%", marginTop:"-100px"}} />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <img src={bg} alt="mainbg" className="bg effect"  />
              </Col>
            </Row>
            <Row>
              <Col xs="12" style={{ marginTop:"20px", marginBottom:"20px" }}>
                  <div>
                    <h1 className="muses-primary-text">Code with us in</h1>
                    <div style={{ fontSize: '60px' }}>
                      <ReactRotatingText items={["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin"]} color="#DA3296" />
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>

          <Jumbotron fluid className="muses-secondary">
            <Container fluid >
              <h1 className="muses-tertiary-text">Hello, EveryOne!</h1>
              <p className="lead" style={{ color: "#7985F0" }}>Muses run free JavaScript and Node.js workshops for women, non-binary and trans folk around Australia.We are a community of people who learn together.</p>
              <Link to="/aboutus">
                <Button outline className="muses-secondary" size="lg">See more</Button>
              </Link>
            </Container>
          </Jumbotron>
      
          {/* //Testimonials */}
          <Container>
          <h2 className="testimonial">Testimonials</h2>
            <div id="myCarousel" class="carousel slide testimonial" data-ride="carousel">
              {/* <!-- Carousel indicators --> */}
              <ol class="carousel-indicators testimonial">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>   
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">		
                <div className="item carousel-item active">
                  <div className="img-box"><img src={bg} alt=""/></div>
                  <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                  <p className="overview"><b>Michael Holz</b>Seo Analyst at <a href="#">OsCorp Tech.</a></p>
                  <div className="star-rating">
                    <ul className="list-inline">
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="item carousel-item">
                  <div className="img-box"><img src={logoImage} alt=""/></div>
                  <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                  <p className="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
                  <div className="star-rating">
                    <ul className="list-inline testimonial">
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                    </ul>
                  </div>
                </div>
                <div className="item carousel-item">
                  <div className="img-box"><img src={logoImage} alt="" /></div>
                  <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
                  <p className="overview"><b>Antonio Moreno</b>Web Developer at <a href="#">Circle Ltd.</a></p>
                  <div className="star-rating">
                    <ul className="list-inline testimonial">
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star"></i></li>
                      <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                    </ul>
                  </div>
                </div>		
              </div>
              {/* <!-- Carousel controls --> */}
              <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                <i class="fa fa-angle-left"></i>
              </a>
              <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(HomePage);


import { Container, Row, Col } from 'react-bootstrap';
import '../../src/hero.css';

const Hero = (props) => {
  return (
    <div className="jumbotron m-3 ">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

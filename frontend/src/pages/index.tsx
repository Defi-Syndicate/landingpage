import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import css from '../styles/Home.module.css';
import { Button } from 'react-bootstrap';
import Chart from '../components/chart';

export default function Home() {
  return (
      <Container>
        <Row id="hero" className={css.anchorTag}>
          <Col className={`d-flex flex-column justify-content-center ${css.center}`}>
              <h1 className={css.heroMain}>DefiSyndicate</h1>
              <div className={css.heroTitle}>Welcome to the Syndicate</div>
          </Col>
        </Row>
        <Row id="about" className={css.anchorTag}>
          <Col className={`d-flex flex-column justify-content-center ${css.center}`}>
              <div className={`${css.heroSubtitle} ${css.darkFrame}`}>The DefiSyndicate is a multi-phased project that aims to iterate on the current defi landscape and introduce new innovations. We are focused on sustainability, gamification, tradeable utility, and flexibility. </div>
          </Col>
        </Row>
        <Row id="description" className={css.anchorTag}>
          <Col className={`d-flex flex-column justify-content-center ${css.center}`}>
          <div className={`${css.heroSubtitle} ${css.darkFrame}`}>
              In order to innovate in this space you have to experiment and continuously adapt to the changing environment.<br/>
              <Button><a className={css.buyLink} target='_blank' rel='noopener noreferrer' href='https://medium.com/@DefiSyndicate/what-is-defisyndicate-45568f6ffbab' title='Defi Syndicate Litepaper'>Lite Paper</a></Button><Button><a className={css.buyLink} target='_blank' rel='noopener noreferrer' href='https://medium.com/@DefiSyndicate' title='Defi Syndicate Medium'>Medium</a></Button> 
            </div>
          </Col>
        </Row>
        <Row id="chart" className={css.anchorTag}>
          <Col className={`d-flex flex-column justify-content-center ${css.center}`}>
            <Chart></Chart>
          </Col>
        </Row>
        <Row id="buy" className={css.anchorTag}>
          <Col className={`d-flex flex-column justify-content-center ${css.center}`}>
            <div>
              <Button><a className={css.buyLink} target='_blank' rel='noopener noreferrer' href='https://traderjoexyz.com/trade?outputCurrency=0xA171629637C3266b4247551eE67ffdD3f03Fb0b5' title='Open in new window'>Join us for the journey!</a></Button>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

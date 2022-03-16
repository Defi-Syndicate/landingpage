import { Row, Col, Container } from "react-bootstrap";
import css from './chart.module.css';

const Chart = (): JSX.Element => {

    return(
        <Container id="chart" className={css.anchorTag}>
            <Row>
                <Col>
                    <div className={css.dexScreenerEmbed} id="dexscreener-embed">
                        <iframe className={css.dexScreenerEmbedIframe} src="https://dexscreener.com/avalanche/0x6507ccd0a6c1b89ef6c79fd42ff16c15d2e6df97?embed=1"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Chart
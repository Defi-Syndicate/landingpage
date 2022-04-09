import { Row, Col, Container } from "react-bootstrap";
import css from './chart.module.css';

const Chart = (): JSX.Element => {

    return(
        <Container id="chart" className={css.anchorTag}>
            <Row>
                <Col>
                    <div className={css.dexScreenerEmbed} id="dexscreener-embed">
                        <iframe className={css.dexScreenerEmbedIframe} src="https://dexscreener.com/avalanche/0xC34ae284220A993A237b080ad6a21B6D0587e9cC?embed=1"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Chart

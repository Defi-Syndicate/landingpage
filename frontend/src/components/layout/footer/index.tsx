import css from './footer.module.css';

const Footer = (): JSX.Element => {
    return(
        <div className={`${css.footerContainer} ${css.anchorTag}`}>
            © 2022 Copyright Defi Syndicate
        </div>
    );
}

export default Footer;
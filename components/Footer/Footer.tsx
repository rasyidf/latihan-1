import { ContactPopup } from './ContactPopup';
import { Feedback } from './Feedback';
import styles from './Footer.module.scss';
import { SosmedPopup } from './SosmedPopup';

type Props = {
};

const Copyright = <a href="#">Copyright © 2022</a>;

const Footer = ({ }: Props) => (
    <div className={styles.footer}>
        <ContactPopup />
        <SosmedPopup />
        <Feedback />
        {Copyright}
    </div>
);

export default Footer;

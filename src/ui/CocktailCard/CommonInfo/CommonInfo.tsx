import styles from './CommonInfo.module.scss';

const CommonInfo = ({ ...props }) => {
    return <div className={styles['common-info']}>{props.children}</div>;
};

export default CommonInfo;

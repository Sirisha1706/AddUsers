import Button from "./Button";
import Card from "./Card";
import styles from'./Errormodal.module.css';

const Errormodal = props =>{
    return (
        <div>
        <div className={styles.backdrop} onClick={props.onConfirm}></div>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h1>{props.title}</h1>
            </header>
            <div className={styles.content}>
                <p>{props.desc}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
};  

export default Errormodal;
import Card from "../UI/Card";
import styles from './Userlist.module.css';

const Userlist = props =>{
    return(
        <Card className={styles.users}>
        <ul>
            {props.users.map((user) =>(
            <li key={props.id}>
                {user.name} (is {user.age} years old)
            </li>
        ))}
        </ul>
        </Card>
    );
}

export default Userlist;
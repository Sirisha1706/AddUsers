import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './Adduser.module.css';
import {useState} from 'react';
import Errormodal from '../UI/Errormodal';

const Adduser = props =>{
    const [entername, setname] = useState('');
    const [enterage, setage] =  useState('');
    const [error, seterror] = useState();
    
    const adduser = event =>{
        event.preventDefault();
        if (entername.trim().lenght === 0 ||  enterage.trim().length === 0){
            seterror({
                title : 'Invalid Inputs',
                desc : "Please enter name and age",
            });
            return ;
        }
        if (+enterage < 1){
            seterror({
                title : 'Invalid Age',
                desc : "Age cant be negative",
            });
            return ;
        }
        console.log(entername, enterage);
        props.onAdduser(entername,enterage);
        setage('');
        setname('');
    };

    const changename = event =>{
        setname(event.target.value);
    };

    const changeage = event => {
        setage(event.target.value);
    };

    const errorhandler = () =>{
        seterror(null);
    };
    return ( 
        <div>
        {error && (<Errormodal title={error.title} desc={error.desc} onConfirm={errorhandler}></Errormodal>)}
        <Card className={styles.input}>
        <form onChange={adduser}>
            <label htmlFor="username" >User Name:-</label>
            <input type="text" id="username" value={entername} onChange={changename}></input>
            <label htmlFor="age">Age:-</label>
            <input type="number" id="age" value={enterage} onChange={changeage}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};

export default Adduser;
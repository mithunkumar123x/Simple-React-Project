import React from 'react' ;

import Card from '../UI/Card'

import classes from './AddUser.module.css';

import Button  from '../UI/Button';

const AddUser = (props) => {

    const adduserHandler = (event) => {
        event.preventDefault();
    };

    return (
     <Card className = {classes.input}>
      <form onSubmit={adduserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'/>
        <label htmlFor='age'>Age (Years)</label>
        <input  id='age' type='number' />
        <Button type='submit'>Add Users</Button>
      </form>

    </Card>
    );
};

export default AddUser;
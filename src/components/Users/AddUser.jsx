import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
        <label htmlFor='username'>Age (Years)</label>
        <input id='age' type='number'></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

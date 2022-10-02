import React from 'react';
import {Link} from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {id, name, email, website, username} = friend;
    return (
        <div className='Friend'>
            <h3>{name}</h3>
            <h5>
                Email: {email} <br />
                Website: {website}
            </h5>
            <Link to={`/friend/${id}`}>{username}</Link>
        </div>
    );
};

export default Friend;
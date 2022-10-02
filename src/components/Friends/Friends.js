import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {

    const friends = useLoaderData();

    return (
        <div className='Friends container'>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;
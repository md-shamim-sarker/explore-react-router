import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {

    const friends = useLoaderData();
    // console.log(friends);

    return (
        <div className='Friends'>
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
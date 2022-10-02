import React from 'react';
import {useLoaderData} from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, phone, website, email, company, address} = friend;
    return (
        <div className='FriendDetails'>
            <h2>Friend Details</h2>
            <img src="https://placeimg.com/150/150/people" alt="placeholder_image" />
            <h3>Name: {name}</h3>
            <h4>
                Phone Number: {phone} <br />
                Website: {website} <br />
                Email: {email} <br />
                Company: {company.name} <br />
                Address: {address.street}, {address.city}
            </h4>
        </div>
    );
};

export default FriendDetails;
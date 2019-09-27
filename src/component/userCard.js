import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'


export default function userCard(props) {

    return (
        
        <Link className='card' to={`/post-list/${props.contact.id}`}>

            <img className='image' src='https://maphotoportrait.fr/1792-home_default/portrait-cv-linkedin.jpg' alt=''></img>
            <h1 className='title-style'>{props.contact.name}</h1>
            <h2 className='title-style'>{props.contact.username}</h2>
            <h3 className='title-style'>{props.contact.email}</h3>

        </Link>
       
    )
}
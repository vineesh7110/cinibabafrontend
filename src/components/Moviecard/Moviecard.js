import React from 'react';
import styles from './Moviecard.module.css'
import { Link } from "react-router-dom";
function Moviecard(props){
    const movie = props.movie
    return(

<Link to={'/movies/'+movie._id}>
<li className={styles.Moviecard}>
    <img src={movie.image} alt={movie.title+"thumbnail"}/>
       <h3>{movie.title}</h3>
</li>
</Link>
    
        
    );
}

export default Moviecard;
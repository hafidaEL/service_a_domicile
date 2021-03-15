import React from 'react';
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import {personnesSelector} from '../slices/personnes'


const Personne = () => {
    let { uuid } = useParams();
    console.log("uuid param : ", uuid )
    const { personnes } = useSelector(personnesSelector)

    const personne = personnes.filter( p =>  p.login.uuid === uuid )[0]
    console.log("Personne personne : ", personne)
    return (
       <div key={personne.login.uuid} className='tile'>
            <h2>{personne.name.first} {personne.name.last}</h2>
            <img src={personne.picture.large} alt=''/>
        </div>
    );
}

export default Personne;

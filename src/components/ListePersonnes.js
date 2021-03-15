import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPersonnes, personnesSelector} from '../slices/personnes'

const ListePersonnes = () => {
    let { id } = useParams();
    console.log("id param : ", id )
    const dispatch = useDispatch()
    const { personnes,loading, hasErrors } = useSelector(personnesSelector)
    console.log('personnes : ', personnes)

    useEffect(() => {
        dispatch(fetchPersonnes(id))
    }, [dispatch,id])

    const renderPersonnes = () => {
        if (loading) return <p>Loading personnes...</p>
        if (hasErrors) return <p>Cannot display personnes...</p>
    
        return personnes.map(personne =>
          <div key={personne.login.uuid} className='tile'>
            <h2>{personne.name.first}</h2>
            <Link to={`/personne/${personne.login.uuid}`}>
                <img src={personne.picture.large} alt='toto'/>
            </Link>
          </div>
        )
    }

    return (
        <section>
          <h1>Personnes</h1>
          <div className='content'>
            {renderPersonnes()}
          </div>
        </section>
    );
}

export default ListePersonnes;
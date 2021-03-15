import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPersonnes, personnesSelector} from '../../slices/personnes'
import {
  Card,
  Header,
  Avatar,
  Title,
  Name,
  Age,
  City,
} from '../Personne/Personne.styles'

const ListePersonnes = () => {
    let { id,title } = useParams();
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
            <Link to={`/personne/${personne.login.uuid}`}>
                <Card>
                  <Header>
                    <Avatar src={personne.picture.large} alt="" />

                    <Title>
                      <Name>{personne.name.first}</Name>
                      <Age>{personne.dob.age} ans</Age>
                    </Title>

                    <City>{personne.location.city}</City>
                  </Header>
                </Card>
            </Link> 
          </div>
        )
    }

    return (
        <section>
          <h1>{title}</h1>
          <div className='content'>
            {renderPersonnes()}
          </div>
        </section>
    );
}

export default ListePersonnes;
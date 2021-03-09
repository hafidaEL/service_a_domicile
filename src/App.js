import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux'

import {fetchServicesDomicile, servicesDomicileSelector} from './slices/servicesDomicile'

const App = () => {
    const dispatch = useDispatch()
    const { servicesDomicile,loading, hasErrors } = useSelector(servicesDomicileSelector)
    console.log('service : ', servicesDomicile)

    useEffect(() => {
        dispatch(fetchServicesDomicile())
    }, [dispatch])

    const renderServicesDomicile = () => {
        if (loading) return <p>Loading services...</p>
        if (hasErrors) return <p>Cannot display services...</p>
    
        return servicesDomicile.map(service =>
          <div key={service.idService} className='tile'>
            <h2>{service.title}</h2>
            <img src={service.img} alt=''/>
          </div>
        )
      }
    
      return (
        <section>
          <h1>Les services à domicile</h1>
          <div className='content'>
            {renderServicesDomicile()}
          </div>
        </section>
      )
}

export default App;

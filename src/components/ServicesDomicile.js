import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {fetchServicesDomicile, servicesDomicileSelector} from '../slices/servicesDomicile'

const ServicesDomicile = () => {
    const dispatch = useDispatch()
    const { servicesDomicile,loading, hasErrors } = useSelector(servicesDomicileSelector)

    useEffect(() => {
        dispatch(fetchServicesDomicile())
    }, [dispatch])

    const renderServicesDomicile = () => {
        if (loading) return <p>Loading services...</p>
        if (hasErrors) return <p>Cannot display services...</p>
        console.log(loading+' servicesDomicile : ', servicesDomicile)

        return servicesDomicile.map(service =>
          <div key={service.idService} className='tile'>
            <h2>{service.title}</h2>
            <Link to={`/services/${service.idService}/${service.title}`}><img src={service.img} alt=''/></Link>
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
    );
}

export default ServicesDomicile;



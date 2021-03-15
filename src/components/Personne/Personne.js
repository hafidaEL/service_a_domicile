import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import {
    Title,
    Button,
    Card,
    Header,
    Avatar,
    Name,
    Age,
    City,
    Wrapper,
    Content,
    ReservationWrapper,
    Cv,
    ContentReservation,
} from './Personne.styles'

import {personnesSelector} from '../../slices/personnes'


const Personne = () => {
    let { uuid } = useParams();
    console.log("uuid param : ", uuid )
    const { personnes } = useSelector(personnesSelector)
    const [startDate, setStartDate] = useState(new Date());

    const personne = personnes.filter( p =>  p.login.uuid === uuid )[0]
    console.log("Personne personne : ", personne)
    return (
       <Wrapper key={personne.login.uuid} color={'dark'}>
            <Content>
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
            </Content>
            <ContentReservation>
                <Cv>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil est laborum sit voluptatibus optio ab earum magni officia et tempore, illum nam ut. Sed fugiat quod excepturi vitae nesciunt officiis.
                </Cv>
                <ReservationWrapper> 
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    <Button> Réserver </Button>
                </ReservationWrapper>
            </ContentReservation>
        </Wrapper>
    );
}

export default Personne;

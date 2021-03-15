import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';

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

const Input = ({onChange, placeholder, value, isSecure, id, onClick}) => (
	<input
		onChange={onChange}
		placeholder={placeholder}
		value={value}
		isSecure={isSecure}
		id={id}
		onClick={onClick}
	/>
);

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
                    <Title>
                        Présentation : 
                    </Title>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil est laborum sit voluptatibus optio ab earum magni officia et tempore, illum nam ut. Sed fugiat quod excepturi vitae nesciunt officiis.
                </Cv>
                <ReservationWrapper> 
                    <DatePicker
                        customInput={<Input />} 
                        selected={startDate} 
                        onChange={date => setStartDate(date)}
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        showTimeInput 
                    />
                    <Button> Réserver </Button>
                </ReservationWrapper>
            </ContentReservation>
        </Wrapper>
    );
}

export default Personne;

import React from 'react';
import {
    FormGroup,
    Label,
    Input,
    Titre,
    Button,
} from './Reservation.styles'

const Reservation = () => {
    return (
        <div>
            <Titre>Valider votre réservation en renseignant votre identité :</Titre>
            <FormGroup>
                <Label>Nom</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Label>Prenom</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Label>Age</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Label>Ville</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Button>Valider</Button>
            </FormGroup>
            
        </div>
    );
}

export default Reservation;

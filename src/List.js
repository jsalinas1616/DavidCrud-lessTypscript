import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row } from 'react-bootstrap';


export const List = (props) => {

    const { stateTask } = props

    return (
        <ul>
            {
                stateTask.map((element) => (
                    <li>{element.name}</li>
                ))
            }
        </ul >
    )
}

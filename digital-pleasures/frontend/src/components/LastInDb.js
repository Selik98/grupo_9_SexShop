import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';

function LastInDb(props){
    return(
    <Card style={{ width: '15rem', height:'18rem' }}>
      <Card.Body>
        <CardImg>{props.icon}</CardImg>
        <Card.Title>Nombre del producto{props.Title}</Card.Title>
        <Card.Text>Descripcion del producto{props.description}</Card.Text>
        <Button variant="primary">detalle del producto</Button>
      </Card.Body>
    </Card>
      );
    }
  

export default LastInDb;

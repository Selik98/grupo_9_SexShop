import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';


function LastInDb(props) {

  let type

  if (props.type == 'user') {
    type = 'usuario'

  }
  else if (props.type == 'product') {
    type = 'producto'
  }


  return (
    <Card style={{ width: '15rem', height: '18rem' }}>
      <Card.Body>
        <CardImg>{props.icon}</CardImg>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">detalle del {type}</Button>
      </Card.Body>
    </Card>
  );
}


export default LastInDb;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button,Col } from 'react-bootstrap'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class FruitsCard extends React.Component {

addToFavorite=()=>{
axios.post(`${process.env.REACT_APP_SERVER}/addToFavorite?email=${this.props.auth0.user.email}`,this.props.element).then(console.log('added'))
}


  render() {
    return <>
    <Col xs={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.element.image} />
        <Card.Body>
          <Card.Title>{this.props.element.name}</Card.Title>
          <Card.Text>
            price:{this.props.element.price}
          </Card.Text>
          <Button variant="primary" onClick={this.addToFavorite}>Add-to-favorite</Button>
        </Card.Body>
      </Card>
      </Col>
    </>
  }
}
export default withAuth0(FruitsCard)
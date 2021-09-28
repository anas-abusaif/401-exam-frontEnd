import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Modal } from 'react-bootstrap'
import axios from 'axios';
import UpdateForm from './UpdateForm';

class FavFruitsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      name: '',
      image: '',
      price: ''
    }
  }

  delete = () => {
    axios.delete(`${process.env.REACT_APP_SERVER}/deleteFruit?id=${this.props.element._id}`)
    this.props.componentDidMount();
    this.props.forceUpdate()
  }

  update = () => {
    let reqBody = {
      name: this.state.name,
      image: this.state.image,
      price: this.state.price
    }
    axios.put(`${process.env.REACT_APP_SERVER}/updateFruit?id=${this.props.element._id}`, reqBody)
    this.handleClose();
    this.props.componentDidMount();
    this.props.forceUpdate()
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeImage = (newImage) => {
    this.setState({
      image: newImage
    })
  }

  changePrice = (newPrice) => {
    this.setState({
      price: newPrice
    })
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
            <Button variant="danger" onClick={this.delete}>Delete</Button>
            <Button variant="primary" onClick={this.update}>Update</Button>

          </Card.Body>
        </Card>
      </Col>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>updating {this.props.element.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <UpdateForm
            element={this.props.element}
            changeName={this.changeName}
            changeImage={this.changeImage}
            changePrice={this.changePrice}

          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  }
}
export default FavFruitsCard
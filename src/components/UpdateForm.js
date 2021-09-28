import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'

class UpdateForm extends React.Component {
  render() {
    return <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>New Name</Form.Label>
          <Form.Control type="email" 
          placeholder={this.props.element.name} 
          onChange={(e)=>this.props.changeName(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Image</Form.Label>
          <Form.Control type="email" 
          placeholder={this.props.element.image} 
          onChange={(e)=>this.props.changeImage(e)}

          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Price</Form.Label>
          <Form.Control type="email" 
          placeholder={this.props.element.price} 
          onChange={(e)=>this.props.changePrice(e)}

          />
        </Form.Group>
      </Form>
    </>
  }
}
export default UpdateForm
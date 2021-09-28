import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FruitsCard from './fruitsCard';
import { Row } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/`).then(recived => this.setState({
      fruits: recived.data.fruits
    }))
  }


  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Row>
          {this.state.fruits.map(element => <FruitsCard element={element} />)}
        </Row>
      </>
    )
  }
}

export default Home;

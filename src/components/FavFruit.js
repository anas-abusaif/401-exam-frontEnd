import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FavFruitsCard from './favFruitsCard';
import { withAuth0 } from '@auth0/auth0-react';


class FavFruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/getFavorite?email=${this.props.auth0.user.email}`).then(
      recived =>
        this.setState({
          favorites: recived.data
        })
    )
  }


  render() {
    return (
      <>
        <h1>My Favorite Fruits</h1>
        {this.state.favorites.map(element => <FavFruitsCard 
        element={element}
        componentDidMount={this.componentDidMount}
        forceUpdate={this.forceUpdate}
        />)}
      </>
    )
  }
}

export default withAuth0(FavFruit);

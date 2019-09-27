import React, { Component } from 'react';
import Post from './postCard';
// import Com from './Com'



export default class postPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postlist: []
    }
  }

  componentDidMount = () => {
    this.getPost()
  }

  getPost = () => {
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(json => this.setState({ postlist: json }))
  };


  render() {
    return (
      <div>
        {this.state.postlist.map(el => <Post post={el} id={this.props.match.params.id} />)}

      </div>
    )
  }
}



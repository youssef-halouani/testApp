import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          commentaire: [],
        }
    }
    componentDidMount ()  {
      this.getComment()
            }
 getComment = () => {
     let id = this.props.id;

                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(response => response.json())
                .then(json => this.setState({commentaire:json}))
            }
    render() {
        return (
            <div>
            {this.state.commentaire.filter(el => el.id===this.props.id)}
            </div>
        )
    }
}

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', id: '', isLiked: false}

  nameInput = event => {
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitFunction = event => {
    event.preventDefault()
    const {name, comment, id, isLiked} = this.state
    const tt = {name, comment, id: uuidv4(), isLiked}
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, tt],
      name: '',
      comment: '',
    }))
  }

  likeToggle = id => {
    const {isLiked} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return ''
        }

        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment, isLiked} = this.state
    return (
      <div>
        <div className="bg-main">
          <div className="bg-sub">
            <h1>Comments</h1>
            <p>Say Something about 4.0 Technologies</p>
            <form onSubmit={this.onSubmitFunction}>
              <input
                type="text"
                value={name}
                onChange={this.nameInput}
                placeholder="Your Name"
              />
              <br />
              <textarea
                value={comment}
                onChange={this.commentInput}
                placeholder="Your Comment"
              />
              <br />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div className="bg-image">
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <p>
          {commentsList.length} Comments {isLiked}
        </p>
        <ul>
          <li>
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                commentDetails={eachItem}
                likeToggle={this.likeToggle}
                onDelete={this.onDelete}
              />
            ))}
          </li>
        </ul>
      </div>
    )
  }
}

export default Comments

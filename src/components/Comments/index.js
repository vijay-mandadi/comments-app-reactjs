import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    commentList: [],
  }

  changeColor = id => {
    this.setState(prev => ({
      commentList: prev.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filtered = commentList.filter(each => each.id !== id)
    this.setState(prev => ({commentList: filtered, count: prev.count - 1}))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  submitDetails = event => {
    event.preventDefault()
    const {name, comment, count} = this.state
    const obj = {
      id: v4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      color:
        initialContainerBackgroundClassNames[
          count % initialContainerBackgroundClassNames.length
        ],
    }
    this.setState(prev => ({
      commentList: [...prev.commentList, obj],
      name: '',
      comment: '',
      count: prev.count + 1,
    }))
  }

  render() {
    const {name, comment, count, commentList} = this.state
    console.log(commentList)
    return (
      <div className="bg-container">
        <div className="top-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.submitDetails}>
              <input
                value={name}
                onChange={this.onChangeName}
                className="input"
                type="text"
                placeholder="Your Name"
              />
              <textarea
                rows="6"
                cols="20"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              >
                {comment}
              </textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comment-image"
            alt="comments"
          />
        </div>
        <ul className="list-container">
          <li className="count-container">
            <p className="count">{count}</p>
            <p className="paragraph">Comments</p>
          </li>
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              item={each}
              changeColor={this.changeColor}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

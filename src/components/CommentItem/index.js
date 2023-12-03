// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {item, changeColor, deleteComment} = props
  const {id, name, comment, color, isLiked, date} = item

  const onChangeLike = () => {
    changeColor(id)
  }

  const deleteItem = () => {
    deleteComment(id)
  }

  const like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeStyle = isLiked ? 'like-blue' : 'like-normal'

  return (
    <li className="listitem">
      <div className="description">
        <p className={`letter ${color}`}>{name.slice(0, 1)}</p>
        <div>
          <div className="time-container">
            <p className="name">{name}</p>
            <p className="comment">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete">
        <button className={likeStyle} type="button" onClick={onChangeLike}>
          <img src={like} alt="like" id="like" /> Like
        </button>
        <button type="button" data-testid="delete" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

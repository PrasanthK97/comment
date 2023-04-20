// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, likeToggle, onDelete} = props
  const {name, comment, id, isLiked} = commentDetails

  const onClickLike = () => {
    console.log(commentDetails.isLiked)
    likeToggle(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  const likeStatus = commentDetails.isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div>
        <div className="head">
          <h1>{commentDetails.name}</h1>
          <p className="commented-time">Less than a minute</p>
        </div>
        <p>{commentDetails.comment}</p>
        <div className="icon-tray">
          <button type="button" onClick={onClickLike}>
            <img alt="like" src={likeStatus} />
            <p>Like</p>
          </button>

          <button type="button" onClick={onClickDelete} testid="delete">
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem

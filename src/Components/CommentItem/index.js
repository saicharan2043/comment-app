// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {newItemsList, clickLike, onDelete, styleCheet} = props
  const {name, comment, isTrue, id, currentDate, number} = newItemsList

  const style = styleCheet[number]
  console.log(number)
  const newDate = formatDistanceToNow(new Date())
  const deleteItem = () => {
    onDelete(id)
  }

  const likeButton = () => {
    clickLike(id)
  }

  const addCss = isTrue ? 'add-color' : ''
  const imgUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-container">
      <div className="profile-container">
        <div className={`bg-profile ${style}`}>
          <p className="">{name[0].toUpperCase()}</p>
        </div>
        <div className="profile-detail-container">
          <div className="profile-name-container">
            <p className="name">{name}</p>
            <p className="time-text">{newDate}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="like-container">
        <button
          className="profile-container button-delete"
          onClick={likeButton}
        >
          <img src={imgUrl} className="like-img" alt="like" />
          <p className={`like-text ${addCss}`}>Like</p>
        </button>
        <button className="button-delete" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr-list" />
    </li>
  )
}

export default CommentItem

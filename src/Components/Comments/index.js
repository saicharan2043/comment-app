import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem/index'
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
  state = {name: '', comment: '', isTrue: false, newItemsList: [], count: 0}

  onDelete = id => {
    this.setState(previwes => ({
      newItemsList: previwes.newItemsList.filter(
        echValue => echValue.id !== id,
      ),
      count: previwes.count - 1,
    }))
  }

  clickLike = id => {
    this.setState(previes => ({
      newItemsList: previes.newItemsList.map(echValue => {
        if (echValue.id === id) {
          console.log(echValue.name)
          return {...echValue, isTrue: !echValue.isTrue}
        }
        return echValue
      }),
    }))
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  addValues = event => {
    event.preventDefault()
    const length = initialContainerBackgroundClassNames.length - 1
    const rendomNumber = Math.ceil(Math.random() * length)
    const {name, comment, isTrue, newItemsList} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isTrue,
      currentDate: formatDistanceToNow(new Date()),
      number: rendomNumber,
    }

    this.setState(echItem => ({
      newItemsList: [...echItem.newItemsList, newComment],
      name: '',
      comment: '',
      count: echItem.count + 1,
    }))
  }

  render() {
    const {name, comment, newItemsList, count} = this.state

    return (
      <div className="bg-color">
        <div className="top-container">
          <form className="top-comment-container">
            <h1 className="heading-top">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt=""
              className="img-1"
            />
            <p className="paragraph-top">
              Say Something about 4.0 Technologles
            </p>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              value={name}
              onChange={this.changeName}
            />
            <textarea
              className="textarea"
              rows="4"
              cols="500"
              placeholder="Your Comment"
              value={comment}
              onChange={this.changeComment}
            />
            <button className="button" type="button" onClick={this.addValues}>
              Add Comment
            </button>
          </form>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img-2"
            />
          </div>
        </div>
        <div className="bottom-container">
          <hr className="hr" />
          <div className="count-container">
            <div className="bg-count">
              <p className="count">{count}</p>
            </div>
            <p className="comment-text">Comments</p>
          </div>
        </div>

        <ul className="un-Order-list">
          {newItemsList.map(echValue => (
            <CommentItem
              newItemsList={echValue}
              key={echValue.id}
              clickLike={this.clickLike}
              onDelete={this.onDelete}
              styleCheet={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

import React, { Component } from "react";
var counter = 0
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "...Say something nice",
      items: [
          {
          value: 'This is the first fake comment',
          date: 'Tuesday'
      },
      {
        value: 'Hi nice blog',
        date: 'Wednesday'
    },
    ]
    };
    this.submitComment = this.submitComment.bind(this);

    this.handlechange = this.handlechange.bind(this);

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      this.setState.text = prevState.text;
  }

  //update the comment field
  submitComment(event) {
    let currentDate = new Date();
    this.setState({
        items:[...this.state.items, {value: this.state.text}]
      });
    //this.setState({items: [{value: this.state.text}]});
    console.log(this.state.items);
    event.preventDefault();
  }
   //update the comment field
   handlechange(event) {
    this.setState({text: event.target.value});
    console.log("text is printing");
  }

  render() {

    return (
      <div>
        
        <form className="commentsField" onSubmit={this.submitComment}>
        <label>
          <h3>Leave a Comment</h3>
          <input type="text" value={this.state.text} onChange={this.handlechange} />
        </label>
          <br />
          <input type="submit" value="Submit" />
          {/* <button value={this.state.text} >Submit Comment</button> */}
        </form>
        <h3>Comments</h3>
        <div className="commentsList">
            <ul>
            {this.state.items.map((item) =>
                <li key={counter++}>{item.date}<br />{item.value}<br /></li>
            )}
            </ul>
            
        </div>
      </div>
    );
  }
}
export default Comment;

import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {message: "", charactersLeft: this.props.maxChars};
  }

  handleChange = (event) => {
    const newMessage = event.target.value;
    if (newMessage.length <= this.props.maxChars) {
      
      this.setState({
        message: newMessage,
        charactersLeft: this.props.maxChars - newMessage.length
      })

    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = { this.state.message } onChange = { this.handleChange }/>
        <p>Characters Left: { this.state.charactersLeft }</p>
      </div>
    );
  }
}

export default TwitterMessage;

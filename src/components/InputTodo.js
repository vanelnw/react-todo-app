import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      this.setState({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="formContainer">
        <input
          type="text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.handleChange}
          className="inputText"
        />
        <button type="submit" className="inputSubmit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

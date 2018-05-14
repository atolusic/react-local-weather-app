import React from "react";

class Search extends React.Component {
  state = {
    search: ""
  };

  onSearchChangeHandler = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    const { changeLocationHandler } = this.props;
    const { search } = this.state;
    e.preventDefault();
    changeLocationHandler(search);
  };

  render() {
    const { search } = this.state;
    const { error } = this.props;

    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            name="search"
            value={search}
            onChange={e => this.onSearchChangeHandler(e)}
          />
          <button type="submit">GO</button>
        </form>
        <p>{search}</p> {error ? <span>&larr; NOT FOUND</span> : null}
      </div>
    );
  }
}

export default Search;

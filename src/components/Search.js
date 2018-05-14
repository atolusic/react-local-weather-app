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

  render() {
    const { search } = this.state;

    return (
      <div>
        <form>
          <input
            name="search"
            value={search}
            onChange={e => this.onSearchChangeHandler(e)}
          />
          <p>{search}</p>
        </form>
      </div>
    );
  }
}

export default Search;

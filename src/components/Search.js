import React from "react";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";

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
    const { changeLocationHandler, startLoading } = this.props;
    const { search } = this.state;
    e.preventDefault();
    startLoading();
    changeLocationHandler(search);
  };

  render() {
    const { search } = this.state;
    const { error } = this.props;

    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <TextField
            name="search"
            value={search}
            floatingLabelText="Search City"
            onChange={e => this.onSearchChangeHandler(e)}
          />
          <IconButton
            type="submit"
            tooltipPosition="bottom-center"
            iconClassName="material-icons"
            tooltip="Search"
          >
            search
          </IconButton>
        </form>
        <p>{search}</p> {error ? <span>&larr; NOT FOUND</span> : null}
      </div>
    );
  }
}

export default Search;

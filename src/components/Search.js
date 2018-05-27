import React from "react";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";

class Search extends React.Component {
  state = {
    search: "",
    searchError: ""
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
    this.setState(
      {
        searchError: search
      },
      () => {
        this.setState({
          search: ""
        });
      }
    );
  };

  render() {
    const { search, searchError } = this.state;
    const { error } = this.props;

    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <TextField
            name="search"
            value={search}
            floatingLabelText="Search City"
            onChange={e => this.onSearchChangeHandler(e)}
            errorText={error ? `${searchError} ⇐ NOT FOUND` : null}
            autoComplete="off"
          />
          <IconButton
            disabled={search ? false : true}
            type="submit"
            tooltipPosition="bottom-center"
            iconClassName="material-icons"
            tooltip="Search"
          >
            search
          </IconButton>
        </form>
      </div>
    );
  }
}

export default Search;

import { Component } from 'react';

export class SearchImg extends Component {
  state = {
    inputSearch: '',
  };
  handlInputChange = evt => {
    this.setState({ inputSearch: evt.currentTarget.value });
  };
  handlFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubMit(this.state.inputSearch);
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handlFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            placeholder=""
            onChange={this.handlInputChange}
            value={this.state.inputSearch}
          />
        </form>
      </header>
    );
  }
}

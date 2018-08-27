import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onChange(this.state.value);
    }

    render() {
        return(
            <div className="search-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="ui fluid action left icon input">
                        <i className="search icon"></i>
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={this.state.value}
                            onChange={this.handleInputChange} 
                        />
                        <button type="submit" className="ui button red">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
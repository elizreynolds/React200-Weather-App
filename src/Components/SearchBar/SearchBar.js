import React from 'react';

export default class SearchBar extends React.Component {

    constructor(props) {
      super(props);
    }

render() {
    // const { city } = this.props;
return (
    <div>
     <div className='row'>
            <div className='d-flex'>
              <div className="p-2">
                <button className='btn btn-primary' value='san diego'onClick={this.handleClick}>San Diego</button>
              </div>
              <div className="p-2">
                <button className='btn btn-primary' value='new york' onClick={this.handleClick}>New York</button>
              </div>
              <div className="p-2">
                <button className='btn btn-primary' value='los angeles' onClick={this.handleClick}>Los Angeles</button>
              </div>
              <div className='p-2'>
                <button className='btn btn-primary' value="london" onClick={this.handleClick}>London</button>
              </div>
              <div className='p-2'>
                <button className='btn btn-primary' value='tokyo' onClick={this.handleClick}>Tokyo</button>
              </div>
            </div>
          </div>

          <div className='col-md-12'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="search-input" placeholder="Search a City.." value={city} onChange={this.handleChangeInput}/>
              <div className="input-group-append">
                <button className="input-group-text" type='submit' id='search-button' name='search-button' onClick={this.handleGo}> Go!</button>
              </div>
            </div>
          </div>
      </div>

);
}
}
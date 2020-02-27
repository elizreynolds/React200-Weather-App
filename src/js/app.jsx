import React from 'react';
import SearchBar from './components/SearchBar';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='container-fluid'>
          <div className='jumbotron jumbotron-fluid text-center'>
            <h1 className='display-3'>Origin Weather Application</h1>
            <p className='lead'> Always know if you'll need an umbrella!</p>
            </div>
                <SearchBar />
                <div className='row'>
                <CityInformation />
                <SearchHistory />
            </div>
            </div>

    );
  }
}
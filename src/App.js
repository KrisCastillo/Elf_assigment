import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import FeatureSpecs from './components/FeatureSpecs';
import Summary from './components/Summary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.featureProduct.selected,
      unselected: this.props.featureProduct.unselected
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
      <NavBar />
        <main>
          <FeatureSpecs  unselected={this.state.unselected} selected={this.state.selected} updateFeature={this.updateFeature.bind(this)}/>
          <Summary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;  

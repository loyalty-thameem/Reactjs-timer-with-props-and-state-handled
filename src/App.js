import React from 'react';
import './style.css';

export class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    console.log('Constructor');
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 5000);
    console.log('componentDidMount Method');
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('componentWillUnmount Method');
  }
  // it's can changed every five seconds
  tick() {
    this.setState({
      time: new Date(),
    });
    console.log('this is tick function');
  }
  render() {
    console.log('This method is responsible to render our JSX to DOM');
    const currentTime = this.state.time;
    return (
      <div>
        <p>
          {this.props.name}: {currentTime.toLocaleTimeString()}{' '}
        </p>
      </div>
    );
  }
}
export default class App extends React.Component {
  render() {
    console.log('Render from parent');
    return (
      <div>
        <ChildComponent name={'Our Current time is'} />
      </div>
    );
  }
}

import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "tachyons";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots,
      search: ""
    };
  }

  onSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const filterdRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Robo Friends</h1>
        <SearchBox
          search={this.state.search}
          searchChange={this.onSearchChange.bind(this)}
        />
        <CardList robots={filterdRobots} />
      </div>
    );
  }
}

export default App;

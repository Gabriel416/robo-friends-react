import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "tachyons";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const filterdRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    if (!this.state.robots) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div className="tc">
          <h1>Robo Friends</h1>
          <SearchBox
            search={this.state.search}
            searchChange={this.onSearchChange.bind(this)}
          />
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

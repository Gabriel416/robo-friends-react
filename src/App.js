import React from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "tachyons";

import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    search: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { search, onSearchChange, robots, isPending } = this.props;
    const filterdRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(search.toLowerCase());
    });

    if (isPending) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div className="tc">
          <h1>Robo Friends</h1>
          <SearchBox search={search} searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

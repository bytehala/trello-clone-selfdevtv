import TrelloList from "./TrelloList";
import { connect } from "react-redux";

const App = (props) => {
  const { lists } = props;
  return (
    <div className="App">
      <h2>Hello start</h2>
      <div style={styles.listsContainer}>
        {lists.map((list) => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8,
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);

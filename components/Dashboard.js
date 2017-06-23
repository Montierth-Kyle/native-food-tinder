import React from 'react';
import { Modal, Button, Dropdown, Grid, Container, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDietPreference, setDietPreference } from '../actions/dietPreference'
import Game from './Game'
import { getRecipe } from '../actions/recipe'


class Dashboard extends React.Component {
  
  defaults = { viewHistory: false, gameStarted: false, value: "" }
  state = { ...this.defaults }

  componentDidMount() {
    let { dietPreference, dispatch } = this.props;
      dispatch(getDietPreference());
  }

  startGame = () => {
    this.setState({ gameStarted: true })
  }

  showHistory = () => {
    this.setState({ viewHistory: true })
  }

  displayDietPreferences = () => {
  return this.props.dietPreference.map(diet => {
    return {  id: diet.id, text: diet.name, value: diet.id }
  })
  }

  handleChange = (e, { value }) => { 
    this.setState({value});
    this.props.dispatch(setDietPreference(value))
  };


  render() {
    if (this.state.gameStarted === true && this.state.viewHistory === false) {
      return (
        <Game />
      );
    } else if (this.state.viewHistory === true && this.state.gameStarted === false) {
        return (
          <Container>
            History
          </Container>
      );
    } else {
        return (
          <Container>
            <Grid columns={2}>
              <Grid.Column>
                <Button inverted color='orange' onClick={this.startGame} >Start Game</Button>
                <Dropdown placeholder='Diet Preferences' value={this.state.value} fluid selection options={this.displayDietPreferences()} onChange={this.handleChange} />
              </Grid.Column>
              <Grid.Column>
                <Button inverted color='red' onClick={this.showHistory} >History</Button>
              </Grid.Column>
            </Grid>
          </Container>
      );
    }
  };
}                

const mapStateToProps = (state) => {
  const { dietPreference: { dietPreference , id } } = state;
  return { dietPreference, id }
}
export default connect(mapStateToProps)(Dashboard);
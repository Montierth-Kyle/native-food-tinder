import React from 'react';
import { StyleSheet } from 'react-native';
import { 
  Container,
  Picker, 
  Header, 
  Title, 
  Content, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text, 
  Drawer,
  Card,
  CardItem,
  CardSwiper, 
} from 'native-base';

import { Grid, Col } from 'react-native-easy-grid';
import { View } from 'react-native';
import Expo from 'expo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { getDietPreference, setDietPreference } from '../actions/dietPreference'
import Game from './Game'
import { getRecipe } from '../actions/recipe'
import SideBar from './SideBar';
const Item = Picker.Item;


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      results: {
        items: []
      }
    }
  }
  onValueChange (value: string) {
    this.setState({
      selected : value
    });
  }
  
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
            <SideBar/>
            History
          </Container>
      );
    } else {
        return (
          <Container>
            <Grid columns={2}>
              <Col>
                <Button inverted color='orange' onClick={this.startGame} >Start Game</Button>
                <Content>
                <Picker
                  supportedOrientations={['portrait','landscape']}
                  iosHeader="Select one"
                  headerBackButtonText="Go Back"
                  mode="dropdown"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Item label={this.displayDietPreferences()} />
                </Picker>
                </Content>
              </Col> 
              <Col>
                <Button inverted color='red' onClick={this.showHistory} >History</Button>
              </Col>
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
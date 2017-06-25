import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { 
  Container, 
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
import { getRecipes } from '../actions/recipe'
import SideBar from './SideBar';


class Game extends React.Component {

    componentDidMount() {
        let { recipes,  dietPreference, dispatch, id } = this.props;
        dispatch(getRecipes(id))
    }

    render() {
        return (
            <Container>
                <View>
                  <SideBar/>
                  <Card />
                </View>
            </Container>
        )
    }
};

const mapStateToProps = (state) => {
  return { dietPreference: state.dietPreference.dietPreference, id: state.dietPreference.id  }
}
export default connect(mapStateToProps)(Game);
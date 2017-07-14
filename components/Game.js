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
    state = { loading: true, sidebyside: false, recipes: [], matchedRecipes: [] }

    componentDidMount() {
       axios.get(`/api/recipes/${this.props.id}`)
            .then((res) => {
                const recipesData = res.data
                this.setState({ recipes: recipesData, loading: false })
            }
        )
    }

    checkRecipiesArray = () => {
        let recipes = this.state.recipes
        if (recipes.length === 0) {
            return this.setState({ sidebyside: true }) 
        } return
    }

    removeRecipe = () => {
        let updatedRecipes = this.state.recipes
        updatedRecipes.shift()
        this.setState({ recipes: updatedRecipes })
        this.checkRecipiesArray()
    }

    addRecipeToMatched = () => {
        let matched = this.state.matchedRecipes
        let recipes = this.state.recipes
        matched.push(recipes.splice(0, 1)[0]);
        this.setState({ matchedRecipes: matched })
        this.checkRecipiesArray()
    }

    render() {
        let { loading } = this.state;
        return (
            <div>
                { loading ?
                    <Segment>
                        <Dimmer active>
                            <Loader active inline='centered' indeterminate>Preparing Files</Loader>
                        </Dimmer>
                    </Segment>
                    :
                    <Container>
                        { this.state.recipes.length > 0 &&
                        <Grid centered columns={2}>
                            <Grid.Column>
                                <Card
                                    header={this.state.recipes[0].recipeName} 
                                /> 
                            </Grid.Column>
                            <Grid.Row>
                                <Grid.Column>
                                    <Button size='massive' color='green' icon onClick={this.addRecipeToMatched}>
                                        <Icon name='thumbs outline up' />
                                    </Button>
                                </Grid.Column>
                                <Grid.Column>
                                    <Button size='massive' color='red' icon onClick={this.removeRecipe}>
                                        <Icon name='thumbs outline down' />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        }   
                    </Container>
                }
            </div>
        )
    };
}


export default connect()(Game);
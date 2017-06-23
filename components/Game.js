import React from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'semantic-ui-react';
import { getRecipes } from '../actions/recipe'


class Game extends React.Component {

    componentDidMount() {
        let { recipes,  dietPreference, dispatch, id } = this.props;
        dispatch(getRecipes(id))
    }

    render() {
        return (
            <div>
                <Card />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
  return { dietPreference: state.dietPreference.dietPreference, id: state.dietPreference.id  }
}
export default connect(mapStateToProps)(Game);
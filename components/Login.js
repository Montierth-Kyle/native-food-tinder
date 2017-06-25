import React from 'react';
import { Form, Item, Label, Input, Button } from 'native-base';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { authenticate } from '../actions/user';


class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, history, dispatch } = this.props;
    let { email, password } = this.state;
    dispatch(authenticate(email, password, title, history))
  }

  handleChange = (type, val) => {
    this.setState({ [type]: val });
  }

  render() {
    let { email, password } = this.state;
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={ (val) => this.handleChange('email', val) }
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            onChangeText={ (val) => this.handleChange('password', val) }
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}

            />
        </Item>
        { (email.length > 0 && password.length > 0 ) ?
          <Button primary block onPress={this.handleSubmit}>
            <Text style={styles.loginButton}>Login</Text>
          </Button> : null
        }
        <Link to="/register">
          <Text style={styles.link}>New User?</Text>
        </Link>
      </Form>
    )
  }
}

const styles = {
  link: {
    textAlign: 'center',
    paddingTop: 40,
  },
  loginButton: {
    color: 'white'
  }
}

export default connect()(Login);
import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { TodoForm } from './TodoForm'
import { connect } from 'react-redux'
import { CREATE_TODO } from './reducers'

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      newTodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleChange(value) {
    this.setState({newTodo: value})
  }

  handlePress() {
    this.props.createTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoForm
          handlePress={this.handlePress}
          handleChange={this.handleChange}
          value={this.state.newTodo}
        />
        <View>
          {this.props.todos.map((todo, index) => (
            <View key={index}>
              <Text>{todo}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 60,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
})

const mapActionToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({ type: CREATE_TODO, payload: todo })
  }
})

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, mapActionToProps)(Todo)

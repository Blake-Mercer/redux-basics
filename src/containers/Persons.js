import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onPersonAdd: () => dispatch({ type: actionTypes.ADD_PERSON }),
    onPersonDelete: (id) =>
      dispatch({ type: actionTypes.DELETE_PERSON, personIds: id }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Persons);

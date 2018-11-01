import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleList = (props) => ({
    
});

renderList() {
    const textElements = this.state.peoples.map(people => {
       const {first} = people.name;
       return <Text key= {first}>{first}</Text>
   });
 
    return  textElements;
  } 

export default PeopleList;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleListItem = (props) => {

    const { people } = props;
    const {first } = people.name;
    
   
return (<View >
            <Text>{first}</Text> 
        </View> );

}

const styles = StyleSheet.create({



});


export default PeopleListItem;
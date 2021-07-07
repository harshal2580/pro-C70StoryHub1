import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class ReadStoryScreen extends React.Component {
  render() {
    return(
      <View style={styles.textContainer}>
       <Text style={{fontSize:30}}>Read a story</Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
})
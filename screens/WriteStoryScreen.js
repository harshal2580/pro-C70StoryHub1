import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

  render() {
    return(
      <View style={styles.container}>
       <Header 
        backgroundColor = {'pink'}
        centerComponent = {{
        text : 'Story Hub',
        style : { color: 'black', fontSize: 30}
        }}
       />
       
       <TextInput 
        style={styles.title}     
        onChangeText= {(text)=>{
        this.setState({
         title: text
        })
        }} 
        placeholder="Story Title"
        placeholderTextColor="black"
        value={this.state.title}
        />

        <TextInput
        style={styles.author}
        onChangeText= {(text)=>{
        this.setState({
         author: text
        })
        }}
        placeholder="Author"
        placeholderTextColor="black"
        value={this.state.author}
        />

        <TextInput 
        style={styles.storyText}
        onChangeText= {(text)=>{
        this.setState({
         storyText: text
        })
        }}
        placeholder="Write your story"
        placeholderTextColor="black"
        value={this.state.storyText}
        />
                
        <TouchableOpacity
         style={styles.submitButton}>
         <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
      padding: 6,
  },
  storyText: {
      height: 400,
      borderWidth: 2,
      margin: 9, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,
      color:'black',
  },
  buttonText: {
      color:'black',
      textAlign: 'center',
      fontWeight: 'bold',
      
  }
})
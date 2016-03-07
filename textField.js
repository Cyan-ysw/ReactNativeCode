'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

var Search = React.createClass({
  render: function(){
      return(
        <View style={[styles.flex,styles.flexDirection]}>
            <View style={styles.flex}>
              <TextInput style={styles.input} returnKeyType="search"/>
            </View>
            <View style={styles.btn}>
              <Text style={styles.search}>搜索</Text>
            </View>
        </View>
      );
  },

});

var App = React.createClass({
    render:function(){
        return(
          <View style={[styles.flex,styles.topStatus]}>
              <Search></Search>
          </View>
        );

    },
});


const styles = StyleSheet.create({
  flex:{
    flex:1,
  },

  flexDirection:{
    flexDirection:'row',
  },

  topStatus:{
      marginTop:25,
  },

  input: {
      height:45,
      borderWidth:1,
      marginLeft:5,
      paddingLeft:5,
      borderColor:'#ccc',
      borderRadius:5,
  },

  btn:{
    width:55,
    height:45,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23bfff',
    justifyContent:'center',
    alignItems:'center',
  },

  search: {
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  },

});

AppRegistry.registerComponent('Day01',() => App);

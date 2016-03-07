/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';


  /**
   * 封装单个组件
   */

  var List = React.createClass({
      render: function(){
          return (
              <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
              </View>
          );
      },

  });



const styles = StyleSheet.create({
   flex: {
      flex:1,
   },
   list_item:{
      height:40,
      marginLeft:10,
      marginRight:10,
      borderBottomWidth:1,
      borderBottomColor:'#ddd',
      justifyContent:'center',
   },

   list_item_font:{
      fontSize:16,
   },


});

  module.exports = List;

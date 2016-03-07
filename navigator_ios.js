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
  NavigatorIOS,
  ScrollView,
} from 'react-native';

var List = React.createClass({
  render: function(){
    return(
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo}>✨豪华邮轮济州岛三日游</Text>
        <Text style={styles.list_item} onPress={this.goTo}>✨豪华邮轮台湾三日游</Text>
        <Text style={styles.list_item} onPress={this.goTo}>✨豪华邮轮泰国三日游</Text>
      </ScrollView>
    );
  },

  goTo:function(){
    this.props.navigator.push({
      component:Detail,
      title:'邮轮详情',
      tintColor:'#CD1D1C',
      titleTextColor:'#CD1D1C',
      rightButtonTitle:'购物车',
      navigationBarHidden:false,
      onRightButtonPress:function(){
        alert('进入我的购物车');
      },
    });
  },

});

var Detail = React.createClass({
  render:function(){
    return(
      <ScrollView>
        <Text>详情界面</Text>
        <Text>尽管内容少,但这个就是详情界面</Text>
      </ScrollView>
    );
  },

});

var NV = React.createClass({
  render: function(){
    return(
      <NavigatorIOS
        style={styles.flex}
        initialRoute={{
          component:List,
          title:'游轮',
          passProps:{},
        }}
      />

    );
  },

});


const styles = StyleSheet.create({
   flex:{
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

});



AppRegistry.registerComponent('Day01', () => NV);

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
  View
} from 'react-native';

 var Header = require('./header');

var List = React.createClass({
    render: function(){
        return (
            <View style={styles.list_item}>
              <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        );
    },

});


var ImportantNews = React.createClass({
  show: function(title){
      alert(title);
  },

  render: function(){
    var news = [];
    for (var i in this.props.news) {
        var text = (
            <Text
              onPress={this.show.bind(this,this.props.news[i])}
              numberOfLines={2}
              style={styles.new_item}>
              {this.props.news[i]}
            </Text>
        );
        news.push(text);
    }
    return(
      <View >
        <Text style={styles.new_title}>今日要闻</Text>
        {news}
      </View>
    );
  },
});


var app = React.createClass({
    render: function(){
      var news = [
              '1、刘慈欣《三体》获“雨果奖”为中国作家首次',
              '2、京津冀协同发展定位明确：北京无经济中心表述',
              '3、好奇宝宝第一次淋雨，父亲用镜头记录了下来',
              '4、京津冀协同发展定位明确：:北京无经济中心表述+好奇宝宝第一次淋雨，父亲用镜头记录了下来'
           ];
      return (
          <View style={styles.flex}>
            <Header></Header>
            <List title='宇航员在太空宣布“三体”'></List>
            <List title='Hello world ReactNative'></List>
            <List title='Hello world android'></List>
            <List title='Hello world Swift'></List>
            <ImportantNews news={news}/>
          </View>
      );
    },
});


const styles = StyleSheet.create({
  flex: {
    flex: 1,
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

  new_title: {
      fontSize:20,
      fontWeight:'bold',
      color:'#CD1D1C',
      marginLeft:10,
      marginTop:15,
  },

  new_item: {
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20,
  },

});

AppRegistry.registerComponent('Day01', () => app);

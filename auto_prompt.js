'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

var onePt = 1 / React.PixulRatio.get();

var Search = React.createClass({
  getInitialState:function(){
      return {
        show:false
      };
  },

  getValue:function(text){
    var value = text;
    this.setState({
      show:true,
      value:value
    });
  },

  hide:function(val){
    this.setState({
      show:false,
      value:val
    });
  },


  render: function(){
      return(
          <View style={styles.flex}>
            <View style={[styles.flexDirection,styles.inputHeight]}>
                <View style={styles.flex}>
                  <TextInput style={styles.input}
                             returnKeyType="search"
                             placeholder="请输入关键词"
                             onEndEditing={this.hide.bind(this,this.state.value)}
                             value={this.state.value}
                             onChangeText={this.getValue}/>
                </View>
                <View style={styles.btn}>
                  <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
                </View>
            </View>

            {this.state.show ?
              <View style={styles.result}>
                      <Text onPress={this.hide.bind(this,this.state.value + '庄')}
                            style={styles.item}
                            numberOfLines={1}>{this.state.value}庄</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '园街')}
                              style={styles.item}
                              numberOfLines={1}>{this.state.value}园街</Text>

                        <Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')}
                              style={styles.item}
                              numberOfLines={1}>80{this.state.value}综合商店</Text>

                        <Text onPress={this.hide.bind(this, this.state.value + '桃')}
                              style={styles.item}
                              numberOfLines={1}>{this.state.value}桃</Text>

                        <Text onPress={this.hide.bind(this, '杨林' + this.state.value + '园')}
                              style={styles.item}
                              numberOfLines={1}>杨林{this.state.value}</Text>
              </View>
              :null


            }


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

  inputHeight: {
    height:45,
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

  result; {
    marginTop:onePt,
    marginLeft:5,
    marginRight:5,
    height:200,
    borderColor:'#ccc',
    borderTopWidth:onePt,
  },

  item: {
      fontSize:16,
      padding:5,
      paddingTop:10,
      paddingBottom:10,
      borderWidth:onePt,
      borderColor:'#ddd',
      borderTopWidth:0,
  },


});

AppRegistry.registerComponent('Day01',() => App);

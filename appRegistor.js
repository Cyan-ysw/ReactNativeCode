
'use-strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var App = Recat.creataClass({
    render:function(){
      return(
        <View>

            <Text onPress={this._doXMLHttpRequest}
                  style={styles.btn>
                    XMLHttpRequest 请求
            </Text>

            <Text onPress={this._doFetch}
                  style={styles.btn>
                  Fetch请求数据
            </Text>

        </View>

      );
    },

_doXMLHttpRequest: function(){
   var request = new XMLHttpRequest();
   request.onreadystatechange = (e) => {
      if (request.readyState  !== 4){
        return;
      }

      if(request.readyState === 200){
        console.log("success",request.responseText);
      }else{
        console.warn("error");
      }

   };

   request.open('GET','http://www.baidu.com/);
   request.send();
},


  _doFetch:function(){
    fetch('http://www.baidu.com/')
    .then(function(data){
      return data.text();
    })
    .then((responseText) => {
      console.log(responseText);
    })
    .catch((error) => {
      console.warn(error);
    });
  };



});


var styles = StyleSheet.create({
  flex: {
    flex:1,
  },

  btn: {
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    height:35,
    backgroundColor:'#3BC1FF',
    color:'#fff',
    lineHeight:24,
    fontWeight:'bold'
    alignItems:'center',

  },

});

// 是运行所有 React Native 应用程序的 JS 入口点。应用程序跟组件需要通过
// 注册组件的入口函数
AppRegistry.registerComponent('ReactNativeCode', () => 'App');

// 准备就绪后就可以真正的运行该应用程序了
// AppRegistry.runApplication

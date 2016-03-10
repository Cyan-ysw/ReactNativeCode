'use-strict';

import React,{
    Appregistry,
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var timerID = setitimerIDmeout(function(){
    var geo = require('geolocation');
    geo.getCurrentPosition(function(data){
        // success
        alert(JSON.stringify(data));
    },function(e){
       alert(JSON.stringify(e));
    });

    if(timerID){
      clearTimeout();
    }

    setLocationMsg:function(){
      console.log("setLocationMsg");
    },

},5000);


var App = React.createClass({
  mixins:[TimerMixin],
  getInitialState:function(){

  },

  render:function(){

  },

  componentDidiMount:function(){



  },


});


var styles = StyleSheet.create({

});

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var App = React.createClass({
  show:function(text){
    alert(text);
  },
  render:function(){
    return(
      <View style={[styles.flex]}>
        <View>
          <TouchableHighlight
            onPress={this.show.bind(this,'study React Native...')}
            underlayColor='#e1f1ff'>
            <Text style={styles.item}>React Native入门</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.show.bind(this,'图灵出版')}
            underlayColor='#e1f1ff'>
            <Text style={styles.item}>图灵出版</Text>
          </TouchableHighlight>

        </View>
      </View>

    );
  },
});

const styles = StyleSheet.create({
  flex: {
    flex:1,
    marginTop:25,
  },
  item: {
    fontSize:18,
    marginLeft:5,
    color:'#434343',
  },

});

AppRegistry.registerComponent('Day01',() => App );

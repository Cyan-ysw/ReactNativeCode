'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

var imgList = [
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://vczero.github.io/me/img/xiaoxue.png'
];

var CustomImageView = React.createClass({
  getInitialState: function(){
    var imgs = this.props.imgs;
    return {
      imgs:imgs,
      count:0,
    };
  },


  goNext: function(){
    var count = this.state.count;
    count++;
    if (count < imgList.length) {
        this.setState({
            count:count
      });
    }
  },

  goPreview: function(){
    var count = this.state.count;
    count --;
    if (count >= 0) {
        this.setState({
          count:count,
        });
    }
  },

  render:function(){
      return(
        <View style={[styles.flex]}>
          <View style={styles.image}>
            <Image style={styles.img}
                   source={{url:this.state.imgs[this.state.count]}}
                   resizeMode="contain"/>
          </View>

          <View style={styles.btns}>
            <TouchableOpacity onPress={this.goPreview}>
              <View style={styles.btn}>
                <Text>下一张</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.goNext}>
              <View style={styles.btn}>
                <Text>下一张</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      );
    },
});

var App = React.createClass({
    render:function(){
        return(
          <View style={[styles.flex]}>
            <CustomImageView imgs={imgList}></CustomImageView>
          </View>
        );
    },
});


const styles = StyleSheet.create({
  flex: {
     flex :1,
     alignItems:'center',
  },
  image: {
    borderWidth:1,
    width:300,
    height:200,
    borderRadius:5,
    borderColor:'#ccc',
  },

  img: {
    height:200,
    width:300,
  },

  btns: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
  },

  btn: {
    width:60,
    height:30,
    borderColor:'#0089ff',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:20,
  },

});

AppRegistry.registerComponent('Day01',() => App);

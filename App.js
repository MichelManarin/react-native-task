import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from './components/Input'

const styleBox = ['#7394e7','#84a1ea', '#95aeec', '#b8c9f2'];

class App extends Component {

  constructor(props) {
    
    super(props);
 
    this.state = {
      tarefas: [],
    };
    
    this.handler = this.handler.bind(this)
    this.closeTask = this.closeTask.bind(this)

  }

  closeTask(idx){
    update = this.state.tarefas;

    if (!update)
      return true
      
    update.splice(idx['key'], 1);
    this.setState({tarefas: update});
  }

  handler(text){

    let styleAdd = styleBox[0];
    let list = this.state.tarefas.slice();
    let length = list.length || 0;

    if (length > 0){
      let last = list.splice(length-1, 1);

      if (last){
        let idx_find = styleBox.indexOf(last[0]['style']) || 0;
        let next = idx_find < 3 ? idx_find+1 : 0;  
        styleAdd = styleBox[next];
      }
    }

    this.setState({
      tarefas: [...this.state.tarefas, { descricao:text, style:styleAdd}]
    });

  }
 

  render() {
    return (
      
      <View style={styles.pageStyle}>
      
        <View style={styles.topBar}>

          <LinearGradient colors={['#7293e7', '#b9caf2']} style={styles.linearGradient}>
            <View style={styles.titlePage}>
              <Text style={styles.h1}>Tarefas</Text>
            </View>
          </LinearGradient>

           <Input action = {this.handler}/>

        </View>  

        
        <ScrollView style={styles.containerContent}>
            {this.state.tarefas.map((prop, key) => {
              return (
                <View key={key} style={[styles.box,{backgroundColor: prop.style}]}>
                  <Text style={styles.textBox}>{prop.descricao}</Text>
                  <TouchableOpacity activeOpacity = { .5 } onPress={ () => this.closeTask({key}) }>
                    <Image source={require('./images/delete2.png')} style={styles.imgBox}/>
                  </TouchableOpacity>
                </View>

              );
            })}      

        </ScrollView>
      
        
      </View>
    );
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageStyle: {
    backgroundColor:"#eeeeee", 
    flex:1,
  },
  topBar: {
    height: 110,
  },
  titlePage: {
    flexDirection:"row",
    alignItems:"center",
    marginTop:25,
    width:"100%",
  },
  linearGradient: {
    height:"100%",
    paddingHorizontal:30,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingHorizontal:20,
  },
  inputTask: {
    fontSize:22,
    color:"#FFF",
    fontWeight:"bold"
  },
  imgInput: {
    height:20,
    width:20, 
  },
  h1: {
    fontSize:22,
     color:"#FFF",
    fontWeight:"bold"
  },
  containerInput: {
    backgroundColor:"#FFF",
    paddingVertical:8,
    paddingHorizontal:20,
    marginHorizontal:20,
    borderRadius:15,
    marginTop:25,
    flexDirection:"row",
    alignItems:"center",
    shadowColor: '#fff',
    shadowOffset: { width:0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    top: -60
  },
  containerContent: {
    fontSize:22,
    color:"#FFF",
    marginTop: 40,
    paddingBottom: 20,
    fontWeight:"bold",
    paddingVertical:8,
    paddingHorizontal:15,
    marginHorizontal:15,
  },
  inputTask: {
    fontWeight:"bold",
    fontSize:18,
    width:"95%",
  },
  box:{
    backgroundColor:"#7293e7",
    height: 50,
    borderRadius:5,
    justifyContent: 'center',
    marginVertical: 5,
    flexDirection:"row",
    alignItems:"center",
    color: "#eee",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textBox: {
    fontSize:14,
    color:"#fff",
    fontWeight:"normal",
    paddingHorizontal: 15,
    width:"85%",
  },
  imgBox:{
    height:25,
    width:25,
  },
});

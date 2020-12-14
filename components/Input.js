import React, {Component} from 'react'
import {Image, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert} from 'react-native'

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: ''
          };

        this.addItem = this.addItem.bind(this);
    }
    
    addItem(e) {
        
        this.props.action(this.state.valor);
        this.setState({valor: ""});
    }
     
    render(){
        return(
            
            <View style={styles.containerInput}>
           
                <TextInput 
                    placeholder="Adicione..." 
                    value= {this.state.valor} 
                    placeholderTextColor="#7193e7"
                    width="90%"
                    editable
                    type="text"
                    onChangeText={(text) => { this.setState({ valor: text})}}
                    style={styles.inputTask}/>
                
                <TouchableOpacity disabled={!this.state.valor} activeOpacity = { .5 } onPress={ () => this.addItem() }>
                    
                    <Image 
                        type="button"
                        source={require('../images/3.png')} style={styles.imgInput}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  inputTask: {
    fontSize:22,
    color:"#000000",
    fontWeight:"bold",
    flex: 1
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
  imgInput: {
    height:20,
    width:20, 
  },
})
export default Input;
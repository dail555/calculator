/*
Wichaivit Pattaramongkolchai
6030300946
create 7/8/2562
update 11/8/2562
*/
import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      operator:'',
      input:'',
      num1:0,
      num2:0,
      output:0,
      test:''
    }
  }
  OnCalculator(parameter){
    var temp,cal=0
    switch(parameter){
      case 'AC':
        this.setState({operator:''})
        this.setState({num2:0})
        this.setState({num1:0})
        this.setState({input:''})
        this.setState({test:''})
        this.setState({output:0})
        break
      case '.':
        if(String(this.state.input).length!=0){
          if(String(this.state.input).indexOf('.')== -1){
            temp = this.state.input+'.'
            this.setState({input:temp})
            this.setState({output:temp})
          }
        }
        else{
          temp = '0'+'.'
          this.setState({input:temp})
          this.setState({output:temp})
        }
        break
      case '0':
        if(String(this.state.input).length>0){
          temp = this.state.input+'0'
          if(String(this.state.input).indexOf('.')== -1){
            temp = this.state.input+'0'
            this.setState({output:Number(temp)})
          }else{
            this.setState({output:String(temp)})
          }
          this.setState({input:temp})
        }
        else if(this.state.operator == '' || this.state.operator == '+' || this.state.operator == '-' || this.state.operator == '*' || this.state.operator == '/'){
          temp = this.state.input+'0'
          this.setState({input:temp})
          this.setState({output:Number(temp)})
        }
        break
      
      case '1':
        temp = this.state.input+'1'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break

      case '2':
        temp = this.state.input+'2'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break

      case '3':
        temp = this.state.input+'3'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break

      case '4':
        temp = this.state.input+'4'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break
      
      case '5':
        temp = this.state.input+'5'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break
      
      case '6':
        temp = this.state.input+'6'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break
      
      case '7':
        temp = this.state.input+'7'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break

      case '8':
        temp = this.state.input+'8'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break

      case '9':
        temp = this.state.input+'9'
        this.setState({input:temp})
        this.setState({output:Number(temp)})
        break
      case '+':
        this.setState({input:''})
        switch(this.state.operator){
          case '':
            this.setState({num1:this.state.output})
            break
          case '+':
            cal = this.state.num1 + this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '-':
            cal = this.state.num1 - this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '*':
            cal = this.state.num1 * this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '/':
            cal = this.state.num1 / this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
        }
        this.setState({test:this.state.num1})
        this.setState({operator:'+'})
        break
      case '-':
        this.setState({input:''})
        switch(this.state.operator){
          case '':
            this.setState({num1:this.state.output})
            break
          case '+':
            cal = this.state.num1 + this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '-':
            cal = this.state.num1 - this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '*':
            cal = this.state.num1 * this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '/':
            cal = this.state.num1 / this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
        }
        this.setState({test:this.state.num1})
        this.setState({operator:'-'})
        break
      case '*':
        this.setState({input:''})
        switch(this.state.operator){
          case '':
            this.setState({num1:this.state.output})
            break
          case '+':
            cal = this.state.num1 + this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '-':
            cal = this.state.num1 - this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '*':
            cal = this.state.num1 * this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '/':
            cal = this.state.num1 / this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
        }
        this.setState({test:this.state.num1})
        this.setState({operator:'*'})
        break
      case '/':
        this.setState({input:''})
        switch(this.state.operator){
          case '':
            this.setState({num1:this.state.output})
            break
          case '+':
            cal = this.state.num1 + this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '-':
            cal = this.state.num1 - this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '*':
            cal = this.state.num1 * this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '/':
            cal = this.state.num1 / this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
        }
        this.setState({test:this.state.num1})
        this.setState({operator:'/'})
        break
      case '=':
        this.setState({input:''})
        switch(this.state.operator){
          case '':
            this.setState({num1:this.state.output})
            break
          case '+':
            cal = this.state.num1 + this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '-':
            cal = this.state.num1 - this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '*':
            cal = this.state.num1 * this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
          case '/':
            cal = this.state.num1 / this.state.output
            this.setState({output:Number(cal)})
            this.setState({num1:Number(cal)})
            break
        }
        this.setState({test:this.state.num1})
        this.setState({operator:''})
        break
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor: 'black'}} />
        <View style={{flex:1, backgroundColor: 'black',alignItems:'flex-end',justifyContent:'flex-end'}}>
          <Text style={styles.font3}>{this.state.output}</Text>
        </View>
        <View style={styles.view0}>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1} onPress={()=>this.OnCalculator('AC')}><Text style={styles.font2} >AC</Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1}><Text style={styles.font2}>+/-</Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1}><Text style={styles.font2}> % </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_2} onPress={()=>this.OnCalculator('/')}><Text style={styles.font1} >÷</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.view0}>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('7')}><Text style={styles.font1} > 7 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('8')}><Text style={styles.font1} > 8 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('9')}><Text style={styles.font1} > 9 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_2} onPress={()=>this.OnCalculator('*')}><Text style={styles.font1} >×</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.view0}>
            <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('4')}><Text style={styles.font1} > 4 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('5')}><Text style={styles.font1} > 5 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('6')}><Text style={styles.font1} > 6 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={{backgroundColor: '#FF9933',
                                      alignItems:'center',
                                      justifyContent: 'center',
                                      borderRadius:100,
                                      paddingHorizontal: 30,
                                      paddingVertical: 5}} onPress={()=>this.OnCalculator('-')}>
              <Text style={styles.font1}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view0}>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('1')}><Text style={styles.font1} > 1 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('2')}><Text style={styles.font1} > 2 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('3')}><Text style={styles.font1} > 3 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_2} onPress={()=>this.OnCalculator('+')}><Text style={styles.font1} >+</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.view0} >
          <View style={styles.view2}>
            <TouchableOpacity style={styles.btn2} onPress={()=>this.OnCalculator('0')}><Text style={styles.font1} > 0 </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_1} onPress={()=>this.OnCalculator('.')}><Text style={styles.font1}>  .  </Text></TouchableOpacity>
          </View>
          <View style={styles.view1}>
            <TouchableOpacity style={styles.btn1_2} onPress={()=>this.OnCalculator('=')}><Text style={styles.font1} >=</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btn1:{
      backgroundColor: '#C0C0C0',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:100,
      padding: 5
      
  },
  btn1_1:{
      backgroundColor: '#606060',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:100,
      paddingHorizontal: 10,
      paddingVertical: 5
      
  },
  btn1_2:{
      backgroundColor: '#FF9933',
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:100,
      paddingHorizontal: 23,
      paddingVertical: 5
      
  },
  btn2:{
      backgroundColor: '#606060',
      borderRadius:100,
      paddingLeft: 10,
      paddingRight: 100,
      paddingVertical: 5
      
  },
  view1 :{
    flex:1,flexDirection: 'row',
    backgroundColor:'black',
    alignItems:'center',
    justifyContent: 'center'
  },
  view2 :{
    flex:2,flexDirection: 'row',
    backgroundColor:'black',
    alignItems:'center',
    justifyContent: 'center'
  },
  view0 :{
    flex:1,
    flexDirection: 'row',
    backgroundColor:'black'
  },
  font1 :{
    fontSize:50,
    color:'white'
  },
  font2 :{
    fontSize:50,
    color:'black'
  },
  font3 :{
    fontSize:70,
    color:'white',
    paddingRight: 20,
  },
  /*img : {
    width : 150,
    height : 150,
    borderRadius:100
  }*/
});

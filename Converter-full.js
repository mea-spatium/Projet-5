import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{uri: 'https://fsb.zobj.net/crop.php?r=p4xcK9Z_voojWRdmzR2WCESSy-iSwYJBYwHsb7glgB7wbgkmz936tBDRoPA_nc9ZcHIoDptl6j32zrX3XmQydGrN3pSp90rz6oI1j8ArhOkP1JkcqKCuPBZ0fEIO3jIq-niVno9-Hi28bvHc3H209zckK0XieXcuApcU-3qm0IaUOAMTwBLPiDR8QvM'}}
        style={{resizeMode: 'cover'}}>
      <View style={{alignItems: 'center', marginTop: 80, height: 100+"%"}}>
        <Text style={{ fontSize: 25, color: "#a5c441"}}>Accueil</Text>
        <TouchableOpacity
          title="DZD to EUR"
          style = {styles.homebtn}
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Eur' })
              ],
            }))
          }}
        >
        <Text style={{ fontSize: 25}}>DZD to EUR</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.homebtn}
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Dzd' })
              ],
            }))
          }}
        >
        <Text style={{ fontSize: 25}}>EUR to DZD</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }  
}

class EurScreen extends React.Component {
  state = {
    nombre1: '',
    nombre2: '0.0046',
    sum:0
  }

  calculateSum = () => {
  const { nombre1, nombre2 } = this.state;

  
  this.setState({
    sum: Number(nombre1) * Number(nombre2)
  });
  }
  render() {
    return (
      <ImageBackground
        source={{uri: 'https://fsb.zobj.net/crop.php?r=p4xcK9Z_voojWRdmzR2WCESSy-iSwYJBYwHsb7glgB7wbgkmz936tBDRoPA_nc9ZcHIoDptl6j32zrX3XmQydGrN3pSp90rz6oI1j8ArhOkP1JkcqKCuPBZ0fEIO3jIq-niVno9-Hi28bvHc3H209zckK0XieXcuApcU-3qm0IaUOAMTwBLPiDR8QvM'}}
        style={{resizeMode: 'cover'}}>
      <View style = {{height: 100+"%"}}>
        <View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
            }}>
            <Image source={{uri: 'https://image.noelshack.com/fichiers/2019/16/7/1555875570-60793.png'}} style={{width: 40, height: 40}} />
            </TouchableOpacity>
            </View>
        <View style = {styles.container}>
            <Text style = {styles.title}>DZD to EUR</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Valeur"
               placeholderTextColor = "#a5c441"
               autoCapitalize = "none"
               onChangeText = {(nombre1) => this.setState({nombre1})}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {this.calculateSum}
               >
               <Text style = {styles.submitButtonText}> Submit </Text>
               <Text style = {styles.result}>{`${this.state.sum} EUR`}</Text>
            </TouchableOpacity>
         </View>
      </View>
      </ImageBackground>
    );
  }  
}

class DzdScreen extends React.Component {
  state = {
    nombre1: '',
    nombre2: '215.00',
    sum:0
  }

  calculateSum = () => {
  const { nombre1, nombre2 } = this.state;

  
  this.setState({
    sum: Number(nombre1) * Number(nombre2)
  });
  }
  render() {
    return (
      <ImageBackground
        source={{uri: 'https://fsb.zobj.net/crop.php?r=p4xcK9Z_voojWRdmzR2WCESSy-iSwYJBYwHsb7glgB7wbgkmz936tBDRoPA_nc9ZcHIoDptl6j32zrX3XmQydGrN3pSp90rz6oI1j8ArhOkP1JkcqKCuPBZ0fEIO3jIq-niVno9-Hi28bvHc3H209zckK0XieXcuApcU-3qm0IaUOAMTwBLPiDR8QvM'}}
        style={{resizeMode: 'cover'}}>
      <View style = {{height: 100+"%"}}>
            <View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
            }}>
            <Image source={{uri: 'https://image.noelshack.com/fichiers/2019/16/7/1555875570-60793.png'}} style={{width: 40, height: 40}} />
            </TouchableOpacity>
            </View>
        <View style = {styles.container}>
            <Text style = {styles.title}>EUR to DZD</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Valeur"
               placeholderTextColor = "#a5c441"
               autoCapitalize = "none"
               onChangeText = {(nombre1) => this.setState({nombre1})}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {this.calculateSum}
               >
               <Text style = {styles.submitButtonText}> Submit </Text>
               <Text style = {styles.result}>{`${this.state.sum} DZD`}</Text>
            </TouchableOpacity>
            </View>
      </View>
      </ImageBackground>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
     marginTop: 80,
  },
  homebtn: {
    width: 170,
    height: 40,
    alignItems: 'center', 
    backgroundColor: '#a5c441',
    borderRadius: 10,
    marginTop: 20
  },
  button: {
    backgroundColor: 'transparent',
     height: 40,
     width: 60,
     marginTop: 23,
     position: 'absolute',
     left: 0
  },
  title: {
     textAlign: 'center',
     fontFamily: 'sans-serif-medium',
     fontSize: 30,
     color: "#a5c441"
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#a5c441',
     borderWidth: 1,
     borderRadius: 10,
     color: 'white'
  },
  submitButton: {
     backgroundColor: '#a5c441',
     padding: 10,
     margin: 15,
     height: 40,
     textAlign: 'center',
     borderRadius: 10
  },
  submitButtonText:{
     color: 'white',
     textAlign: 'center'
  },
  result:{
   backgroundColor: '#a5c441',
   padding: 10,
   margin: 25,
   height: 40,
   color: 'white',
   textAlign: 'center',
   borderRadius: 10,
  },
  backgroundImage: {
    width: 720,
    height: 1280,
    resizeMode: 'cover'
}
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Eur: {
    screen: EurScreen,
    navigationOptions: {
      header: null,
    }
  },
  Dzd: {
    screen: DzdScreen,
    navigationOptions: {
      header: null,
    }
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
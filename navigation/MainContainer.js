import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import HomeScreen from './Screens/HomeScreen';
import BookScreen from './Screens/BookScreen';
import PlayScreen from './Screens/PlayScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';

const {width, height} = Dimensions.get('window');
//for bottom tab navigation
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function MainContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for SplashScreen
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the timeout as needed
  }, []);

  if (isLoading) {
    return <SplashScreenWithImage />;
  }
  return<LoginScreen/>;
  return (
    <NavigationContainer>
     
      <Stack.Navigator
        screenOptions={{
          header: props => <CustomHeader {...props} />,
          headerStyle: {
            backgroundColor: '#FEFEFE', // Customize your header background color
          },
        }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//splash screen

function SplashScreenWithImage() {
  return (
    // <View style={styles.container}>
    //   <Image
    //     source={require('../assets/pictures/screen.png')} // Adjust the path to your splash image
    //     style={styles.image}
    //     resizeMode="cover"
    //   />
    // </View>
    <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'#DDDEE4'}}>
    <Image source={require('../assets/pictures/logo.png')} style={{justifyContent:'center',left:5,right:5,top:-10,height:70,width:300}} />
    <Image source={require('../assets/pictures/kickboy1.png')} style={{width:350,height:300,top:20,right:10,justifyContent:'center'}}/>
    <Text style={{top:30,justifyContent:'center',color:'black'}}> Book Your Futsal Fun Now!</Text>
  </SafeAreaView>
  );
}

// header function
function CustomHeader({navigation}) {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/pictures/logo.png')} // Add your logo image
        style={styles.logo}
      />

      <View style={styles.mid}>
        <Image
          source={require('../assets/pictures/marker.png')} // marker icon image
          style={styles.marker}
        />
        <Text style={{fontSize: 12, left: 2,color:'black'}}>Kupondole,Lalitpur..</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/pictures/angledown.png')} // angle down icon image
            style={styles.arrowdown}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Image
          source={require('../assets/pictures/bell.png')} // Add your notification icon image
          style={styles.notificationIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

//function bottom
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#FEFEFE',
          bottom: 1,
          height: 65,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/pictures/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  bottom: 5,
                  tintColor: focused ? '#08C208' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#08C208' : '#748c94',
                  fontSize: 16,
                  bottom: 5,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/pictures/field.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  bottom: 5,
                  tintColor: focused ? '#08C208' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#08C208' : '#748c94',
                  fontSize: 16,
                  bottom: 5,
                }}>
                Book
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={PlayScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/pictures/users.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  bottom: 5,
                  tintColor: focused ? '#08C208' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#08C208' : '#748c94',
                  fontSize: 16,
                  bottom: 5,
                }}>
                Play
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../assets/pictures/circle-user.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  bottom: 5,
                  tintColor: focused ? '#08C208' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#08C208' : '#748c94',
                  fontSize: 16,
                  bottom: 5,
                }}>
                User
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your desired background color
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // Customize your header bottom border color
    backgroundColor:'#FEFEFE',
  },
  logo: {
    width: 72, // Adjust the width of your logo
    height: 16, // Adjust the height of your logo
  },
  notificationIcon: {
    width: 20, // Adjust the width of your notification icon
    height: 20, // Adjust the height of your notification icon
  },
  mid: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    left: 30,
  },
  marker: {
    flexDirection: 'row',
    width: 14,
    height: 14,
  },
  arrowdown: {
    width: 14,
    height: 14,
  },
});

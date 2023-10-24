import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import{Ionicons} from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator(){
    return ( 
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor:'#351401'
        },
        headerTintColor: 'white',
       sceneContainerStyle: {
          backgroundColor:'#3f2f25'
        },
        drawerContentStyle:{backgroundColor:'#351401'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#351401',
        drawerActiveBackgroundColor:'#e4baa1'
      }}
      >
        <Drawer.Screen name = "Categories"
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => 
          <Ionicons 
          color={color} 
          size={size} 
          name='list'/>,
        }}
        />
        <Drawer.Screen name = "Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({color, size}) => 
          <Ionicons 
          color={color} 
          size={size} 
          name='star'/>,
        }}
        />
      </Drawer.Navigator>
      );
  }
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{

        headerStyle: {
          backgroundColor:'#351401'
        },
        headerTintColor: 'white',
       contentStyle: {
          backgroundColor:'#3f2f25'
        }
      }
        
      }
      >
        <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator} 
        options={{
           headerShown: false,

        }}
        />
        <Stack.Screen 
        name="MealsOverview" 
        component={MealsOverviewScreen} 
        />
        <Stack.Screen name="MealDetail" 
        component={MealDetailScreen}
        options={{
          title: 'About the  Meal',
        }}
        />
      </Stack.Navigator>
      

    </NavigationContainer>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


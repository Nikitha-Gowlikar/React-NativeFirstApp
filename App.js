import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';
import Home from './Components/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

const Stack = createStackNavigator();
export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
          <Stack.Screen name="List" component={CountryList} options={{ title: 'List Of books' }} />
          <Stack.Screen name="Details" component={CountryDetails} options={{title: "Details"}} />
        </Stack.Navigator>
      }
    </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

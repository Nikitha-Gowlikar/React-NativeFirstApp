import {React, useEffect} from 'react';
import { StyleSheet,Button, Text, View,FlatList } from 'react-native'
import { useQuery, gql } from '@apollo/client';

const Traveller_Query = gql`
query continentQ{
    countries{
      name
      code
      currencies
      capital
      native
    }
  }
`;

const CountryDetails = ({navigation}) => {
    const { data, loading } = useQuery(Traveller_Query)

    useEffect(() => {
        console.log('GraphQL ===', data)
    })
    return (
        <View>
            <FlatList
                data={data?.countries}
                renderItem={({ item}) =>
                    <View style={{ flex:1 ,backgroundColor: 'gray', marginBottom: 10 }}>
                        <View styles={styles.screen}><Text style={{ color: 'red' }}>NAME:{item.name}</Text></View>
                        <View><Text style={{ color: 'red' }}>CODE:{item.code}</Text></View>
                        <View><Text style={{ color: 'red' }}>CURRENCIES:{item.currencies}</Text></View>
                        <View><Text style={{ color: 'red' }}>CAPITAL:{item.capital}</Text></View>
                        <View><Text style={{ color: 'red' }}>NATIVE:{item.native}</Text></View>
                        <View><Button title="back" onPress={() => navigation.navigate("List")} /></View>
                    </View>
                }
            />
            
        </View>
    );
}
const styles = StyleSheet.create({
  screen : {
     flex:1,
     padding: 40,
  }
})


export default CountryDetails;
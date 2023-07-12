import {React,useEffect, useState} from 'react';
import { Text, View, Button,FlatList } from 'react-native'
import { useQuery, gql } from '@apollo/client';

const Traveller_Query = gql`
query continentQ{
    countries{
        name
        continent{
            name
        }
    }
}
`;

const CountryList = ({ navigation }) => {
    const { data, loading } = useQuery(Traveller_Query)

    useEffect(() => {
        console.log('GraphQL ===', data)
    })
    return (
        <View>
            <FlatList
                data={data?.countries}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: 'gray', marginBottom: 10, height:60 }}>
                        <Text style={{ color: 'red' }}>{item.name}</Text>
                        <Button title="read now" onPress={() => navigation.navigate("Details")} />

                    </View>
                }

                />
        </View>
    );
}


export default CountryList;
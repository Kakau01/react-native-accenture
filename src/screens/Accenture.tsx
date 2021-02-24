import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import AccentureLogo from '../img/Accenture.png';
import { GetUnit, IAllUnits } from '../interfaces';
import { getData } from '../services';


// import { Container } from './styles';
export default function Accenture() {
    const route = useRoute();
    const params = route.params as GetUnit


    const [unit, setUnit] = useState<IAllUnits>();


    useEffect(() => {
        getData.get(`find?id=${params.id}`).then(

            response => {
                setUnit(response.data)
            }
        )
    }, [params.id])

    const navigation = useNavigation();

    function handlePushContact() {
        navigation.navigate('contact')
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image
                    style={styles.topImage}
                    source={{ uri: unit?.profile }}
                />
                <Image
                    style={styles.logo}
                    source={AccentureLogo}
                    height={60}
                    width={231}
                />
                <Text style={styles.title} >{unit?.name}</Text>
                <Text style={styles.paragraph}>{unit?.describle}</Text>

                <Text style={styles.details}> País: {unit?.country} </Text>
                <Text style={styles.details}> Estado: {unit?.state} </Text>
                <Text style={styles.details}> Cidade:  {unit?.city} </Text>
                <Text style={styles.details}> Endereço:  {unit?.address.street}, {unit?.address.number}</Text>

                <RectButton style={styles.contactButton} onPress={handlePushContact}>
                    <Text style={styles.textButton}> Entrar em contato</Text>
                    <Feather name="send" size={20} color="#A100FF" />
                </RectButton>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    scrollView: {
        width: Dimensions.get('window').width
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        marginVertical: 40,
        height: 60,
        width: 232
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        color: '#8f8f8f'
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: 300
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'left',
        color: '#b8b8b8',
        marginBottom: 12

    },
    contactButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#A100FF',
        marginTop: 22
    },
    textButton: {
        color: '#A100FF',
        fontSize: 18,
        marginRight: 18
    },
    details: {
        marginVertical: 6,
        color: '#8f8f8f'
    }
    
})
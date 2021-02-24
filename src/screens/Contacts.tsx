import { Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import logoAccenture from '../img/Accenture.png';

export default function Contact(){
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ text, setText ] = useState('')
    const [ isSendMessage, setIsSendMessage ] = useState(true)
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            { isSendMessage ? ( 
                <>
                    <Text style={styles.sendText}>Sua mensagem</Text>
                    <Text style={styles.sendText}>Foi enviada!</Text>
                    <LottieView
                        source={require('../animations/gradientBall.json')}
                        style={styles.animationContent}
                        autoPlay
                        loop 
                    />
                </>
             ) : ( 
            <>
                <Image
                    style={ styles.logoAccenture }
                    source={logoAccenture}
                />
                <Text style={styles.title}> Formulário de contato</Text>
                <View>
                    <Text style={styles.labelForm}> Seu nome:  </Text>
                    <TextInput
                        style={styles.inputForm}
                    />
                    <Text style={styles.labelForm}> Seu telefone:  </Text>
                    <TextInput
                        style={styles.inputForm}
                    />
                    <Text style={styles.labelForm}> Seu email:  </Text>
                    <TextInput
                        style={styles.inputForm}
                    />
                    <Text style={styles.labelForm}> Deixe sua mensagem:  </Text>
                    <TextInput
                        style={styles.inputFormMultiline}
                        multiline
                    />
                    <RectButton style={styles.sendButton}>
                        <Text style={styles.textSendButton} >Enviar mensagem</Text>
                        <Feather name="send" size={20} color="#A100FF"/>
                    </RectButton>
                </View>
            </>


             )}
            
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height
    },
    scrollView: {
        width: Dimensions.get('window').width
    },
    sendText: {
        color: '#A100FF',
        fontSize: 24,
        marginBottom: 12
    },
    logoAccenture: {
        marginTop: 22,
        width: 200,
        height: 52,
    },
    title: {
        fontSize: 20,
        marginVertical: 30,
        color: '#A100FF'
    },
    animationContent: {
        height: 300,
        width: 300
    },
    labelForm: {
        marginTop: 22

    },
    inputForm: {
        paddingHorizontal: 20,
        height: 50,
        width: Dimensions.get('window').width - 60,
        borderWidth: 1,
        borderColor: '#b9b7b7',
        borderRadius: 12,
        marginVertical: 5
    },
    inputFormMultiline: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: 120,
        width: Dimensions.get('window').width - 60,
        borderWidth: 1,
        borderColor: '#b9b7b7',
        borderRadius: 12,
        marginVertical: 5
    },
    sendButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
        marginTop: 20
    },
    textSendButton: {
        color: '#A100FF',
        fontSize: 20,
        marginRight: 6
    }
})
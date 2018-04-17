import React, { Component } from 'react';
import {  View, Text,StyleSheet,Image } from 'react-native';
import {Icon, Container,Content,Left,Right,Body, Button, Header} from 'native-base';
const Profile = () =>{

    return(
        <Container style={styles.container}>
            <Header>
                <Body>
                    <Text>Profile</Text>
                </Body>
            </Header>

        </Container>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
    },
    image:{
        width:50,
        height: 50,
    },
    text:{
        padding: 15,
    }
})

export default Profile;
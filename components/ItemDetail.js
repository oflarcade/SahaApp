import React, { Component } from 'react';
import { Text,View , Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ItemDetail = (props) => {

   

    return(
        <Card>
            <CardSection>
                <View style={styles.topContainer}>
                                    <View style={styles.box}>
                                        <Text style={styles.titleStyle}>{props.item.name}</Text>
                                    </View>
                            
                                    <View style={styles.box2}>
                                          <Text style={styles.priceStyle}>{props.item.price} TND</Text>
                                     </View>

                                    <View style={styles.box3} >
                                        <Button style={styles.button} />
                                     </View> 
                               
                </View>
            </CardSection>

            <CardSection>
                <Image source={{uri: props.item.image}}  style={styles.imageStyle}/>
            </CardSection>
        </Card>
    );
};

const styles = {
    topContainer:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    box:{
        flex:1,
       
    },
    box2:{
        flex:1,
        justifyContent: 'center',
    },
    box3:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    headerStyle: {
    },
    titleStyle:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    priceStyle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red',
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
    button:{
     
    }

}

export default ItemDetail;

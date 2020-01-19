import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';


export default function Main() {
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true, //needs gps enabled
        })

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        })
      }
    }

    loadInitialPosition()
  }, [])

  if (!currentRegion) 
    return null

  return (
    <MapView style={styles.map} initialRegion={currentRegion}>
      <Marker coordinate={{ latitude: -27.2111164, longitude: -49.6374491 }} >
        <Image style={styles.avatar} source={{ uri: 'https://placehold.it/500' }} />
        
        <Callout>
          {/* it will display when I click at avatar */}
          <View style={styles.callout}>
            <Text style={styles.devName}>Valeska Fabris</Text>
            <Text style={styles.devBio}>Mãe maravilhosa</Text>
            <Text style={styles.devTechs}>Apaixonada pela família</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: { flex: 1 },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
  },

  callout: {
    width: 260,
  },

  devName:{
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio:{
    color: '#666',
    marginTop: 5,
  },

  devTechs:{
    marginTop: 5
  },
})
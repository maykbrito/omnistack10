import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'

export default function Main({ navigation }) {
  const [devs, setDevs] = useState([])
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
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

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs: 'ReactJS',
      }
    })

    setDevs(response.data)
  }

  function handleRegionChanged(region) {
    console.log(region)
    setCurrentRegion(region)
  }
 
  if (!currentRegion) 
    return null

  return ( 
    <>
      <MapView 
        onRegionChangeComplete={handleRegionChanged} 
        style={styles.map} 
        initialRegion={currentRegion}
      >
        <Marker 
          coordinate={{ 
            latitude: -27.2111164, 
            longitude: -49.6374491
        }}>
          <Image style={styles.avatar} source={{ uri: 'https://placehold.it/500' }} />
        
          <Callout onPress={() => {
            navigation.navigate('Profile', 
            { github_username: 'maykbrito' } // it will be a param
            )
          }}> 
            <View style={styles.callout}>
              <Text style={styles.devName}>Valeska Fabris</Text>
              <Text style={styles.devBio}>Mãe maravilhosa</Text>
              <Text style={styles.devTechs}>Apaixonada pela família</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      
      <View style={styles.searchForm}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
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

  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000', // iOS
    shadowOpacity: 0.2, // iOS
    shadowOffset: {
      
    }, // iOS
    elevation: 2, // android
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4Dff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    
  },
})
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'
import { connect, disconnect, subscribeToNewDevs } from '../services/socket'

export default function Main({ navigation }) {
  const [devs, setDevs] = useState([])
  const [currentRegion, setCurrentRegion] = useState(null)
  const [techs, setTechs] = useState('')

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

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]))
  }, [devs]) 

  function setupWebsocket() {
    disconnect()

    const { latitude, longitude } = currentRegion;

    connect({ latitude, longitude, techs });
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs: techs,
      }
    })

    setDevs(response.data)
    setupWebsocket()
  }

  function handleRegionChanged(region) {
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
        {devs.map(dev => (
          <Marker 
            key={dev.github_username}
            coordinate={{ 
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1],
          }}>
            <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />
          
            <Callout onPress={() => {
              navigation.navigate('Profile', { github_username: dev.github_username })
            }}> 
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <Text style={styles.devTechs}>{dev.techs.join(',')}</Text>
              </View>
            </Callout>
          </Marker>
          )
        )}
      </MapView>
      
      <View style={styles.searchForm}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs} // onChangeText={text => setTechs(text)}
        />

        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
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
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors } from '../util/colors';
import { responsive } from '../util/responsive'

const InfoContainer = ({ title, subTitle}) => {
  return(
    <View style={styles.subContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  )
}

const statusColor = (status = 'unknown') => {
  return (
    {
      Alive: { backgroundColor: Colors.green},
      Dead: { backgroundColor: Colors.red},
      unknown: { backgroundColor: Colors.secondary},
    }[status]
  )
}

export const CardItem =({ item }) => {
  const { image, species = '', location = {}, type = '', status = '', gender, name = '' } = item || {};
  
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image}/>
      <View style={styles.infoContainer}>
        <InfoContainer title="Species" subTitle={species} />
        <InfoContainer title="Location" subTitle={location?.name} />
        <InfoContainer title="Gender" subTitle={gender} />
      </View>
      <View style={styles.statusContainer}>
        <View style={[styles.status, statusColor(status) ]}/>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.primaryLight,
    borderRadius: responsive.number(20),
    marginBottom: responsive.number(24),
    overflow: 'hidden',
  },
  image: {
    width: responsive.number(141),
    height: responsive.number(162),
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: responsive.number(10),
    paddingLeft: responsive.number(16),
  },
  subContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize:responsive.number(16),
    fontWeight: 'bold',
    color: Colors.titleColor,
  },
  subTitle: {
    fontSize: responsive.number(13),
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(196,196,196,0.7)',
    width: responsive.number(141),
    height: 'auto',
    paddingHorizontal: responsive.number(10),
    paddingVertical: responsive.number(11),
  },
  name: {
    fontSize: responsive.fontSize(16),
    color: Colors.white,
    marginLeft: responsive.number(6),
  },
  status: {
    width: responsive.number(10),
    height: responsive.number(10),
    borderRadius: responsive.number(5),
    backgroundColor: Colors.green,
  }
})

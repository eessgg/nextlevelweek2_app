import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';

function Favorites() {

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys disponíveis" />
    </View>
  )
}

export default Favorites;
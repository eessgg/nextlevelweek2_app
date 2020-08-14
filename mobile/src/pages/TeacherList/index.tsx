import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';


function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  )
}

export default TeacherList;
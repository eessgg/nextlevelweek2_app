import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from "../../assets/images/icons/study.png";
import giveclassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja Bem-Vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveclassesIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        Total de 205 conexões {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;

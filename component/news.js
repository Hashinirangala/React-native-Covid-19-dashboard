// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const news = () => {
//   return (
//     <View style={styles.newsContainer}>
//       <View style={styles.headerContainer}>
//         <MaterialCommunityIcons size={48} name="news" color={'#fff'} />
//         <Text style={styles.tempText}>Temperature˚</Text>
//       </View>
//       <View style={styles.bodyContainer}>
//         <Text style={styles.title}>So Sunny</Text>
//         <Text style={styles.subtitle}>Grab some sunglasses!!</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   newsContainer: {
//     flex: 1
//   },
//   headerContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around'
//   },
//   tempText: {
//     fontSize: 65,
//     color: '#fff'
//   },
//   bodyContainer: {
//     flex: 2,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-end',
//     paddingLeft: 25,
//     marginBottom: 100
//   },
//   title: {
//     fontSize: 60,
//     color: '#fff'
//   },
//   subtitle: {
//     fontSize: 24,
//     color: '#fff'
//   },
//   time: {
//     fontSize: 38,
//     color: '#fff'
//   }
// });

// export default news;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const news = ({ news, localN }) => {

  return (
    <View style={styles.newsContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <Text style={styles.tempText}>{localN}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{news}</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 65,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 100
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  time: {
    fontSize: 38,
    color: '#fff'
  }
});

export default news;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import news from './Component/news'

export default class App extends React.Component {

  state = {
    isLoading: true,
    localN: 0,
    globalN: null,
    error: null,
  };

  componentDidMount() {
   
        this.fetchWeather();
     
  }

  fetchWeather() {
    fetch(
      `https://hpb.health.gov.lk/api/get-current-statistical`
    )
    .then(res => res.json())
    .then(data => {
      this.setState({
       localN: data.local_total_cases,
        globalN: data.global_total_cases,
        isLoading: false,
        });
    });

    console.log(data);
  }

  
  render() {
    const { isLoading, globalN, localN} = this.state

    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text stlye={styles.loadingText}>Fetching Your Weather</Text> 
          </View>
          ) : (
            <news globalN={globalN} localN={localN} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});
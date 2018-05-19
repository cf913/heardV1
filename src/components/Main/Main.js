import React from 'react';
import { Text, View, TouchableOpacity, FlatList} from 'react-native';
import wifi from 'react-native-android-wifi';

import styles from './Main_style'

export default class Main extends React.Component {
  state = {
    wifi_status: false,
    ssid_list: [],
    wordList: [
      '6dp9cxxm8t7r'
    ]
  }

  componentDidMount() {
    this.checkWifiStatus()
  }

  checkWifiStatus = () => {
    wifi.isEnabled((isEnabled) => {
      if (isEnabled) {
        wifi.loadWifiList((wifiStringList) => {
          var wifiArray = JSON.parse(wifiStringList);
            this.setState({
              ssid_list: wifiArray
            })
          },
          (error) => {
            alert(error);
          }
        );
      }
      this.setState({
        wifi_status: isEnabled
      })
    })
  }

  hax = () => {
    if (!this.state.wifi_status) return
      wifi.findAndConnect(this.state.ssid_list[0].SSID, this.state.wordList[0], (found) => {
          if (found) {
            setTimeout(() => {
            wifi.connectionStatus((isConnected) => {
            if (isConnected) {
                alert('Connected to ' + this.state.ssid_list[0].SSID);
            }
            })}, 3000)
          }
        })

  }

  onClickHandler = () => {
    wifi.setEnabled(!this.state.wifi_status);
    this.checkWifiStatus()
    setTimeout(this.checkWifiStatus, 2000)
  }

  toggleWifiStatus = () => {
    this.setState(prevState => {
      wifi_status: !prevState.wifi_status
    })
  }

  render() {
    // wifi.isEnabled((isEnabled) => {
    //   if (isEnabled) {
    //     this.state.wifi_status = true
    //   } else {
    //     wifi_status = false
    //   }
    // });

    return (
      <View style={styles.Main}>
        <TouchableOpacity 
          onPress={this.onClickHandler}
          style={styles.button}>
          <Text style={styles.goto}>GO!</Text>
          <Text style={styles.status}>Wifi {this.state.wifi_status ? 'ON' : 'OFF'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.hax}
          style={styles.guess}>
          <Text style={styles.goto2}>HaXit</Text>
        </TouchableOpacity>
        <Text>SSID list:</Text>
        {/* <Text>{this.state.ssid_list ? this.state.ssid_list : 'Nothing'}</Text> */}
        <FlatList
          data={this.state.ssid_list}
          keyExtractor={(item) => item.BSSID}
          renderItem={({item}) => <Text>{item.SSID}</Text>}
        />
      </View>
    );
  }
}
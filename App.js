/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View testID="welcome" style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, {Component} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       greeting: undefined,
//     };
//   }
//   render() {
//     if (this.state.greeting) {
//       return this.renderAfterButton();
//     }
//     return (
//       <View
//         testID="welcome"
//         style={{
//           flex: 1,
//           paddingTop: 20,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text style={{fontSize: 25, marginBottom: 30}}>Welcome</Text>
//         <TouchableOpacity
//           testID="hello_button"
//           onPress={this.onButtonPress.bind(this, 'Hello')}>
//           <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           testID="world_button"
//           onPress={this.onButtonPress.bind(this, 'World')}>
//           <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           testID="goodbye_button"
//           onPress={this.onButtonPress.bind(this, 'Goodbye, World')}>
//           <Text style={{color: 'blue', marginTop: 50, marginBottom: 20}}>
//             Say Goodbye
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   renderAfterButton() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           paddingTop: 20,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text style={{fontSize: 25}}>{this.state.greeting}!!!</Text>
//       </View>
//     );
//   }
//   onButtonPress(greeting) {
//     this.setState({
//       greeting: greeting,
//     });
//   }
// }

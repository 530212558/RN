import React from 'react';
import { View, Text,Button,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
     headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen </Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        headerRight: () => (
            <Button
              onPress={navigation.getParam('increaseCount')}
              title="+1"
              color="#fff"
            />
          ),
      };
    };
     componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
      }
       state = {
          count: 0,
        };
 _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />

        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
{
  Home: HomeScreen,
  Details: DetailsScreen,
},{
    initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator);
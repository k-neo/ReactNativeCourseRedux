
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './screens/Main'
import Push from './screens/Push'

const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  {initialRouteName: 'Main', mode: 'card', headerMode: 'none'}
)
const NestNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
  },
  {initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none'},
)
const AppContainer = createAppContainer(NestNavigation);

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    setProfile = profile => {
        this.props.setProfile(profile)
        const { navigation } = this.props
        navigation.navigate('Push')
    }
    
    render() {
    const props = this.props;
        return (
          <AppContainer
          ref = {nav => {this.navigator = nav;}}
          />
        );
    }
}

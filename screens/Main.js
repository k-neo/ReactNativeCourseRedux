import React, {Component} from 'react';
import { Container, View, Header, Left, Body, Right, Button, Content, Title, Text } from 'native-base';
import { connect } from 'react-redux';
import { setProfile } from '../redux/actions';

export class Main extends Component {
  push = () => {
    const { navigation } = this.props
    navigation.navigate('Push')
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>メイン</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <View style={{height: 50, justifyContent: 'center'}}><Text>{this.props.profile}</Text></View>
            <Button small block transparent primary onPress={() => this.props.setProfile("Taro")}>
              <Text>プロファイル設定(Taro)</Text>
            </Button>
            <Button small block transparent primary onPress={() => this.props.setProfile("Hanako")}>
              <Text>プロファイル設定(Hanako)</Text>
            </Button>
            <Button small block transparent primary onPress={this.push}>
              <Text>プッシュ表示</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});
  
const mapDispatchToProps = {
  setProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

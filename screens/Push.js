import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, View, Button, Icon, Content, Title, Text } from 'native-base';
import { connect } from 'react-redux';
import { setProfile } from '../redux/actions';

export class Push extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>プッシュ</Title>
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

export default connect(mapStateToProps, mapDispatchToProps)(Push);

import React, { Component } from 'react'
import { 
  Button,
  notification,
  Slider,
  Switch
} from 'antd';

class App extends Component{
  state = {
    disabled: false
  }

  disableChange = () => {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }))
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  render(){
    const { disabled } = this.state
    return (
      <div>
        <h1>Antd</h1>
        <Slider defaultValue={30} disabled={disabled} />
        <Button onClick={this.disableChange}>Disable</Button>
      </div>
    )
  }
}

export default App
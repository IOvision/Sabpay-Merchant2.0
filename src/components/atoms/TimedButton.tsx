import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors';

export interface Props {
    onPress: () => void
}

export interface State {
    timer: number
    isReady: boolean
}

class Timer extends React.Component<Props, State> {
    
    interval: NodeJS.Timeout
    
    constructor(props) {
        super(props)
        this.state = {
            timer: 30,
            isReady: false
        };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if(this.state.timer === 1 && !this.state.isReady){
            this.setState({
                isReady: true
            })
            clearInterval(this.interval)
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <TouchableOpacity 
                style={{
                    backgroundColor: this.state.isReady ? "#84BE6A" : colors.grey, 
                    width: 100, 
                    alignItems: 'center',
                    padding: 5, 
                    marginTop: 10,
                    borderRadius: 5
                }}
                onPress={this.props.onPress}
                disabled={!this.state.isReady}
            >
                <Text>
                    {
                        this.state.isReady ? `Resend Code` : `Resend in ${this.state.timer}`
                    }
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Timer

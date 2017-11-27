import React, {Component} from 'react';
import io from "socket.io-client";
import PropTypes from 'prop-types';

const Message = ({message}) => (
    <div className="chatMessage">
        <div>{message.author}: {message.message}</div>
    </div>
);

Message.propTypes = {
    // message: PropTypes.string.isRequired,
    message: PropTypes.object.isRequired
};

export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            messages: [],
            feedback: '',
            shouldHandleKeyPress: true
        };
        // this.socket = io('localhost:1337');
        this.socket = io('localhost:' + 1337);

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({message: ''});
        };

        this.sendFeedback = () => {
            this.socket.emit('TYPING', {
                author: this.state.username
            });
        };

        this.socket.on('RECEIVE_MESSAGE', function(data) {
            removeFeedback();
            addMessage(data);
            updateScroll();
        });

        this.socket.on('TYPING', function(data) {
            console.log('data: ' + data);
            sendFeedback(data);
            updateScroll();
        });

        const updateScroll = (element=null) => {
            if (element === null) {
                element = document.querySelector(".messages");
            }
            element.scrollTop = element.scrollHeight;
        };

        const sendFeedback = data => {
            if (this.state.shouldHandleKeyPress === true) {
                this.setState({feedback: [this.state.feedback, data.author + ' skriver ett meddelande...']});
                this.setState({shouldHandleKeyPress: false});
            }
        };

        const removeFeedback = () => {
            this.setState({feedback: ''});
            this.setState({shouldHandleKeyPress: true});
        };

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };
    }

    render() {
        return (
            <div className="chat">
                <h1>Chat</h1>
                <p>Välkommen till chatten.</p>
                <div className="container">
                    <div className="messages">
                        {this.state.messages.map((m, i) => console.log(m) || <Message key={i} message={m} />)}
                        <div className="feedback">
                            {this.state.feedback}
                        </div>
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="Nick" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                        <br/>
                        <input type="text" placeholder="Meddelande" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} onKeyPress={this.sendFeedback} className="form-control"/>
                        <br/>
                        <button onClick={this.sendMessage} className="button button--text button--primary">Skicka</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;

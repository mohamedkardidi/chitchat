import './App.css';
import ChatWindow from './components/ChatWindow/ChatWindow';
import { MessagesList } from './components/MessageList/MessageList';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <MessagesList className="messageList" />
      <ChatWindow className="chatWindow" />
    </div>
  );
}

export default App;

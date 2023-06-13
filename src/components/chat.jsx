import { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { ChatContext } from './ChatContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import NearMeIcon from '@mui/icons-material/NearMe';


firebase.initializeApp({
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const ChatBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  
  &#Chat {
    border-radius: 5px;
  }
`;

const ChatContainer = styled.div.attrs({
    id: 'Chat'
  })`
    text-align: center;
    max-width: 728px;
    min-width: 40vw;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
`;

const Header = styled.header`
    background-color: #363946;
    height: 8vh;
    min-height: 50px;
    color: white;
    position: relative;
    width: 100%;
    max-width: 728px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    border-radius: 5px 5px 0 0;
    & button {
        padding: 0;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    max-width: 728px;
    background-color: #363946;
`;

const MainContainer = styled.main`
    padding: 10px;
    height: 80vh;
    margin: 10vh 0 10vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    &::-webkit-scrollbar {
        width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
        background: #1e1e24;
    }

    &::-webkit-scrollbar-thumb {
        background: #6649b8;
    }
`;

const FormContainer = styled.form`
    height: 8vh;
    position: absolute;
    bottom: 0;
    background-color: rgb(24, 23, 23);
    width: 100%;
    max-width: 728px;
    display: flex;
    font-size: 1.5rem;
    border-top: 3px solid #4c4c6a;


    button {
        width: 20%;
        background-color: rgb(56, 56, 143);

    }

    input {
        line-height: 1.5;
        width: 100%;
        font-size: 1.5rem;
        background: rgb(58, 58, 58);
        color: white;
        outline: none;
        border: none;
        padding: 0 10px;

    }
`;

const Button = styled.button`
    background-color: #363946;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Message = styled.div`
    box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    padding: 10px 20px;

    & div {
        flex: 1;
        padding: 10px 20px;
        position: relative;
        color: white;
    }
    & span {
        color: rgba(0,0,0,.38);
        font-size: 8pt;
    }

    &.sent {
        border-radius: 0 6px 6px 0;
        margin-left: -10px;
        background: #5b5e6c;
        div {
            text-align: left;
        }
    }

    &.received {
        border-radius: 6px 0 0 6px ;
        margin-right: -10px;
        background: #4c4c6a;
        flex-direction: row-reverse;
        div {
            text-align: right;
        }
    }

    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 2px 5px;
    }
`;

function Chat() {
    const { chatActive, setChatActive } = useContext(ChatContext);
    const [user] = useAuthState(auth);

    return (
        <>
            
            {chatActive && (
                <ChatBackground>
                    <ChatContainer>
                        <Header>
                            <h2> Chat 💬 </h2>
                            <SignOut />
                            <Button onClick={() => setChatActive(!chatActive)}> Close </Button>                      
                        </Header>
                        <Section>
                            {user ? <ChatRoom /> : <SignIn />}
                        </Section>
                    </ChatContainer>
                </ChatBackground>
            )}
        </>        
    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </>
    )
}

function SignOut() {
    return auth.currentUser && (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
    )
}


function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <MainContainer>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </MainContainer>

            <FormContainer onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                <Button type="submit" disabled={!formValue}>
                    <NearMeIcon />
                </Button>
            </FormContainer>
        </>
    )
}


function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const formattedDate = createdAt.toDate().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      });

    return (<>
        <Message className={messageClass}>
            <img src={photoURL || 'https://i.stack.imgur.com/nUJ73.png'} />
            <div>
                <p>{text}</p>
                <span>{formattedDate}</span>
            </div>
        </Message>
    </>)
}


export default Chat;
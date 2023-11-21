import { useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ChatContext } from './ChatContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import NearMeIcon from '@mui/icons-material/NearMe';
import 'animate.css/animate.min.css';


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
    width: 400px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
`;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    max-width: 728px;
    background-color: #e7edf5;
    border-radius: 5px;
`;
const Header = styled.header`
    position: fixed;
    top: 0px;
    height: 8vh;
    width: 100%;
    background-color: ${(props) => (props.isUserLoggedIn ? '#5E6C85' : 'transparent')};
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: end;
    z-index: 10;
    :hover {
        cursor: pointer
    }
`;
const Dots = styled.div`
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    span {
        border: 3px solid #a8b8d0;
        cursor: pointer;
    }
`;
const AdditionalButtonsContainer = styled.div`
    position: absolute;
    top: -30px;
    right: -60px;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column-reverse;
    gap: 1rem;
`;
const EmojiContainer = styled.div`
    position: absolute;
    background-color: #6F7D95;
    border-radius: 5px;
    bottom: 83px;
    left: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 4 columns
    grid-template-rows: repeat(3, 1fr);    // 3 rows
    gap: 10px;
    display: ${(props) => (props.isVisible ? 'grid' : 'none')};
`;
const EmoticonButton = styled.div`
    padding: 5px;
    border: 1px solid transparent;
    text-decoration: none;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
    }
`;
const MainContainer = styled.main`
    padding: 10px;
    padding-top: 10vh;
    height: 100%;
    margin: 0vh 0 8vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

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
    border-radius: 0 0 5px 5px;
    background-color: rgb(24, 23, 23);
    width: 100%;
    max-width: 728px;
    display: flex;

    input {
        line-height: 1.2;
        width: 100%;
        font-size: 1.2rem;
        color: white;
        background: #5E6C85;
        outline: none;
        border: none;
        padding: 0 10px;

    }
`;
const Button = styled.button`
    background-color: transparent;
    border: none;
    color: grey;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;


    &#emojiButton {
        background-color: #5E6C85;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightgray;
        border: none;
        border-radius: 0 0 0 5px;
        text-decoration: none;
        cursor: pointer;
        :hover {
            background-color: #6F7D95;
        }
    }

    &#closeButton {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        padding: 0;
        border: 3px solid #fff;

        ::before {
            content: '-';
        }
        
        :hover {
            padding-bottom: 2px;
            font-size: 24px;
            background-color: rgba(0,0,0,0.7)
        }
    }

    &#signOut {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        padding: 0;
        border: 3px solid #fff;
        font-size: 13px;
        
        ::before {
            content: 'Sign Out';
        }
        :hover {
            font-size: 14px;
            background-color: rgba(0,0,0,0.7)
        }
    }

    &#submitButton {
        background-color: #5E6C85;
        min-width: 20%;
        border-radius: 0 0 5px 0;
        :hover {
            background-color: #6F7D95;
        }
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
const Message = styled.div`
    box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding: 10px 20px;

    & .message-container {
        flex: 1;
        padding: 5px 10px;
        position: relative;
        div {
            display: flex;
            gap: 1rem;
            padding-bottom: 5px;
        }
    }
    & span {
        color: rgba(0,0,0,.38);
        font-size: 12px;
    }

    &.sent {
        border-radius: 0 6px 6px 0;
        margin-left: -20px;
        background: #94abc2;
        div {
            text-align: left;
        }
    }

    &.received {
        border-radius: 6px 0 0 6px ;
        margin-right: -20px;
        background: #60768a;
        flex-direction: row-reverse;
        color: white;
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
        <Button 
            className='animate__animated animate__fadeInTopLeft' 
            id="signOut" 
            onClick={() => auth.signOut()}>
        </Button>
    )
}
const emoticonMap = {
    ':)': '😊',
    ':D': '😃',
    ':(': '😞',
    ':O': '😲',
    ';)': '😉',
    ':p': '😛',
    ':|': '😐',
    ':*': '😘',
    ':/': '😕',
    ':3': '😺',
    'XD': '😆',
    '<3': '❤️',
};
const replaceEmoticons = (text) => {
    let replacedText = text;
    Object.entries(emoticonMap).forEach(([emoticon, emoji]) => {
      const escapedEmoticon = emoticon.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      replacedText = replacedText.replace(new RegExp(escapedEmoticon, 'g'), emoji);
    });
    return replacedText;
};

function Chat() {
    const { chatActive, setChatActive } = useContext(ChatContext);
    const [areDotsVisible, setAreDotsVisible] = useState(true);
    const [user] = useAuthState(auth);

    const toggleButtons = () => {
        setAreDotsVisible((prevVisible) => !prevVisible);
    };

    return (
        <>
            {chatActive && (
                <ChatBackground>
                    <ChatContainer>
                        <Section>
                            <Header onClick={toggleButtons} isUserLoggedIn={user}>
                                <Dots>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Dots>
                                <AdditionalButtonsContainer isVisible={areDotsVisible}>
                                    <SignOut />
                                    <Button 
                                        className='animate__animated animate__fadeInBottomLeft' 
                                        id="closeButton" 
                                        onClick={() => setChatActive(!chatActive)}>
                                    </Button>                      
                                </AdditionalButtonsContainer>
                            </Header>
                            {user ? (
                                <ChatRoom />
                            ) : (
                                <SignIn />
                            )}
                        </Section>
                    </ChatContainer>
                </ChatBackground>
            )}
        </>        
    );
}

function ChatRoom() {
    const dummy = useRef();
    const inputRef = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const [isEmojiContainerVisible, setIsEmojiContainerVisible] = useState(false);

    const toggleEmojiContainer = (e) => {
        e.preventDefault();
        setIsEmojiContainerVisible((prevVisible) => !prevVisible);
    };

    const insertEmoticon = (emoticon, e) => {
        e.preventDefault();
        const startPos = inputRef.current.selectionStart;
        const endPos = inputRef.current.selectionEnd;

        setFormValue((prevValue) => {
            return (
              prevValue.substring(0, startPos) +
              emoticon +
              prevValue.substring(endPos)
            );
          });
      
        const newPos = startPos + emoticon.length;
        inputRef.current.setSelectionRange(newPos, newPos);
        inputRef.current.focus();
    };
     
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;//user;

        await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName,
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
                <Button 
                    id="emojiButton"
                    onClick={(e)=> {toggleEmojiContainer(e);}}>
                    <SentimentSatisfiedAltIcon/>
                </Button>

                <EmojiContainer isVisible={isEmojiContainerVisible}>
                    {Object.entries(emoticonMap).map(([emoticon, emoji]) => (
                        <EmoticonButton 
                            key={emoticon} 
                            onClick={(e) => {insertEmoticon(emoticon, e); toggleEmojiContainer(e);}}>
                            {emoji}
                        </EmoticonButton>
                    ))}
                </EmojiContainer>

                <input 
                    ref={inputRef}
                    value={formValue} 
                    onChange={(e) => setFormValue(e.target.value)} 
                    placeholder="say something nice" />

                <Button id="submitButton" type="submit" disabled={!formValue}>
                    <NearMeIcon />
                </Button>
            </FormContainer>
        </>
    )
}

function ChatMessage(props) {
    const { text, uid, photoURL, createdAt, displayName } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const formattedDate = createdAt?.toDate()?.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    }) || 'Invalid Date';

    const messageTextWithEmoticons = replaceEmoticons(text);

    return (<>
        <Message className={messageClass}>
            <img referrerPolicy="no-referrer" src={photoURL || 'https://i.stack.imgur.com/nUJ73.png'} />
            
            <div className='message-container'>
                <div>
                    <span>{displayName}</span>
                    <span>{formattedDate}</span>
                </div>
                <div className='message-text'>{messageTextWithEmoticons}</div>
            </div>
            
        </Message>
    </>)
}


export default Chat;
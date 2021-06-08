import React, { useState, useEffect} from "react";
import "./css/chat.css";
import { Container, Row, Col } from 'react-bootstrap';
//import socketIOClient from "socket.io-client";
//import Speech from "react-speech";
//import $ from "jquery";
const Chat = (props) => {

  const [userName, setUserName] = useState("");
  //const [messageArea, setMessageArea] = useState("");

  //let socket = socketIOClient("http://localhost:8000");
  //let messageAreaRef = useRef(null);
  //const messageArea = document.getElementsByClassName(messageAreaRef.current.className);
    
  //let messageArea = messageAreaRef.current;

  useEffect(() => {
    //setMessageArea(messageAreaRef.current);
  }, []);

  const handleUserName = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setUserName(e.target.value);
    }
  }

  const handleChange = (e) => {
    //socket.emit('typing', `${userName} is typing`);
    if (e.key === 'Enter' && e.target.value !== '') {
      //sendMessage(e.target.value);
      document.getElementById('textbox').value = null;
    }
  }

/*
  let sendMessage = (message) => {
    let msg = {
      user: userName,
      message: message.trim()
    };

    appendMessage(msg, 'outgoing');
    socket.emit('message', msg);
  }

  let appendMessage = (msg, type) => {
    let mainDiv = document.createElement('div');
    let className = type;

    mainDiv.classList.add(className, 'message');

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;

    mainDiv.innerHTML = markup;
    $(".message__area").append(mainDiv);
    //console.log(messageAreaRef.current);
    //(messageAreaRef.current).appendChild(mainDiv);
  }

  let count = 1;
  socket.once('message', (msg) => {
    appendMessage(msg, 'incoming');
    console.log(count);
    count++
  });

  socket.on('typing', (msg) => {
    //console.log(msg);
    document.getElementById('typeText').innerText = msg;
    //appendMessage(msg, 'incoming')
  });
  */

  return (
    <>
    {/* <Speech text="Welcome User"/> */}
      <Container>
        <Row style={{ marginTop: '10px' }}>
          <Col md={12}>
            <section className="chat__section">
              <div className="brand">
                <h1>Let's Talk</h1>
                {
                  (userName === "")
                    ?
                    <input type="text" onKeyUp={handleUserName} placeholder="Your Name" />
                    :
                    <span style={{ fontSize: '15px', textTransform: 'uppercase', color: 'maroon' }}>Hello, <b>{userName}</b> </span>
                }
                <span id="typeText"></span>
              </div>
              <div className="message__area"></div>
              <div style={{ marginTop: '20px' }}>
                <textarea id="textbox" cols="35" rows="2" placeholder="Type message"
                onKeyUp={handleChange}></textarea>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Chat;
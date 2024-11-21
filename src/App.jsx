import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="Header">
        <h1>Capital Lifestyle of 3 Amigos</h1>
        <nav className="NavBar">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="MainContent">
        <section className="PersonSection">
          <div className="Person">
            <img src="images\sure.JPG" alt="Person 1" />
            <h2>Surendhar Chandrabose</h2>
            <h3>Drag Racer</h3>
            <p>Surendhar is a passionate drag racer with a love for speed and thrill. He's known for his achievements in racing and the sport.</p>
            <h3>Body Builder</h3>
            <p>Surendra is a distinguished bodybuilder. He has won the fourth place in the recent Mr. Tamil Nadu competition. He teaches bodybuilding to underprivileged students in a simple way.</p>
          </div>
          <div className="Person">
            <img src="images\siva.webp" alt="Person 2" />
            <h2>Siva Balan Alagarsamy</h2>
            <h3>Football Player</h3>
            <p>Siva Balan is a football enthusiast who brings energy and strategy to every match. His skills on the field are admired by all who watch him play.</p>
            <h3>Traveller</h3>
            <p>Sivabalan is a keen traveler. He has trekked across India and has been included in the World Travel Book. Last month, he embarked on a sea voyage to Sri Lanka with the aim of loving nature.</p>
          </div>
          <div className="Person">
            <img src="images\pasu.jpeg" alt="Person 3" />
            <h2>Pasupathi Chinnaiah
            </h2>
            <h3>Handball Player</h3>
            <p>Pasupathi is a skilled Handball player known for his agility and precision. His commitment to the game is evident in every match he plays.</p>
            <h3>Artist</h3>
            <p>Pasupathi is also a talented and artistic mapmaker. He has brought pride to Tamil Nadu by securing eight places in the World Map Artists category. He has also created a Tamil map for the flag-raising ceremony.</p>
          </div>
        </section>

        <section className="ContactSection" id="contact">
          <h2>Contact Details</h2>
          <p>Email: 3amigos@hotmail.com</p>
          <div className="SocialMediaLinks">
          <h2>Now Follow on Instagram</h2>
            <a href="https://www.instagram.com/surendhar_chandrabose/profilecard/?igsh=bW1zcTk0bWxoMnZv">Surendhar</a>
            <a href="https://www.instagram.com/innocent_siva_cr7_/profilecard/?igsh=N3lhYjQ3N3U4MjV2">Sivabalan</a>
            <a href="https://www.instagram.com/senthi.___.mani/profilecard/?igsh=M2ZzYXdnd282YzB1">Pasupathi</a>
          </div>
          <p>‎ </p>
          <h3>Enquiry Form</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="Footer">
        <p>© 2023 3 Amigos. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
import React from "react";
import logo from './assets/images/google.png';
import ImageButton from './ImageButton';

interface HomeProps {
}

class Home extends React.Component<HomeProps> {

  render() { 
    return (
    <header className = "hello">
      <ImageButton src={logo} alt="logo"/> 
      <p>Under Construction... Come back soon!</p>
    </header>
    )
  }
}

export default Home;
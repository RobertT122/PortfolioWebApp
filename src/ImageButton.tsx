import React, { MouseEvent } from 'react';
import styles from './ImageButton.module.css'; // Import CSS module

interface ImageButtonProps {
  src: string;
  alt: string;
}

class ImageButton extends React.Component<ImageButtonProps> {
  handleClick = (event: MouseEvent<HTMLImageElement>) => {
    console.log('Button clicked!');
  };

  render() {
    const { src, alt } = this.props;

    return (
      <img
        src={src}
        alt={alt}
        className={styles.image} // Apply CSS module class
        onClick={this.handleClick}
      />
    );
  }
}

export default ImageButton;
import backgroundSrc from '../assets/imgs/bg.png';
import shipSrc from '../assets/imgs/ship.png';
/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */

// Define images
export const background = new Image();

// Set images src
background.src = backgroundSrc;

//resources
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
// explanation on sprite sheet https://www.codeandweb.com/what-is-a-sprite-sheet,
// how to create a sprite sheet https://www.codeandweb.com/texturepacker/tutorials/how-to-create-a-sprite-sheet,
// https://itch.io/game-assets/tag-top-down is where I am finding assets
// element is the most general base class from which all element objects in a document inherit
// element inherits properties from its parent interface


//inital steps
//find assets
// download map assets -- done
// import into file -- done
//layer downloaded tiles -- done
//place trees and enviorment -- done
//landscaping details -- done
//collisions and map boundaries -- done
//foreground layer -- done
// export layers for project import

//player and map development with coding
//project setup -- done
//import and render my map -- done
//player creation -- done
//move player through map on key down
//player to map boundary collisions
//foreground objects
//player movement animation
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') //this has now created the canvas context, so we can start drawing
canvas.width = 1024
canvas.height = 576
ctx.fillstyle = 'white';
  // left and top cut, width of cut, height of cut
ctx.fillRect(0, 0, canvas.width, canvas.height)

// this is how you draw something onto the screen
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
const playerImage = new Image();
playerImage.src= './img/playerDown.png'
const x = canvas.width / 2 - (playerImage.width / 4) / 2;
const y = canvas.height / 2 - playerImage.height / 2;
const image = new Image();
image.src = './img/ninjaMap.png';
// draw image method requires 3 arguments which will be image first, second will be x position, third is y position
image.onload = () => {
  ctx.drawImage(image, -1268, -525)
  ctx.drawImage(playerImage,
    0, // x coordinate
    0, // y coordinate
    playerImage.width / 4, // crop width
    playerImage.height, //
    x ,
    y,
    playerImage.width / 4,
    playerImage.height,
  )
}

//https://www.w3schools.com/js/js_window.asp
//only works if we are running code directly to our browser from my understanding
window.addEventListener('keydown', (e) => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  switch (e.key) {
    case 'w';
      console.log('pressed w key')
      break
  }
})

let viewerElement = $(".viewContainer");
let direcElement = $('.messageCon');

const rewardButton = $('.rewardButt');
const restartButton = $('.restart');

$(document).ready(function(){
    rewardButton.on('click', () => {  //The on() method attaches one or more event handlers for the selected elements.
        viewerElement.empty();
        console.log('This works');
        const elem = $("<img>", { //When a user clicks on a button, will create a new <img> element:
            src: "../Resources/cookie.jpg",
            height: "612",
            width: "612",
            alt: "Cookie"
        });
        const mess = $("<h3>").text("YOU WON A COOKIE"); //When a user clicks on a button, will create a new <h3> element:
        viewerElement.append(elem);
        direcElement.empty();
        direcElement.append(mess);
    });
    
    restartButton.on('click', () => { 
        viewerElement.empty();
        direcElement.text("Don't be Scared, press the button!");
    });
  });
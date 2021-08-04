const message = [ 'how are you', 'how was you day', 'shall we go out','have a dinner','welcome aboard'];
const guessMessage = (arguments) => arguments[Math.floor(Math.random() * message.length)];

function predict(){
    const guessedMessages = guessMessage(message);
 console.log('you message is here ${guessedMessages}');   
}
predict();

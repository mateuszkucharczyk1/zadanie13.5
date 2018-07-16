var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var OSinfo = require('./modules/OSinfo');

emitter.on("beforeCommand", function (myInstruction) {
    console.log('You wrote: ' + myInstruction + ', trying to run command.');
});
emitter.on("afterCommand", function () {
  console.log('Finished command.');
})

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var myInput = process.stdin.read();
  if (myInput !== null) {
    var myInstruction = myInput.toString().trim();
    emitter.emit('beforeCommand', myInstruction);
    switch (myInstruction) {
      case '/exit':
        process.stdout.write("Quiting app!\n");
        process.exit();
        break;
      case '/language':
        process.stdout.write("The language is " + process.env.LANG + ".\n");
        break;
      case '/version':
        process.stdout.write("The version is " + process.version + ".\n" )
        break;
     case '/getOSinfo':
          OSinfo.print();
        break;
      default:
        process.stderr.write("Wrong instruction!\n");
    };
    emitter.emit('afterCommand');
  }
});

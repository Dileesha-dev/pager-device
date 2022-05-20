const cron = require('node-cron');
var TMClient = require('textmagic-rest-client');

var task = cron.schedule('*/2 * * * *', () => {
    var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    c.Messages.send({text: 'Paging...', phones:'+94783617278'}, function(err, res){
        console.log('Messages.send()', err, res);
    });
});

task.start();
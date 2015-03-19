var bunyan = require('bunyan')
, log = bunyan.createLogger({name: 'Book'});

module.exports = function(Book) {
	Book.beforeRemote('*', function (ctx, model, next) {
		log.info({a: 'b'}, 'Updated reviewer details');
		next();
	});
};

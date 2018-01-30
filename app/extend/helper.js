const moment = require('moment');
exports.relativeTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss');
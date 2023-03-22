(function() {
    const db_info = {url:'localhost',
                        username: 'admin',
                        password: 'ieceC6xa',
                        port: '23078',
                        database: 'java',
                        userCollection: 'users',
                        answerCollection: 'answers',
                        collection: 'records',
                        mainCollection: 'users',
                        calendarCollection: 'calender'
                    };

    const moduleExports = db_info;

    if (typeof __dirname != 'undefined')
        module.exports = moduleExports;
}());


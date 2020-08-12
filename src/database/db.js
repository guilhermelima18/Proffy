const Database = require('sqlite-async');
module.exports = Database.open(__dirname + '/banco.sqlite').then(execute)

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id integer primary key autoincrement,
            name text,
            avatar text,
            whatsapp text,
            bio text
        );

        CREATE TABLE IF NOT EXISTS classes (
            id integer primary key autoincrement,
            subject integer,
            custo text,
            proffy_id integer
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id integer primary key autoincrement,
            class_id integer,
            weekday integer,
            time_from integer,
            time_to integer
        );
    `)
}
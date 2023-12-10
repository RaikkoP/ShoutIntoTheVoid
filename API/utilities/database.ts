const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE message (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            body text, 
            likes integer,
            date text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Messages table found')
            }else{
                // Table just created, creating some rows
                const firstInsert = 'INSERT INTO messages (body, likes, date) VALUES (?,?,?)'
                db.run(firstInsert, ["Hello world!", 0, sqlite3.datetime()])
            }
        });  
    }
});


export default db;
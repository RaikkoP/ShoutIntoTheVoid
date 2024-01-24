const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

const db = new sqlite3.Database(DBSOURCE, (err: Error) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            body text, 
            likes integer,
            date text
            )`,
        (err : Error) => {
            if (err) {
                // Table already created
                console.log('Messages table found')
            }else{
                // Table just created, creating some rows
                const date = new Date();
                const sqliteDate = date.toISOString();
                const firstInsert = 'INSERT INTO messages (body, likes, date) VALUES (?,?,?)'
                db.run(firstInsert, ["Hello world!", 0, sqliteDate])
            }
        });  
    }
});


export default db;

async function searchInDBByNameOrDiscription(tableName, searchString){

    const mysql = require('mysql2/promise');
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'sakila',
        password: 'Йцукен12'
    });

    let sqlQuery = `SELECT * `
                    + `FROM ${tableName} `
                    + `WHERE name LIKE '%${searchString}%' OR decription LIKE '%${searchString}%' `
                    + `ORDER BY address`; 


    const [rows] = await pool.execute(sqlQuery);

    let result = {
        data: Object.values(rows).slice(0,20),
        count: Object.keys(rows).length
    }

    return result;
}

module.exports = searchInDBByNameOrDiscription;

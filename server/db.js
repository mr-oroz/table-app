const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "1990",
    host: "localhost",
    port: 5432,
    database: "oroz" // изыините тут я написал своего имя на датабазу
});
//тут мы здесь настроим базаданных чтобы подключать на базаданных
module.exports = pool;
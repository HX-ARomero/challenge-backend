const { sequelize } = require("./src/db");
const server = require("./src/server");
require("dotenv").config();
const { DB_HOST } = process.env;

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on http://${DB_HOST}:${PORT}`);
        })
    })
    .catch(error => console.log(error));

const {sequelize} = require("./models")

sequelize.sync({force:true}).then(()=>{
    console.log("Database updated")
}).catch((e)=>console.error(e))
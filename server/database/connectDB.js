const {mongoose} = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aytwlpc.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("Database Connected");
    })
    .catch((err)=>{
        console.log(err.message);
    })

}

module.exports = connectDB;
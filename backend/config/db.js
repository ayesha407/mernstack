const mongoose=require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ayeshagudimetla_db_user:Ayesha2006@cluster0.k7qjbm9.mongodb.net/?appName=Cluster0');
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB  //1 for a file
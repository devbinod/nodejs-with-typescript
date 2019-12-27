import mongoose from 'mongoose'

const MONGODB_CONNECTION: string = "mongodb://localhost:27017/newDatabase";

export class Config {

    public connection: mongoose.Connection
	constructor() {
      
         this.connect();
    }

    public connect() {
        mongoose.connect(MONGODB_CONNECTION, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log("Successfully connected.......")
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        })

    }
    

   

}
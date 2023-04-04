import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from './routes/PatientRoute.js';
import  passport from "passport";



/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/*passport*/
app.use(passport.initialize());

/*ROUTES*/
app.post('/',async (req,res)=>{
    
    res.send("Fucking Home Page")
});

app.use('/Patient',router);


/* DATABASE CONFIGURATION */
const db = process.env.MONGO_URI ;
/*CONNECT TO MONGOBD*/
mongoose.connect(db,{
    useUnifiedTopology :true,
    useNewUrlParser :true,
}
).then(() => console.log("mongoDb sucessufuly connected"))
.catch(err => console.log(err));


/*INSTALATION OF THE SERVER*/
const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})



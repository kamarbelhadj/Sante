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
import routerMed from "./routes/MedecinRoute.js";
import  passport from "passport";
import ConfigPassport from "./config/passport.js";


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
import {inRole,ROLES} from './config/Rolemiddleware.js'


/*passport*/
app.use(passport.initialize());


/*ROUTES*/
app.post('/',async (req,res)=>{
    res.send("Home Page")
});
app.use('/Patient',router);
app.use('/medecin',routerMed)
//test 
ConfigPassport (passport);
app.get('/test', passport.authenticate('jwt', { session: false }),inRole(ROLES.USER),(req, res) => {
  res.send("Hello Patient")
  });
  ConfigPassport (passport);
app.get('/admin', passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),(req, res) => {
  res.send("Hello Patient")
  });


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



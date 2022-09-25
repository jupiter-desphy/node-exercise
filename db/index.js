import config from "../config";
import mysql from "mysql";

const connection = mysql.createPool(config.mysql);

export default connection;
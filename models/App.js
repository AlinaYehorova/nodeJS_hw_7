import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const App = sequelize.define('App', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
   type: DataTypes.INTEGER,
   allowNull: false ,
  },
  timestamps: false,
})

export default App
const { sequelize, DataTypes} = require("../db/connection");

const User = sequelize.define(
  'User',
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userName:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
      isEmail:true
    },
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      len:[5]
    }
  }
},
{
  sequelize,
  timestamps:true,
  underscored:true
});


module.exports = User

const { sequelize, DataTypes} = require("../db/connection");
const bcrypt = require("bcrypt")
const User = sequelize.define(
  'Users',
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name:{
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
  hooks: {
   async beforeCreate(userData){
    userData.password = await bcrypt.hash(userData.password, 3);
    return userData;
   }
  }
},
{
  sequelize,
  timestamps:true,
});

User.sync({ force: false })
module.exports = User

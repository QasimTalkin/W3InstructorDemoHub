
const { sequelize, DataTypes } = require("../db/connection");
const userModel = require('./userModel')

const Post = sequelize.define('Posts', {
  id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  post_url:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isUrl:true
    }
  },
  post_body:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  user_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:"users",
      key:"id"
    }
  }
})

userModel.hasMany(Post, {
  foreignKey:"user_id"
})

Post.belongsTo(userModel, {
  foreignKey:"user_id"
})

sequelize.sync();
module.exports = Post;


const { sequelize, DataTypes } = require("../db/connection");

const Post = sequelize.define('Post', {
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

Post.sync({ force: false })
// creare a post and console log it
const johnsPost = Post.create("Title", "https://http.cat/400", "This is body", 4)

module.exports = Post;

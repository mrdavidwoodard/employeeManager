let mongodb = require("mongodb");


class Database {
  static connect() {
    return mongodb.MongoClient.connect("mongodb://david:123@ds161493.mlab.com:61493/ccsample-db").then((db) => {
      this.db =db;
      console.log("Employee Database Connected");
    }, ((err) => {
      console.log(err);
    }))
  }

  constructor(db) {

  }
}

module.exports = Database;

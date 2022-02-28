  
const mongoose = require('mongoose')
const { mongooseConnectionString } = proccess.env.DJS_MONGO

module.exports = async () => {
  await mongoose.connect(mongooseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
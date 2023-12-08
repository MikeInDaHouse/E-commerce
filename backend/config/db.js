// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//      const conn = await mongoose.connect(process.env.MONGO_URI)
//      console.log(`MongoDB Connected: ${conn.connection.host}`)
//     } catch (error ) {
//        console.log(`Error: ${error.essage}`);
//        process.exit(1);
//     }
// }

// export default connectDB;

import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
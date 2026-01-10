import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);
        const url = `Connected to ${connection.host}:${connection.port}`;
        console.log(url);
        const database = `Database: ${connection.name}`;
        console.log(database);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

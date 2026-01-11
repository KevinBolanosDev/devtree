import colors from 'colors';
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);
        const url = `Connected to ${connection.host}:${connection.port}`;
        console.log(colors.green.bold.italic(url));
        const database = `Database: ${connection.name}`;
        console.log(colors.green.bold.italic(database));
    } catch (error) {
        console.error(colors.red('Error connecting to MongoDB:'), error);
        process.exit(1);
    }
}

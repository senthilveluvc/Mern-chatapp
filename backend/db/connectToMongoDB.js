import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://vcsenthilvelu:r7N78vyGgvz6Urol@cluster0.8vgozbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;

const dbConnect = require('./mongodb');

// Reading Data from MongoDB
const main = async () => {
    const db = await dbConnect(); // Call dbConnect as a function and await the result
    const data = await db.find().toArray();
    // console.log(data);
}

main();

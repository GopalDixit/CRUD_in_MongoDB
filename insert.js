const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne({
        name:"nord",
        company:"One+",
        Price: 150
    })
};
console.log("INSERTED")
insert();
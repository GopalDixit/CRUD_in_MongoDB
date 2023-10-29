const dbConnect = require('./mongodb');

const update = async ()=>{
    let data =await dbConnect();
    let result =await data.updateOne(
        {name:"S20"},
        {$set : {name:"Samsung S series",price:750}}
    )
};
// console.warn(result)
update();
const dbConnect = require('./mongodb');

const deleteData =async ()=>{
    let data =await dbConnect();
    let result =await data.deleteOne({name:"i-phone max pro"})

};

deleteData();
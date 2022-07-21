const mongoose = require('mongoose');

const db_name = "ninjas_db"

mongoose.connect(`mongodb+srv://root:rootroot@clusterjuly.ddtxu7p.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


    // copy paste this then change db_name for future projects
     
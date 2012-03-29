customSchema(function () {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var Products = new Schema({
          cucumbers      : ObjectId
        , tomatoes       : String
        , zucchinni      : String
    });

    var goods = mongoose.model('Products', Products);

    module.exports['Products'] = goods;
});



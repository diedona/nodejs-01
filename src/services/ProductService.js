const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const product = mongoose.model("Product");

module.exports = {
    getAll() {
        return product.find();
    },
    getById(id) {
        return product.findById(id);
    },
    getPaginated(page, limit = 3) {
        return product.paginate({}, {page, limit});
    },
    save(obj) {
        return product.create(obj);
    },
    update(id, obj) {
        return product.findByIdAndUpdate(id, obj, {new: true});
    },
    delete(id) {
        return product.findByIdAndDelete(id);
    }
}
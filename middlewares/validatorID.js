const mongoose = require("mongoose");

const validateID = (value) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
        console.log("Error: Invalid ID. Not ObjectID.");
        throw new Error("Invalid ID. Not ObjectID.");
    }
    // console.log("valid id");
    return true;
}

module.exports = {
    validateID
}
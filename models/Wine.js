const { default: mongoose } = require("mongoose");

const wineSchema = new mongoose.Schema({
    wine_name: String,
    producer_name: String,
    country: String
});

module.exports = mongoose.model("Wine", wineSchema);
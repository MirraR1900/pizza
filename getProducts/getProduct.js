module.exports.getProduct = async  function(data) {
    const object = await data.find({});
    return object;
}
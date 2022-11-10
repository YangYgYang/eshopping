const productController = {
    getProducts: (req, res, next) => {
        res.json({
            name:"綠茶籽精華",
            price:"1300"
        })
    }

}


module.exports = productController
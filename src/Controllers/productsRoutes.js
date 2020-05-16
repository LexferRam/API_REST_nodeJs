const products = require('../Products.json');
const uuid = require('uuid');

module.exports = {
    getProducts: (req, res) => {
        res.json(products);
    },
    addProducts: (req, res) => {
        const newProduct = {
            id: uuid.v4(),
            product: req.body.product,
            price: req.body.price,
            year: req.body.year
        }
        if (!newProduct.product || !newProduct.price || !newProduct.year) {
            return res.status(400).json({ msg: 'error!' })
        }
        products.push(newProduct);
        //devolviendo productos actualizados
        res.json(products);
        //redireccionando a la misma ruta con products actualizados
        //res.redirect('/')
    },
    getSingleProducts: (req, res) => {
        const found = products.some(product => product.id === parseInt(req.params.id))

        if (found) {
            res.json(products.filter(product => product.id === parseInt(req.params.id)))
        } else {
            res.status(400).json({ msg: `No product with the id of ${req.params.id}` })
        }
    },
    updateProducts: (req, res) => {
        const found = products.some(product => product.id === parseInt(req.params.id));
        const updProduct = req.body;
        if (found) {
            products.forEach(product => {
                if (product.id === parseInt(req.params.id)) {
                    product.product = updProduct.product ? updProduct.product : product.product;
                    product.price = updProduct.price ? updProduct.price : product.price;
                    product.year = updProduct.year ? updProduct.year : product.year;

                    res.json({ msg: 'Product updated', products })//devuelve solo producto actualizado
                }
            })
        } else {
            return res.status(400).json({ msg: 'error!' })
        }
    },
    deleteProducts: (req, res) => {
        const { id } = req.params;
        const found = products.some(product => product.id === parseInt(id));

        if (found) {
            products.forEach((product, i) => {
                if (product.id === parseInt(id)) {
                    products.splice(i, 1);
                }
            });
        } else {
            res.status(400).json({ msg: `No product with the id of ${req.params.id}` })
        }

        res.json(products)

    }

}

const mongodb = require('mongoose');

const Cart = require('./cartSchema');

exports.saveItem = (req, res) => {

    const newCart= new Cart({
        customerId: req.body.customerId,
        itemId: req.body.itemId,
        name: req.body.name,
        number: req.body.number,
        series: req.body.series,
        price: req.body.price,
        img: req.body.img,
        amount: req.body.amount,
    })

    newCart.save()
    .then(() => {
        res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Order was saved successfully'
        })
    })
    .catch(() => {
        res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create order'
        })
    })
}

exports.getOrders = (req, res) => {
    Cart.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.patchItem = (req, res) => {
    Cart.updateOne({ itemId: req.body.itemId, customerId: req.body.customerId }, {
    ...req.body,
    amount: req.body.amount,
    })

    .then(() => {
    res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Product updated successfully'
        })
    })
    .catch(() => {
    res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to update product'
        })
    })
}


exports.deleteItem = (req, res) => {
    Cart.exists({ itemId: req.body.itemId, customerId: req.body.customerId }, (err, result) => {
      if(err) {
        return res.status(400).json(err)
      } 
      else {
        if(result){
          Cart.deleteOne({ itemId: req.body.itemId, customerId: req.body.customerId })
            .then(() => {
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Product deleted'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to delete product'
              })
            })
        }
        else {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Ooops this product does not exist'
          })
        }
      }
    })
  }
exports.deleteCart = (req, res) => {
    Cart.exists({ customerId: req.body.customerId }, (err, result) => {
      if(err) {
        return res.status(400).json(err)
      } 
      else {
        if(result){
          Cart.deleteMany({ customerId: req.body.customerId })
            .then(() => {
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Products deleted'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to delete product'
              })
            })
        }
        else {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Ooops this product does not exist'
          })
        }
      }
    })
  }
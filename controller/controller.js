const { Menu, Resto, Order, ListMenu } = require('../models/index.js')
const { Op } = require('sequelize')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'menumu.menu@gmail.com',
    pass: 'menu1234'
  }
});


class Controller {
  static rootPage(req, res) {
    res.redirect('/menu')
  }
}

class MenuControl {
  //read
  static showMenu(req, res) {
    Menu.findAll({})
      .then(data => {
        res.render('menu', { title: "MENUMU", data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static OrderMenu(req, res) {
    let word = req.params.makanan
    let title = word.toUpperCase()
    ListMenu.findAll({
      where: {
        makanan: {
          [Op.iLike]: '%' + word + '%'
        },
      },
      include: [Resto]
    })
      .then(result => {
        let data = result
        res.render('listspesific', { data, title })
      })
      .catch(err => {
        res.send(err)
      })
  }

  //add
  static requestMenu(req, res) {
    res.render('form')
  }

  // static saveRequest(req, res) {
  //   let input = {
  //     nama: req.body.nama,
  //     saran: req.body.saran,
  //   }
  //   MenuRequest.create(input)
  //     .then(res => {
  //       res.redirect('/')
  //     })
  //     .catch(err => {
  //       res.send(err)
  //     })
  // }

  // //delete
  // static deleteRequest(req, res) {
  //   let id = Number(req.params.id)
  //   MenuRequest.destroy({
  //     where: { id }
  //   })
  //     .then(result => {
  //       res.redirect('/')
  //     })
  //     .catch(err => {
  //       res.send(err)
  //     })
  // }
}

class RestoControl {
  static showAllResto(req, res) {
    Resto.findAll({})
      .then(data => {
        // console.log(data);
        res.render('resto', { title: "RESTOMU", data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static checkResto(req, res) {
    let id = Number(req.params.id)
    Resto.findOne({
      where: { id },
      include: [{
        model: ListMenu,
        // where: {id}
      }]
    })
      .then(result => {
        let data = result
        // console.log(result);
        res.render('spesificResto', { data })
      })
      .catch(err => {
        res.send(err)
      })
  }
}

class OrderControl {
  static showAllOrder(req, res) {
    // if(req.session.isOrdered === true){
      Order.findAll({
        attributes: ['id', 'harga', 'MenuId', 'RestoId', 'namaMakanan'],
        include: [ Resto, Menu ]
      })
        .then(result => {
          let data = result
          res.render('orders', { title: "YOUR ORDER", data })
        })
        .catch(err => {
          res.send(err)
        })
    // } else {
    //   res.redirect('/menu')
    // }
  }

  static addOrder(req, res) {
    req.session.isOrdered = true
    let input = {
      harga: Number(req.query.harga),
      RestoId: Number(req.query.RestoId),
      MenuId: Number(req.query.MenuId),
      namaMakanan: req.query.namaMakanan,
    }
    Order.create(input)
      .then(result => {
        // console.log(result);
        res.redirect('/order')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static deleteOrder(req, res) {
    let id = Number(req.params.id)
    Order.destroy({
      where: {id}
    })
    .then(reult=>{
      res.redirect('/order')
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static completeOrder (req,res){
    req.session.isOrdered = false

    let mailOptions = {
      from: 'menumu.menu@gmail.com',
      to: `${req.body.email}`,
      subject: 'Thank You For Ordering',
      text: `Thank You For Ordering from Menumu, food coming soon via ${req.body.send_via}. Your sub total is ${req.body.total}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
      }
    }); 

    Order.destroy({
      where:{}
    })
    .then(result=>{
      res.render('thanks')
    })
    .catch(err=>{
      res.send(err)
    })
  }

}

module.exports = { Controller, MenuControl, RestoControl, OrderControl }
const { Menu, Resto, Order, ListMenu } = require('../models/index.js')

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
        console.log(data);
        res.render('menu', { title: "MENUMU" ,data })
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
  static showAllResto(req,res){
    Resto.findAll({})
      .then(data => {
        console.log(data);
        res.render('resto', { title: "RESTOMU" ,data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static checkResto(req,res){
    let id = Number(req.params.id)
    Resto.findOne({
      where:{id},
      include:[ListMenu]
    })
    .then(result=>{
      let data = result
      console.log(result);
      res.render('spesificResto', {data})
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = { Controller, MenuControl , RestoControl }
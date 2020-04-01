const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
var PromiseAll = require('promises-all');

const mongoose = require('mongoose');
var mysql = require('mysql');

const cidade_model = require("./model/cidades.model");

const app = express();
const port = process.env.PORT ||  5000;


mongoose.connect('mongodb://localhost:27017/mongodb-vs-mysql',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, function(err){
    if(err){
        console.log(err)
    }else{
        //console.log('Banco de Dados MongoDB CONECTADO com sucesso!')
    }
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'mongodb-vs-mysql'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.use(cors());
app.use(cookieParser());
app.use(express.json());


//INSERT DATA MONGODB >>> MYSQL
async function import_cidades(){
  const data = await cidade_model.find({});
  var array = [];
  data.map(e => {
    array.push([e._id,e.nome_cidade,e.estados_cod_estado,e.createdAt,e.updatedAt]);
  })

  var sql = "INSERT INTO cidades (_id, nome_cidade,estados_cod_estado,createdAt,updatedAt) VALUES ? ";
  con.query(sql, [array], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  //console.log(array);
}
//import_cidades();

console.log('-------- Iniciando Script ------------');

var tempoInicio = Date.now();
PromiseAll.all([import_cidades()]).then(function (){
    var tempoFim = Date.now();
    console.log(((tempoFim-tempoInicio)/1000)+' segundos ');
    console.log('-------- Script Finalizado -----------');
})


app.listen(port,function (){
    //console.log(`Server running on port ${port}`);
})







// async function find_estados(){
//   const data = await estado_model.find({});
//   var array = [];
//   data.map(e => {
//     array.push([e._id,e.nome_estado,e.uf_estado,e.createdAt,e.updatedAt]);
//   })

// var sql = "INSERT INTO estados (_id, nome_estado,uf_estado,createdAt,updatedAt) VALUES ? ";
// con.query(sql, [array], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });

//   console.log(array);
// }
// find_estados();


// async function find_empresas(){
//   const data = await empresa_model.find({});
//   var array = [];
//   data.map(e => {
//     array.push([e._id,e.nome_empresa,e.descricao_empresa,e.endereco_empresa,e.fone_empresa,
//       e.cep_empresa,e.cidades_cod_cidade,e.createdAt,e.updatedAt]);
//   })

//   var sql = "INSERT INTO empresas (_id, nome_empresa,descricao_empresa,endereco_empresa,fone_empresa,cep_empresa,cidades_cod_cidade,createdAt,updatedAt) VALUES ? ";
//   con.query(sql, [array], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });

//   console.log(array);
// }
// find_empresas();


// async function find_clientes(){
//   const data = await cliente_model.find({});
//   var array = [];
//   data.map(e => {
//     array.push([e._id,e.nome_cliente,e.email_cliente,e.endereco_cliente,e.cep_cliente,
//       e.fone_cliente,e.empresas_cod_empresa,e.createdAt,e.updatedAt]);
//   })

//   var sql = "INSERT INTO clientes (_id, nome_cliente,email_cliente,endereco_cliente,cep_cliente,fone_cliente,empresas_cod_empresa,createdAt,updatedAt) VALUES ? ";
//   // con.query(sql, [array], function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Number of records inserted: " + result.affectedRows);
//   // });
//   array.map(async a =>{
//     await con.query(sql, [[a]], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   })
//    //console.log(array);
// }
// find_clientes();
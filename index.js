const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));
const port = process.env.PORT ||3001;
var hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partials');
var json=require("./data/datos.json");
hbs.registerHelper("productos",()=>{
    var pro=JSON.stringify(json);
    var pro2=JSON.parse(pro);
    let out="";
    for(let i=0;i<pro2.length;i++){
        out=out +'<div class="Producto">'+
        '<img class="ImagenProducto" src="'+pro2[i].img+'" width="250" height="200" alt="">'+
        '<h3 id="Texto">'+pro2[i].info+'</h3>'+
        '<h3 id="TextoP">$'+pro2[i].costo+' <span class="icon-cart"></span></h3>'+
    '</div>';
    }
    return out ;
});




app.set('view engine','hbs');

app.get('/', function (req, res) {

    res.render('home');

})



  

app.listen(port, ()=>{
      console.log(`Escuchando peticiones en el puerto ${port}`);
  });
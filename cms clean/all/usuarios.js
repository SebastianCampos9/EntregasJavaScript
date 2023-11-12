let allUsuarios = [

{
    id: 1,
    usuario:"CMS", 
    contraseña:"12345",
    admin: true,
},


];


JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(allUsuarios));
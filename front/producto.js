function mostrarDatos(){
    let request = sendRequest('producto','GET','');
    let table = document.getElementById('productotable');
    table.innerHTML ="";
    request.onload = function(){
        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element._id}</td>
            <td>${element.nombre}</td>
            <td>${element.catalogacion}</td>
            <td>${element.idproducto}</td>
            <td>${element.referencia}</td>
            <td>${element.valor}</td>
            <td>
                <button type = "button" class= "btn btn-primary" onclick = 'cargarProducto("${element._id}")'> Editar   </button>
                <button type= "button" class="btn btn-danger" onclick = 'deleteproducto("${element._id}")' > Eliminar </button>
            </td>
            </tr>
            `
        });
    }
    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan = "">Error al traer datos</td>
        </tr>
        `
    }
}
function deleteproducto(id){
    let request = sendRequest('producto/' +id,'DELETE','');
    request.onload = function (){
        mostrarDatos();
    }
}
function agregarProducto(){
    let nom = document.getElementById('nombre-n').value
    let cat = document.getElementById('catalogacion-n').value
    let idp = document.getElementById('idproducto-n').value
    let ref = document.getElementById('referencia-n').value
    let val = document.getElementById('valor-n').value
    let data = {'nombre':nom,'catalogacion':cat, 'idproducto':idp,'referencia':ref,'valor':val,}
    let request = sendRequest('producto/','POST',data);
    request.onload = function(){
        window.location = 'producto.html'
    }
    request.onerror = function(){
        alert("Error al guardar los datos")
    }
}
function cargarProducto(id){
    
    let request = sendRequest('producto/' +id, 'GET', '');

    let nom = document.getElementById("nombre-n")
    let cat = document.getElementById("catalogacion-n")
    let idp =document.getElementById("idproducto-n")
    let ref =document.getElementById("referencia-n")
    let val =document.getElementById("valor-n")
        request.onload = function(){
        let data = request.response;
        nom.value = data.nombre
        cat.value = data.catalogacion
        idp.value = data.idproducto
        ref.value = data.referencia
        val.value = data.valor
        }
    request.onerror = function(){
        alert("Error al guardar los datos")
    };
}   
function editarproducto(id){
    let nom = document.getElementById('nombre-n').value
    let cat = document.getElementById('catalogacion-n').value
    let idp = document.getElementById('idproducto-n').value
    let ref = document.getElementById('referencia-n').value
    let val = document.getElementById('valor-n').value
    let data = {'nombre':nom,'catalogacion':cat, 'idproducto':idp,'referencia':ref,'valor':val,}
    
    let request = sendRequest('producto/'+id,'PUT',data);

    request.onload = function(){
        window.location = 'producto.html'
    }
    request.onerror = function(){
        alert("Error al modificar los productos")
    }
}


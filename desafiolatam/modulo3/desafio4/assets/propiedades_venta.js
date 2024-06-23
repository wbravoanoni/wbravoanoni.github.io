
    let propiedades_venta_resumen = [];

    if(url.pathname == '/index.html'){
        for(i=0;i<=maxElementos-1;i++){
            propiedades_venta_resumen.push(propiedades_venta[i])
        }
    }else{
      propiedades_venta_resumen = propiedades_venta;
    }

    const contenidoVentas = document.querySelector("#contenido_ventas");

    let cajaVenta = '';

    for(propiedad_venta of propiedades_venta_resumen){

      let fumar = propiedad_venta.smoke ? 'Permitido fumar' : 'No se permite fumar';
      let fumar_clase = propiedad_venta.smoke ? 'text-success' : 'text-danger';

      let mascotas = propiedad_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
      let mascotas_clase = propiedad_venta.pets ? 'text-success' : 'text-danger';

      let habitaciones = propiedad_venta.habitaciones > 1 ? propiedad_venta.habitaciones + ' Habitaciones': propiedad_venta.habitaciones + ' Habitación';
      let banios = propiedad_venta.banio > 1 ? propiedad_venta.banio + ' Baños': propiedad_venta.banio + ' Baño';

      cajaVenta += `
      <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src=" ${propiedad_venta.src}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">
                ${propiedad_venta.nombre}
              </h5>
              <p class="card-text">
                ${propiedad_venta.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                ${propiedad_venta.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i>  ${habitaciones} |
                <i class="fas fa-bath"></i>  ${banios}
              </p>
              <p><i class="fas fa-dollar-sign"></i>  ${propiedad_venta.costo}</p>
              <p class="${fumar_clase}">
                <i class="fas fa-smoking-ban"></i> ${fumar}
              </p>
              <p class="${mascotas_clase}">
                <i class="fa-solid fa-ban"></i> ${mascotas}
              </p>
            </div>
          </div>
        </div>  
      `;
    }

    contenidoVentas.innerHTML = cajaVenta;
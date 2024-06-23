
    let propiedades_alquiler_resumen = [];

    if(url.pathname == '/index.html'){
        for(i=0;i<=maxElementos-1;i++){
            propiedades_alquiler_resumen.push(propiedades_alquiler[i])
        }
    }else{
        propiedades_alquiler_resumen = propiedades_alquiler;
    }

    const contenidoAlquiler = document.querySelector("#contenido_alquiler");

    let cajaAlquiler = '';

    for(propiedad_alquiler of propiedades_alquiler_resumen){

        let fumar = propiedad_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar';
        let fumar_clase = propiedad_alquiler.smoke ? 'text-success' : 'text-danger';

        let mascotas = propiedad_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
        let mascotas_clase = propiedad_alquiler.pets ? 'text-success' : 'text-danger';

        let habitaciones = propiedad_alquiler.habitaciones > 1 ? propiedad_alquiler.habitaciones + ' Habitaciones': propiedad_alquiler.habitaciones + ' Habitación';
        let banios = propiedad_alquiler.banio > 1 ? propiedad_alquiler.banio + ' Baños': propiedad_alquiler.banio + ' Baño';

        cajaAlquiler += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src=" ${propiedad_alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${propiedad_alquiler.nombre}
                </h5>
                <p class="card-text">
                ${propiedad_alquiler.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i>
                ${propiedad_alquiler.ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i>  ${habitaciones} |
                <i class="fas fa-bath"></i>  ${banios}
                </p>
                <p><i class="fas fa-dollar-sign"></i>  ${propiedad_alquiler.costo}</p>
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

    contenidoAlquiler.innerHTML = cajaAlquiler;
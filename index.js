let iconos = ["fas fa-cat", "fas fa-crow", "fas fa-dog", "fas fa-dove", "fas fa-dragon"],
    titulo = ["DISEÑO GRÁFICO", "WEB", "REDES SOCIALES", "AUDIOVISUAL", "CONSULTORIA"],
    info = ["Servicios de diseño de imagen y marca, branding, logos, papelería, gráfica, publicidad, cartelería, vidrieras y stands.", "Desarrollamos sitios web institucionales, blogs, magazines, y desarrollos a medida con plataforma de administración. UX & UI Design.", "Promocionamos tus publicaciones. Contenidos según el segmento de mercado y público objetivo al que nos estemos orientando.", "Fotografía de producto y campaña. Retoque fotográfico. Edición y post producción de video. Animación 2D/3D y Motion Graphics.", "Start Up Proyectos. Estrategia de Social Media. Diagnóstico Ecommerce. Planning integral Ecommerce. Estrategia de Branding."];


function lista(){
    for(i = 0; i < 5; i++){
        document.getElementsByClassName("lista")[0].innerHTML += "<article class='articulo'><figure class='izq'><i class='" + iconos[i] + "'></i><figcaption class='der'><h1>" + titulo[i] + "</h1><p>" + info[i] + "</p></figcaption></figure></article>";
    }
}
let iconos = ["fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle", "fas fa-circle"],
    info = ["A reference / link of the website where the design is will be requested. It must be of good quality, so I will be able to appreciate clearly the markings, colors, etc.", "If the designs are made in a free third-party source (for example: Lioden), a screenshot must be sent with the categories of base colors and markings (also with the category of decorations if you want them to be seen in the preset).", "It must be indicated if a particular texture is desired for the preset, otherwise the textures that seem convenient to me will be used.", "I work with Photoshop, so if you want me to use files you already have to modify or make the preset, try to convert those files to PSD.", "Screenshots of the process will be sent as the preset is made, this is the moment to request changes. Refunds will not be accepted once the preset is finished, if I have made a mistake I will fix it for free.", "Once the preset has been delivered and the payment has been made, any additional or change that you want me to make must be paid.", "When you upload the .FHP file you must credit me for it.", "Once the full payment has been made, I will send you the preset files.", "If you have purchased a preset made by me from someone else, I will not make free edits.", "You agree not to make any changes to the preset without my permission.", "I will agree to make up to 5 presets. Each place on the waiting list will be occupied in the order of request and you will be notified of the waiting list, for that reason the preset may take time. DON'T rush me."],

//Commissions
    icon = ["fas fa-hashtag", "fas fa-image", "fas fa-paw", "fas fa-file-alt", "fas fa-plus"],
    titlecomm = ["Discord DM", "Reference", "Texture", "Preset Number", "Extras"]
    infocomm = ["You can DM me by discord in case you want a commission.", "A reference will be necessary to make the preset.", "You must tell me if you want me to use a particular texture.", "The desired preset number must be specified. (optional)", "If you want an extra, it must be told, as that will change the price."],

//Payment
    imagesPaym = ["wu", "cpu", "ticket"],
    tituloPaym = ["Western Union", "Cash Pick Up", "Ticket"],
    infoPaym = ["I accept Western Union only (Payment preferably €, otherwise USD).", "You will choose the option 'Cash pick up' in the section 'How does your receiver want the money?'.", "You must send me a photo or screenshot of the ticket: the full name, country from which it comes, amount of money and Tracking Number (MTCN) must appear."],

//Shop
    images = ["1", "2", "3", "4", "5", "6"],
    text = ["Grey Web Lady (5 usd/euros)", "Pale Sweetheart (6 usd/euros)", "Tricolor Wolf (7 usd/euros)", "Meek Beast (12 usd/euros)", "The Protector (12 usd/euros)", "Mystical Lady (9 usd/euros)"];


function lista(){
    for(i = 0; i < 11; i++){
        document.getElementsByClassName("lista")[0].innerHTML += "<article class='articulo'><figure class='izq'><i class='" + iconos[i] + "'></i><figcaption class='der'><p>" + info[i] + "</p></figcaption></figure></article>";
    }

    for(j = 0; j < 3; j++){
        document.getElementsByClassName("treecircles")[0].innerHTML += "<article><figure><img src='assets/images/" + imagesPaym[j] + ".png' class='image3'></figure><div class='payment'><h2>" + tituloPaym[j] + "</h2><p>" + infoPaym[j] + "</p></article>";
    }

    for(k = 0; k < 5; k++){
        document.getElementsByClassName("container")[0].innerHTML += "<article class='forcomm'><figure class='up'><i class='" + icon[k] + "'></i><figurecaption class='right'><h2>" + titlecomm[k] + "</h2><p>" + infocomm[k] + "</p></figcaption></figure></article>";
    }

    for(l = 0; l < 6; l++){
        document.getElementById("row").innerHTML += "<li class='column'><img src='assets/images/" + images[l] + ".png' onclick='openLightbox(" + images[l] + ")' alt='Shop image' width='' height=''></li>";
    }
}

function openLightbox(img){
    //El lightbox se va a mostrar como un elemento de bloque.
    document.getElementById('imagen').setAttribute("src","assets/images/" + img + ".png");
    document.getElementById('light').setAttribute("class", "hi");
    document.getElementsByClassName("text")[0].innerHTML = text[img-1];
}
  
  function closeLightbox(){
    document.getElementById('light').setAttribute("class", "bye");
}
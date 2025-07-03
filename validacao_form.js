var formEl = document.getElementById("meuForm");

//CHAMA A FUNÇÃO CAPTURA_EVENTOS
captura_eventos(formEl, 'submit', formValid);

//FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao) {
    //Teste addEventListener
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    }
    //Teste attachEvent
    else if (objeto.attachEvent) {
        var eventoAttach = 'on' + evento;
        objeto.attachEvent(eventoAttach, funcao);
    }
}

//FUNÇÃO PARA CANCELAR EVENTOS
function cancela_evento(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

//FUNÇÃO QUE VERIFICA OS CAMPOS RADIO E CHECKBOX
function verificaCampos(campo, evento) {
    //variavel que verifica os radios
    var checados = false;
    //verifica os radios
    for (var i = 0; i < campo.length; i++) {
        if (campo[i].checked) {
            checados = true;
        }
    }

    if (!checados) {
        alert('Marque o campo ' + campo[0].name);
        cancela_evento(evento);
        return false;
    }
    return true;
}

function formValid(event) {
    //pega os campos text e select
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades.value,
        campoRadio = formEl.sexo,
        campoCheckbox = formEl.rede;

    //verifica campo de texto
    if (campoNome.length == 0) {
        alert("O campo Nome é obrigatório");
        cancela_evento(event);
        return false;
    }

    //verifica campo de seleção
    if (campoCidade === "") {
        alert("Selecione uma cidade");
        cancela_evento(event);
        return false;
    }

    //chama a função que verifica campos para o radio
    if (!verificaCampos(campoRadio, event)) {
        return false;
    }

    //chama a função verifica campos para o checkbox
    if (!verificaCampos(campoCheckbox, event)) {
        return false;
    }
}
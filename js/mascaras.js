import
{
    apenasnumero,
    apenasalfanumerico,
    limitar_caracteres
} from "./funcoesaux.js";

export function mas_padraocnpj(campo)
{
    let valor = campo.value;
    valor = apenasalfanumerico(valor);
    valor = limitar_caracteres(valor, 14)
    // aplica a cara
    if (valor.length > 12) {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]{3})([A-Za-z0-9]{3})([A-Za-z0-9]{4})([A-Za-z0-9]{2})$/,
            "$1.$2.$3/$4-$5"
        );
    }
      else if (valor.length > 8) {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]{3})([A-Za-z0-9]{3})([A-Za-z0-9]*)$/,
            "$1.$2.$3/$4"
        );
    }
    else if (valor.length > 5) {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]{3})([A-Za-z0-9]*)$/,
            "$1.$2.$3"
        );
    }
     else if (valor.length > 2) {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]*)$/,
            "$1.$2"
        );
    }
    campo.value = valor;
}

export function mas_padraocpf(campo)
{    
    let valor = campo.value;
    valor = apenasnumero(valor);
    valor = limitar_caracteres(valor, 11)
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    campo.value=valor;
}

export function mas_padraotelefone(campo)
{
    let valor = campo.value;
    valor = apenasnumero(valor);
    valor = limitar_caracteres(valor, 11)
    valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
    valor = valor.replace (/(\d{5})(\d)/, "$1-$2");
    campo.value = valor;
}

export function mas_padraorg(campo)
{
    let valor = campo.value;

    valor = apenasalfanumerico(valor);

    valor = limitar_caracteres(valor,9);


    if(valor.length > 8)
    {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]{3})([A-Za-z0-9]{3})([A-Za-z0-9])$/,
            "$1.$2.$3-$4"
        );
    }
    else if(valor.length > 5)
    {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]{3})([A-Za-z0-9]*)$/,
            "$1.$2.$3"
        );
    }
    else if(valor.length > 2)
    {
        valor = valor.replace(
            /^([A-Za-z0-9]{2})([A-Za-z0-9]*)$/,
            "$1.$2"
        );
    }


    campo.value = valor;
}

export  function mas_cep(campo)
{
    let valor = campo.value;
    valor = apenasnumero(valor);
    valor = limitar_caracteres(valor,8);
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    campo.value=valor;
}


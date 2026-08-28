export function apenasnumero(valor)
{

    valor = valor.replace(/\D/g, "");
    return valor;
}

export function apenasalfanumerico(valor)
{
    valor = valor.replace(/[^A-Za-z0-9]/g,"");
    return valor;
}

export function limitar_caracteres(valor, limite)
{
    return valor.substring(0, limite);
}

export function aplicarmascara (valor, regex, formato)
{
    return valor.replace(regex, formato);
}

export function validar_tamanho(campo, tamanho)
{
    return campo.value.length >= tamanho;
}

export function verificarmaiuscula (campo)
{
    return /[A-Z]/.test(campo.value);
}

export function verificarminuscula(campo)
{
    return /[a-z]/.test (campo.value);    
}

export function verificarnumeros (campo)
{
    return /\d/.test (campo.value); 
}

export function verificarcaracteres (campo)
{
    return /[!@#$%^&*(),.?":{}|<>]/.test (campo.value);  
}

export function mostrar(elemento)
{
    return elemento.classList.remove(elemento);
}

export function esconder()
{
  
}

export function atualizar_barra()
{}



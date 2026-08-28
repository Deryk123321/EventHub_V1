import{
    validar_tamanho,
    verificarcaracteres,
    verificarnumeros,
    verificarmaiuscula,
    verificarminuscula
} from "./funcoesaux";

function validar_cnpj(campo)
{
    let valor = campo.value;
    validar_tamanho(valor, 14);
}
function validar_cpf()
{
    let valor = campo.value;
    validar_tamanho(valor, 11);
    
}
function validar_senha()
{

}

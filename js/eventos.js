import 
{
    cpf,
    cnpj,
    rg,
    cep,
    telefone,
    telefonee
} from "./elementos.js";

import
{
    mas_padraocnpj,
    mas_padraocpf,
    mas_cep,
    mas_padraorg,
    mas_padraotelefone
} from "./mascaras.js";

rg.addEventListener("input", () => mas_padraorg(rg));
cnpj.addEventListener("input", () => mas_padraocnpj(cnpj));
cep.addEventListener("input", () => mas_cep(cep));
cpf.addEventListener("input",() =>  mas_padraocpf(cpf));
telefonee.addEventListener("input", () => mas_padraotelefone(telefonee));
telefone.addEventListener("input",() => mas_padraotelefone(telefone));
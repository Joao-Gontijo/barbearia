import { http } from "./config"


export default {
    listar:()=>{
        return http.get('servicos')
    },

    salvar:(servico) =>{

        return http.post('servico', servico);
    },

    atualizar:(servico) => {

        return http.put('servico', servico)
    },

    apagar:(servico) => {
        return http.delete('servico',{data:servico})
    }

    
}
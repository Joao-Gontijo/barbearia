import { http } from "./config"


export default {
    listar:()=>{
        return http.get('clientes')
    },

    salvar:(pessoa) =>{

        return http.post('cliente', pessoa);
    },

    atualizar:(pessoa) => {

        return http.put('cliente', pessoa)
    },

    apagar:(pessoa) => {
        return http.delete('cliente',{data:pessoa})
    },  
}
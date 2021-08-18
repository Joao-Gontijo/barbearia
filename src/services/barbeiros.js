import { http } from "./config"


export default {
    listar:()=>{
        return http.get('barbeiros')
    },

    salvar:(barbeiro) =>{

        return http.post('barbeiro', barbeiro);
    },

    atualizar:(barbeiro) => {

        return http.put('barbeiro', barbeiro)
    },

    apagar:(barbeiro) => {
        return http.delete('barbeiro',{data:barbeiro})
    }

    
}
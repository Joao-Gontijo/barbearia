import { http } from "./config"

export default {
    enviarToken:()=>{
        return http.get('authenticate')
    }
}
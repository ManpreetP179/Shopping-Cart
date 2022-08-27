
// https://myaccount.google.com/lesssecureapps?pli=1
// https://admin.google.com/ac/security/lsa
// https://github.com/collectiveidea/delayed_job
// https://guides.rubyonrails.org/threading_and_code_execution.html
// rails g delayed_job:active_record


const baseURL = "http://localhost:3000/api/v1";
export const Product =  {
    index() {
        return fetch(`${baseURL}/products`).then((response) => {
            return response.json();
        })
    },
  
    create(params) {
        return fetch(`${baseURL}/products`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type":"application/josn",
            },
            body:JSON.stringify(params),
        }).then(res => res.json())
        
    },
    show(id) {
        return fetch(`${baseURL}/products/${id}`).then((response)=> {response.json();})
    },
    update(id, params) {
        return fetch(`${baseURL}/products/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    destory(id){
        return fetch(`${baseURL}/products/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
    }
}

export const Session ={
    create(params){
        return fetch(`${baseURL}/session`,{
        method: "POST",
        credentials: "include",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(params)}).then( res => res.json())
    }
}


const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:3000/api/v1';
export const ProductAxios = {
    index() {
        return axios.get(`${baseURL}/products`)
    },
    create(params) {
        return axios.post(`${baseURL}/products`,
        JSON.stringify(params),  
        {
            headers: {"Content-Type":"application/json"},
            withCredentials: true
        })        
    },
    show(id) {
        return axios.get(`${baseURL}/products/${id}`)
    },
 
    update(id, params) {
        return fetch(`${baseURL}/products/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    destory(id){
        return fetch(`${baseURL}/products/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
    }
}


export const SessionAxsios = {
    
    create(params) {
        return axios.post(`/session`,
        JSON.stringify(params),  
        {
            headers: {"Content-Type":"application/json"},
            withCredentials: true
        })        
    },

}
import axios from 'axios';


export const contactSend = axios.create({
    baseURL: 'https://webhook.site/c255ffeb-104b-434c-8297-78e2fcb26fd7'
})

export const getData = axios.create({
    baseURL: 'https://accenture-server-rn.herokuapp.com/'
})


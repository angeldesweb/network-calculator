import { writable } from 'svelte/store';

const currentLanguage = () => {
    const { subscribe , set } = writable('en-US');

    return {
        subscribe,
        esp:() => set('es-ES'),
        eng:() => set('en-US')
    }
}

export const info = writable({
    address:'',
    network:'',
    broadcast:'',
    netmask:'',
    prefix:'',
    hosts:'',
    utilHosts:'',
    done:false
})

export const lang = currentLanguage();
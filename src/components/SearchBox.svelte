<script>
	import { info } from './../store.js';
    import {lang} from '../store';
    import { networkFinder } from 'networking-helper';
    let ip = '';
    let mask = '';
    const calculate = (e) => {
        e.preventDefault(e);

        try {
            const result = networkFinder({address:ip,mask});

            $info.address = result.address.join('.');
            $info.network = result.network.join('.');
            $info.broadcast = result.broadcast.join('.');
            $info.netmask = result.netmask.join('.');
            $info.prefix = result.prefix;
            $info.hosts = result.hosts;
            $info.utilHosts = result.utilHosts;
            $info.done = true;

            ip = '';
            mask = '';
            return result;
        } catch (error) {
            alert(error.message);
            return error;
        }
    }
</script>

<div class="search-box">
    <form on:submit={calculate}>
        <input bind:value={ip} type="text" placeholder={$lang === 'en-US' ? 'IPv4 address e.g. xxx.xxx.xxx.xxx' : 'Dirección IPv4 e.g. xxx.xxx.xxx.xxx'}>
        <input bind:value={mask} type="number" max="30" placeholder={$lang === 'en-US' ? 'Netmask prefix e.g. 30' : 'Prefijo de red e.g. 30'}>
        <button>{$lang === 'en-US' ? 'Calculate' : 'Calcular'}</button>
    </form>
</div>

<style>
    .search-box {
        width: 100%;
    }
    .search-box > form > input {
        width:100%;
        margin-top:1em;
    }
    .search-box > form > button {
        background-color: var(--main-blue);
        color:#fff;
        margin-top:1em;
        margin-bottom: 1em;
    }
    .search-box > form > button:hover {
        background-color: var(--third-blue);
    }
</style>
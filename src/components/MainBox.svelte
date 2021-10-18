<script>
	import { lang, info } from './../store.js';

    const refresh = () => {
        $info.address = '';
        $info.done = false;
    }

</script>

<div class="main-box">
    <h2>{$lang === 'en-US' ? 'Network information' : 'Información de red'}</h2>
    <hr>
    {#if !$info.done}
        {$lang === 'en-US' ? 'Type the address to find and netmask prefix in the left panel' : 'Ingrese la dirección ip y prefijo de máscara de red en el panel de la izquierda'}
        {:else}
        <div class="info-box">
            <p>{$lang === 'en-US' ? 'IPv4 address' : 'Dirección IPv4' }: { $info.address}</p>
            <p>{$lang === 'en-US' ? 'Network address' : 'Dirección de red' }: { $info.network}</p> 
            <p>{$lang === 'en-US' ? 'Broadcast address' : 'Dirección de broadcast' }: { $info.broadcast}</p> 
            <p>{$lang === 'en-US' ? 'Netmask' : 'Máscara de red' }: { $info.netmask}</p> 
            <p>{$lang === 'en-US' ? 'Prefix' : 'Prefijo' }: { $info.prefix}</p>
            <p>{$lang === 'en-US' ? 'Total addresses' : 'Direcciones en total' }: { $info.hosts}</p>
            <p>{$lang === 'en-US' ? 'Util addresses' : 'Direcciones útiles' }: { $info.utilHosts}</p>
            <br>
            <button on:click={refresh}>{$lang === 'en-US' ? 'Refresh' : 'Refrescar'}</button>
        </div>
    {/if}
</div>

<style>
    .main-box {
        background-color: var(--main-blue);
        color:var(--second-blue);
        text-align: center;
        width: 90%;
        height: 90%;
    }
    hr {
        color:var(--second-blue);
        width: 90%;
    }
    button {
        background-color: var(--main-blue);
        color:#fff;
    }
    button:hover {
        background-color: var(--second-blue);
    }
</style>
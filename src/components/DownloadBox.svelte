<script>
	import { lang } from './../store.js';
</script>

<div class="down-box">
    <a class="button" href="https://www.dropbox.com/s/somgctv9hrsc7jq/network-calculator.msi?dl=1" alt="Windows app">
        {$lang === 'en-US' ? 'Download for Windows' : 'Descarga para Windows'}
    </a>
    <br>
    <a class="button" href="https://www.dropbox.com/s/arve4d7i8oxquo3/network-calculator-linux-x64.rar?dl=1" alt="Linux app">
       {$lang === 'en-US' ? 'Download for Linux' : 'Descargar para Linux'}
    </a>
</div>

<style>
    .down-box {
        display: flex;
        flex-direction: column;
    }
    .down-box > .button {
        margin-top:1em;
        background-color: var(--main-blue);
        color:#fff;
        text-align: center;
        height:3em;
        line-height: 3em;
    }
    
    .down-box > .button:hover {
        text-decoration: none;
        background-color: var(--third-blue);
    }
</style>
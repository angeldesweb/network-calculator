<script>
	import DownloadBox from './../components/DownloadBox.svelte';
	import SearchBox from './../components/SearchBox.svelte';
	import LanguageBox from './../components/LanguageBox.svelte';

</script>

<div class="aside-box">
    <LanguageBox/>
    <hr>
    <SearchBox/>
    <hr>
    <DownloadBox/>
</div>

<style>
    hr {
        color: var(--second-blue);
    }
    .aside-box {
        color:var(--second-blue);
        padding:1em;
    }
</style>
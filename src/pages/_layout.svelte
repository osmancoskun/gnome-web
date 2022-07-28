<script>
    import Header from "../layout/header.svelte";
    import Dash from "../layout/dash.svelte";
</script>

<Header />
<div class="display-flex row">
    <Dash />
    <div class="remaining-space">
        <slot />
    </div>
</div>

<style>
    .remaining-space {
        height: calc(100vh - var(--panel-height));
        width: calc(100vw - var(--dash-width));
        padding: 50px;
    }
</style>

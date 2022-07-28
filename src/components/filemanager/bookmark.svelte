<script>
    import Icon from "../Icon.svelte";
    export let iconName = "";
    export let iconSize = 32;
    export let label = "";
    export let current = "";
    export let id = 0;
</script>

<div
    class="item"
    class:active={current == id}
    on:click={() => {
        current = id;
    }}
>
    <Icon name={iconName} size={iconSize} />
    <p>{label}</p>
</div>

<style>
    .item {
        height: 36px;
        width: 100%;
        padding: 0 8px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .item:hover {
        background-color: #f5f5f5;
    }
    p {
        margin: 0;
        padding: 0;
        margin-left: 5px;
        color: black;
    }
    .active {
        background-color: lightgray;
    }
</style>

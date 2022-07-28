<script>
    import Icon from "../components/Icon.svelte";
    import Clock from "../utilities/clock.svelte";
</script>

<div class="gnome-panel display-flex align-items-center space-between">
    <div class="name display-flex align-items-center row">
        <Icon color="white" name="home" />
        <p>Osman Coskun</p>
    </div>

    <div class="name">
        <Clock />
    </div>

    <div class="system display-flex row">
        <Icon color="white" name="wifi" />
        <Icon color="white" name="volume_up" />
        <Icon color="white" name="settings" />
    </div>
</div>

<style>
    .gnome-panel {
        margin: 0;
        padding: 0;
        height: var(--panel-height);
        background-color: black;
    }
    .name {
        color: lightgray;
        font-weight: bold;
        margin-left: 5px;
    }
    .system {
        color: white;
        margin-right: 5px;
    }
</style>

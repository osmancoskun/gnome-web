<script>
    import Button from "../components/Button.svelte";
    import Icon from "../components/Icon.svelte";
</script>

<main class="display-flex col align-items-center space-between">
    <div class="display-flex col  align-items-center space-y-2">
        <Button secondary square>
            <Icon name="person" />
        </Button>
        <Button accent square>
            <Icon name="person" />
        </Button>
        <Button primary square>
            <Icon name="person" />
        </Button>
        <Button info square>
            <Icon name="person" />
        </Button>
        <Button success square>
            <Icon name="person" />
        </Button>
        <Button warning square>
            <Icon name="person" />
        </Button>
        <Button secondary square>
            <Icon name="person" />
        </Button>
    </div>

    <Icon name="apps" size={48} />
</main>

<style>
    main {
        padding: 4px;
        margin: 0;
        height: calc(100vh - var(--dash-width));
        width: 60px;
        display: flex;
        background-color: rgb(27, 30, 30, 0.5);
        gap: 8px;
    }
</style>

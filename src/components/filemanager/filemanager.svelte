<script>
    import Icon from "../../components/Icon.svelte";
    import Input from "../../components/Input.svelte";
</script>

<div class="window">
    <div class="window-navigation">
        <div class="action-button">
            <Icon name="close" color="gray" size={20} />
            <Icon name="minimize" color="gray" size={20} />
            <Icon name="check_box_outline_blank" color="gray" size={18} />
        </div>
        <div class="navigation-buttons">
            <Icon
                outlined
                leftRound
                color="gray"
                name="chevron_left"
                size={32}
            />
            <Icon
                outlined
                rightRound
                color="gray"
                name="chevron_right"
                size={32}
            />
        </div>
        <div class="search">
            <Input height={34} adaptive type="text" placeholder="Home" />
        </div>
    </div>
    <slot />
</div>

<style>
    .window {
        background-color: #fff;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        border: 1px solid lightgray;
        display: flex;
        flex-direction: column;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
    .window-navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 48px;
        border-radius: 10px 10px 0 0;
        border-bottom: 1px solid lightgray;
        background-color: lightgray;
    }
    .action-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 5px;
        margin-right: 35px;
        width: 90px;
    }
    .navigation-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        margin-right: 10px;
    }
    .search {
        display: flex;
        align-items: center;
        width: 100%;
        margin-right: 8px;
    }
</style>

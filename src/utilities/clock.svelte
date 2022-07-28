<script>
    import { onMount } from "svelte";

    let time = new Date();
    let timeInfoVisible = false;
    $: hour = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: false,
    });
    $: minute = time.getMinutes();
    $: second = time.getSeconds();
    onMount(() => {
        setInterval(() => {
            time = new Date();
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="time">
    {hour}:{minute}:{second}
</div>

<div class="time-info" />

<style>
    .time {
        cursor: pointer;
    }
    .time-info {
        display: none;
    }
</style>

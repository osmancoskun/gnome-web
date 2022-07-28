<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let type = "text";
    export let value = "";
    export let placeholder;
    export let ghost;
    export let bordered;
    export let disabled;
    export let primary;
    export let secondary;
    export let accent;
    export let info;
    export let warning;
    export let error;
    export let success;
    export let xs;
    export let sm;
    export let md;
    export let lg;
    export let adaptive;
    export let height;
    const onInput = (e) => {
        dispatch("input", function () {});
        value = e.target.value;
    };
</script>

<input
    {type}
    {value}
    {placeholder}
    {disabled}
    on:input={onInput}
    on:change
    class="input w-full"
    class:adaptive
    class:input-xs={xs}
    class:input-sm={sm}
    class:input-md={md}
    class:input-lg={lg}
    class:input-info={info}
    class:input-ghost={ghost}
    class:input-error={error}
    class:input-accent={accent}
    class:input-primary={primary}
    class:input-warning={warning}
    class:input-success={success}
    class:input-bordered={bordered}
    class:input-secondary={secondary}
    style={`height:${height}px`}
/>

<style>
    .adaptive {
        background-color: rgb(0, 0, 0, 0.05);
    }
</style>

<script>
    export let primary, secondary, accent, ghost, link;
    export let info, success, warning, error;
    export let outline;
    export let lg, sm, xs;
    export let wide;
    export let glass;
    export let disabled;
    export let square, circle;
    export let block;
    export let loading;
    export let noanimation;
    export let classes;
</script>

<button
    on:click
    {disabled}
    class={`btn ${classes}`}
    class:btn-primary={primary}
    class:btn-secondary={secondary}
    class:btn-accent={accent}
    class:btn-ghost={ghost}
    class:btn-link={link}
    class:btn-info={info}
    class:btn-success={success}
    class:btn-warning={warning}
    class:btn-error={error}
    class:btn-outline={outline}
    class:btn-lg={lg}
    class:btn-sm={sm}
    class:btn-xs={xs}
    class:btn-wide={wide}
    class:btn-glass={glass}
    class:btn-disabled={disabled}
    class:btn-square={square}
    class:btn-circle={circle}
    class:btn-block={block}
    class:loading
    class:no-animation={noanimation}
>
    <slot />
</button>

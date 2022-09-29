<script lang="ts">
    export let label: string;
    export let value: number;

    export let min: number | undefined = undefined;
    export let max: number | undefined = undefined;
    export let step: number = 1;
    export let unit: string = undefined;

    let numberInputElement: HTMLInputElement;

    let lastPos: number = undefined;
    function pointerDown(ev: PointerEvent & { currentTarget: EventTarget & HTMLInputElement }) {
        ev.currentTarget.setPointerCapture(ev.pointerId);
        lastPos = ev.clientX;
    }

    function pointerUp(ev: PointerEvent & { currentTarget: EventTarget & HTMLInputElement }) {
        lastPos = undefined;
    }

    function pointerMove(ev: PointerEvent & { currentTarget: EventTarget & HTMLInputElement }) {
        if(lastPos !== undefined) {
            // numberInputElement.blur();
            let delta = ev.clientX - lastPos;
            value += delta * step * (ev.shiftKey ? 10 : 1) / (ev.ctrlKey ? 10 : 1);
            value = Math.round(value / step) * step;
            if(min !== undefined) value = Math.max(value, min);
            if(max !== undefined) value = Math.min(value, max);
            lastPos = ev.clientX;
        }
    }
</script>

<div class="slider"
    on:pointerdown={pointerDown}
    on:pointermove|preventDefault={pointerMove}
    on:pointerup={pointerUp}
    on:pointercancel={pointerUp}
    on:pointerleave={pointerUp}>
    <div class="label">
        {label}:
        <input
            type="number"
            value={value}
            bind:this={numberInputElement}
            on:change={ev => { value = parseFloat(ev.currentTarget.value); if(isNaN(value)){value = 0}}}>
        {unit ?? ""}
    </div>
    <!-- <input type="range" bind:value min={min} max={max} step={step ?? 0.01}> -->
</div>

<style>
    input {
        font-size: 1em;
        width: 100%;
        color: inherit;
    }

    .label {
        display: flex;
        align-items: center;
        user-select: none;
        gap: 0.1rem;
    }

    input[type="number"] {
        background-color: #396666;
        padding: 0.25rem;
        margin: 0.125rem;
        border-radius: 0.25rem;
        border: none;
        user-select: none;
    }


    input[type="number"]:focus {
        outline: darkcyan solid 0.2rem;
    }
</style>
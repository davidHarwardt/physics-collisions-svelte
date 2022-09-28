<script lang="ts">
    import { onMount } from "svelte";
    import { bind } from "svelte/internal";
    import * as canvas from "./canvas";
    import Slider from "./lib/Slider.svelte";
    let canvasContainer: HTMLDivElement;

    let test = 0;
    let framerate = canvas.getFramerate().toFixed();
    let motionEnabled = canvas.settings.world.motionEnabledStore;

    setInterval(_ => framerate = canvas.getFramerate().toFixed(), 100);

    onMount(() => {
        canvas.init(canvasContainer);
    });
</script>

<div class="container">
    <div class="canvas-container" bind:this={canvasContainer}></div>
    <div class="ui">
        <div class="heading">Simulation</div>
        <div>fps: {framerate}</div>
        <label for="check-running">running: </label>
        <input type="checkbox" id="check-running" bind:checked={canvas.settings.running}>
        <Slider label="steps" bind:value={canvas.settings.stepsPerFrame} min={1} max={1000} step={10}/>
        <hr>
        <div class="heading">World</div>
        <Slider label="restetution" bind:value={canvas.settings.world.restetution} min={0} max={1} step={0.01}/>
        <hr>
        <div class="heading">Object</div>
        <Slider label="radius" bind:value={canvas.settings.editingCircle.radius} min={10} max={100} step={1}/>
        <Slider label="mass" bind:value={canvas.settings.editingCircle.mass} min={1}/>
        <div class="btn" on:click={_ => canvas.removeSelected()}>delete selected</div>
        <hr>
        <div class="heading">Paper</div>
        <Slider label="draw freq" bind:value={canvas.settings.traceFreq} min={1} max={60} step={1} unit="Hz"/>
        <div class="btn" on:click={_ => canvas.clearPaper()}>clear</div>
        <hr>
        <div class="heading">Device Motion</div>
        <div class="btn" on:click={_ => canvas.enableMotion()}>{$motionEnabled ? "disable" : "enable"}</div>
        <Slider label="gravity" bind:value={canvas.settings.world.gravity} min={0} max={100} step={1}/>
        <Slider label="velocity" bind:value={canvas.settings.world.velocity} min={0} max={100} step={1}/>
        <hr>
        <div class="btn">pause</div>
    </div>
</div>

<style>
    .container {
        width: 100vw;
        height: 100vh;
        background-color: black;
        overflow: hidden;
    }
    
    .canvas-container {
        width: 100%;
        height: 100%;
    }

    .ui {
        position: absolute;
        right: 0;
        top: 0;
        background-color: darkslategray;
        padding: 0.5rem;
        width: 200px;
        box-sizing: border-box;
        user-select: none;
    }

    .heading {
        margin-bottom: 0.5rem;
    }

    .canvas-container {
        display: grid;
    }

    .canvas-container :global(canvas) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
    
    .btn {
        padding: 0.5rem;
        margin: 0.25rem;
        background-color: #396666;
        border-radius: 0.25rem;
    }
</style>
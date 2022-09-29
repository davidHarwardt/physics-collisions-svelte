<script lang="ts">
    export let name: string;
    export let collapsed: boolean = false;
</script>

<div class="collapsible">
    <!-- <hr> -->
    <div class="heading" on:click={_ => collapsed = !collapsed} class:open={!collapsed}>{name}</div>
    {#if !collapsed}
        <div class="content">
            <div class="side"></div>
            <div class="items">
                <slot>empty</slot>
            </div>
        </div>
    {/if}
</div>

<style>
    .heading {
        margin-bottom: 0.5rem;
        background-color: #396666;
        padding: 0.5rem;
        margin: 0.25rem -0.125rem;
        border-radius: 0.25rem;
    }

    .content {
        display: grid;
        grid-template-columns: auto 1fr;
    }
    
    .side {
        margin: 0.25rem;
        margin-left: 0;
        width: 0.125rem;
        background-color: #5c9090;
        border-radius: 0.125rem;
    }

    .heading::after {
        content: "";
        position: absolute;
        right: 1rem;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: rotate(-90deg);
        transition: 0.125s ease-out transform;

        width: 1rem;
        height: 1rem;
        background-color: #5c9090;
    }

    .heading.open::after {
        transform: rotate(-180deg);
    }

</style>
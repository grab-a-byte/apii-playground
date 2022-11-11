<script lang="ts">
    import type { Dmc } from "../../code/dmc_models";

    export let colors: Dmc[] = [];
</script>

<ul>
    {#each colors as color}
        <li>
            <p style="color: {color.Hex};">{color.Name}</p>
        </li>
    {/each}
</ul>

<script lang="ts">
    import type { Dmc } from "../../code/dmc_models";

    export let colors: Dmc[] = [];
</script>

<ul>
    {#each colors as color}
        <li style="border-width: 2px; border-style: solid; border-color: white">
            <p style="color: white;">
                {color.Name}
            </p>
            <p style="color: {color.Hex};">
                {color.Name}
            </p>
            <p style="color: white;">
                RGB: ({color.Color.R}, {color.Color.G}, {color.Color.B})
            </p>
            <p style="color: white;">
                Hex: {color.Hex}
            </p>
            <p style="color: white;">
                Floss Number: {color.Floss}
            </p>
        </li>
    {/each}
</ul>

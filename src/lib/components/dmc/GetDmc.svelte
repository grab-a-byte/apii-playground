<script lang="ts">
    import type { Dmc } from "../../code/dmc_models";
    import { Button } from "sveltestrap/src";
    import { DmcApiClient } from "../../code/clients/dmc/dmc_api_client";
    import DmcList from "./DmcList.svelte";

    let promise: Promise<Dmc[]> = null;

    let dmcClient = new DmcApiClient();

    const handleClick = () => {
        if (promise == null) {
            promise = dmcClient.getDmc();
        }
    };
</script>

<Button on:click={handleClick} color="primary" size="lg">Get DMC Colors</Button>
{#if promise != null}
    {#await promise}
        <p>Spinner</p>
    {:then values}
        <DmcList colors={values} />
    {/await}
{/if}

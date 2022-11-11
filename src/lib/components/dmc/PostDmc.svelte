<script lang="ts">
    import { DmcApiClient } from "../../code/clients/dmc/dmc_api_client";
    import type { Dmc } from "../../code/dmc_models";
    import DmcList from "./DmcList.svelte";

    let client = new DmcApiClient();
    let selected = "csv";
    let input = "";
    let response: Dmc[] = [];

    let handleSubmit = async () => {
        let lines = input.split(/\r?\n/);
        let body = {
            inputType: selected,
            inputs: lines,
        };

        let res = await client.postDmc(body);
        response = res;
        console.log(res);
    };
    let options = ["csv", "space", "hex"];
</script>

<form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select>
    <textarea bind:value={input} />
    <button type="submit"> Submit </button>
</form>

<DmcList colors={response} />

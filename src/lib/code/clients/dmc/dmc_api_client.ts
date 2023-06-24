import type { Dmc } from "../../dmc_models";

interface DmcPostRequest {
    inputType: string,
    inputs: string[]
}

class DmcApiClient {
    dmcApiUrl = "https://dmcconvertapi.grab-a-byte.dev";
    postUrl = "/dmc/submit";
    getUrl = "/dmc/get";

    async getDmc(): Promise<Dmc[]> {
        var response = await fetch(`${this.dmcApiUrl}${this.getUrl}`, { mode: "cors" });
        return (await response.json()) as Promise<Dmc[]>;
    }

    async postDmc(body: DmcPostRequest): Promise<Dmc[]> {
        var response = await fetch(`${this.dmcApiUrl}${this.postUrl}`, {
            method: "POST",
            body: JSON.stringify(body)
        })

        return response.json() as Promise<Dmc[]>;
    }
}

export {
    DmcApiClient,
    type DmcPostRequest
}
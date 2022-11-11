<script>
    import { TabContent, TabPane } from "sveltestrap";
    import GetDmc from "./GetDmc.svelte";
    import PostDmc from "./PostDmc.svelte";
</script>

<TabContent>
    <TabPane tabId="1" tab="Get">
        <GetDmc />
    </TabPane>
    <TabPane tabId="2" tab="Post">
        <PostDmc />
    </TabPane>
</TabContent>

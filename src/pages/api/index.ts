import type { APIRoute } from "astro";
export const prerender = false;
export const ALL: APIRoute = async (ctx) => {
    // console.log(ctx);
    return new Response(
        JSON.stringify({
            value: Math.random(),
        }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
import type { APIRoute } from "astro";
export const prerender = false;

import fs from 'node:fs/promises';
const filePath = "./json/cart.json"

export const GET: APIRoute = async () => {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    return new Response(data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
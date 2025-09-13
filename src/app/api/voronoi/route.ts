import { NextResponse } from 'next/server';


const VORONOI_URL = process.env.VORONOI_API_URL!;

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        console.log("URL:", url)
        const points = url.searchParams.get('points');
        console.log("SENT:", VORONOI_URL + `?points=${points}`);
        const response = await fetch(VORONOI_URL + `?points=${points}`);
        
        if(!response.ok) {
            const text = await response.text().catch(() => "");
            return NextResponse.json(
                {
                ok: false,
                error: "upstream_error",
                status: response.status,
                detail: text.slice(0, 2000),
                },
                { status: response.status }
            );
        }
        return NextResponse.json(await response.json());
    }   catch (error) {
        console.error('Error fetching Voronoi data:', error);
        return NextResponse.json({ error: 'Failed to fetch Voronoi data' }, { status: 500 });
    }
}
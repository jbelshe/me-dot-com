'use client';

import dynamic from "next/dynamic";
import type { Layout, Data } from "plotly.js";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
// import Plot from "react-plotly.js";
// import type { Data, Layout } from 'plotly.js';

interface VoronoiPlotProps {
    points: Array<Array<number>>;
    vertices: Array<Array<number>>;
    ridges: Array<Array<number>>;
    regions: { [key: string]: number[] };
    width?: number;
    height?: number;
    colors?: string[];
    showPoints?: boolean;
    showRegions?: boolean;
}

export default function VoronoiPlot({
    points = [],
    vertices = [],
    regions = {},
    width = 800,
    height = 800,
    colors = ['#ffc2d1'],
    showPoints = true,
    showRegions = true
}: VoronoiPlotProps) {
    // Prepare points data
    const pointsData: Data = {
        x: points.map(p => p[0]),
        y: points.map(p => p[1]),
        mode: 'markers',
        type: 'scatter',
        marker: { size: 5, color: 'blue' },
        //name: 'Points',
        visible: showPoints,
        showlegend: false
    };

    // Prepare regions data
    const regionsData: Data[] = Object.entries(regions).map(([regionId, regionVertices], idx) => {
        // Get the coordinates for each vertex in the region
        const x = regionVertices.map(vi => vertices[vi]?.[0] || 0);
        const y = regionVertices.map(vi => vertices[vi]?.[1] || 0);
        
        // Close the polygon by adding the first point at the end
        if (x.length > 0 && y.length > 0) {
            x.push(x[0]);
            y.push(y[0]);
        }
        const color = colors[idx % colors.length];
        return {
            x,
            y,
            fill: 'toself',
            fillcolor: color,
            line: { color: 'black', width: 1, showlegend: false},
            type: 'scatter',
            mode: 'lines',
            name: `Region ${regionId}`,
            visible: showRegions,
            showlegend: false
        };
    });

    // Combine all data
    const plotData: Data[] = [pointsData, ...regionsData];

    // Calculate axis ranges with some padding
    //const allX = [...points.map(p => p[0]), ...vertices.map(v => v[0])];
    //const allY = [...points.map(p => p[1]), ...vertices.map(v => v[1])];
    //const xRange = allX.length > 0 ? [Math.min(...allX) - 0.1, Math.max(...allX) + 0.1] : [0, 1];
    //const yRange = allY.length > 0 ? [Math.min(...allY) - 0.1, Math.max(...allY) + 0.1] : [0, 1];
    const xRange = [0, 1];
    const yRange = [0, 1];

    const layout: Partial<Layout> = {
        width,
        height,
        title: {
            text: 'Voronoi Diagram',
        },
        xaxis: { 
            showticklabels: false,
            zeroline: false,
            showgrid: false,
            range: xRange,
            scaleanchor: 'y',
            scaleratio: 1
        },
        yaxis: { 
            showticklabels: false,
            zeroline: false,
            showgrid: false,
            range: yRange,
        },
        margin: { t: 30, b: 40, l: 50, r: 30 },
        showlegend: false
    };

    return (
        <div className="flex justify-center p-6">
            <Plot
                data={plotData}
                layout={layout}
                config={{ 
                    staticPlot: true,
                    displayModeBar: false,
                    responsive: false
                }}
            />
        </div>
    );
}
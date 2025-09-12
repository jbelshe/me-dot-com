'use client';

import VoronoiPlot from '@/components/VoronoiPlot';
import { useState } from 'react';

import data from './data.json';
import { colorPalettes } from './content';

export default function VoronoiPage() {
    const [numOfPoints, setNumOfPoints] = useState(10);
    const [isPointCountValid, setIsPointCountValid] = useState(true);
    const [plotData, setPlotData] = useState( {
        points: [],
        vertices: [],
        ridges: [],
        regions: {}
    });
    const [myColors, setMyColors] = useState<string[]>(() => {
        return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    });

    const getNewColors = () => { 
        setMyColors(colorPalettes[Math.floor(Math.random() * colorPalettes.length)]);
    }
    

    return (
        <div className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left side - Controls */}
                <div className="w-full md:w-auto">
                    <h1 className="text-2xl font-bold mb-4">Voronoi Diagram Generator</h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="pointCount" className={`block text-sm font-medium text-gray-700 mb-1 
                                ${isPointCountValid ? 'text-gray-700' : 'text-red-500'}`}>
                                Enter Number of Points (4-100): 
                            </label>
                            <input
                                type="number"
                                id="pointCount"
                                value={numOfPoints}
                                onChange={(e) => {
                                    const value = e.target.valueAsNumber;
                                    setNumOfPoints(value);
                                    setIsPointCountValid(value >= 4 && value <= 100);
                                }}
                                // onBlur={(e) => {
                                //     const value = e.target.valueAsNumber;
                                //     setIsPointCountValid(value >= 4 && value <= 100);
                                // }}
                                className={
                                    `w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 border ${
                                        isPointCountValid 
                                            ? 'border-gray-300 focus:border-blue-500' 
                                            : 'border-red-500 focus:border-red-500'
                                    }`
                                }
                            />
                        </div>

                        <button 
                            disabled={!isPointCountValid}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:hover:bg-blue-500 disabled:opacity-50 transition-colors"
                            onClick={() =>  {
                                fetch('https://ttr4epvxq2mfjsno7jiksse2lm0kgcut.lambda-url.us-east-1.on.aws/?points=' + numOfPoints)
                                    .then(response => response.json())
                                    .then(data => {
                                        setPlotData(data);
                                        console.log(data);
                                        getNewColors();
                                    });
                            }}
                    >
                        Generate
                    </button>
                    </div>
                </div>
                
                {/* Right side - Voronoi Plot */}
                <div className="flex-1 flex justify-end">
                    <div className="border-2 border-gray-200 rounded p-4 w-[624px] h-[624px] flex items-center justify-center bg-white shadow-sm">
                        {plotData.points && plotData.points.length > 0 ? (
                            <VoronoiPlot 
                                width={600} 
                                height={600} 
                                points={plotData.points} 
                                vertices={plotData.vertices} 
                                ridges={plotData.ridges} 
                                regions={plotData.regions}
                                colors={myColors}
                            />
                        ) : (
                            <div className="text-gray-400">Click Generate to create a Voronoi diagram</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
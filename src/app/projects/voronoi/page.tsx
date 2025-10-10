'use client';

import VoronoiPlot from '@/components/VoronoiPlot';
import { useState } from 'react';

import { colorPalettes } from './content';

export default function VoronoiPage() {
    const [numOfPoints, setNumOfPoints] = useState(10);
    const [isPointCountValid, setIsPointCountValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [plotData, setPlotData] = useState({
        points: [],
        vertices: [],
        ridges: [],
        regions: {}
    });
    const [myColors, setMyColors] = useState<string[]>(() => {
        return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    });
    const [showLabels, setShowLabels] = useState<boolean>(false);

    const [isCustomColors, setIsCustomColors] = useState<boolean>(false);
    const [customColors, setCustomColors] = useState<string[]>([]);
    const [customColorsCount, setCustomColorsCount] = useState<number>(1);

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
                                className={
                                    `w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 bg-white border ${isPointCountValid
                                        ? 'border-gray-300 focus:border-blue-500'
                                        : 'border-red-500 focus:border-red-500'
                                    }`
                                }
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="showLabels"
                                checked={showLabels}
                                onChange={(e) => setShowLabels(e.target.checked)}
                                className="h-4 w-4 text-blue-600 rounded"
                            />
                            <label htmlFor="showLabels" className="text-sm text-gray-700">
                                Show Labeled Points
                            </label>
                        </div>



                        <div className="mt-4">
                            <details className="border-2 border-gray-200 rounded p-2 group bg-white">
                                <summary className="cursor-pointer flex items-center">
                                    <span className="font-medium">Colors</span>
                                    <svg className="w-5 h-5 ml-2 transform -rotate-90 transition-transform duration-200 group-open:rotate-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input
                                        type="checkbox"
                                        id="customColors"
                                        checked={isCustomColors}
                                        onChange={(e) => setIsCustomColors(e.target.checked)}
                                        className="h-4 w-4 text-blue-600 rounded"
                                    />
                                    <label htmlFor="customColors" className="text-sm text-gray-700">
                                        Custom Colors
                                    </label>
                                </div>
                                <div className="mt-3">
                                    <div className="grid grid-cols-5 gap-3">
                                        {[...Array(customColorsCount)].map((_, index) => (
                                            <div key={index} className="relative">
                                                <div className="relative">
                                                    <input
                                                        type="color"
                                                        value={customColors[index] || '#FFFFFF'}
                                                        onChange={(e) => {
                                                            const newColors = [...customColors];
                                                            newColors[index] = e.target.value;
                                                            setCustomColors(newColors);
                                                        }}
                                                        className="w-10 h-10 rounded-md cursor-pointer"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            const newColors = [...customColors];
                                                            newColors.splice(index, 1);
                                                            setCustomColors(newColors);
                                                            setCustomColorsCount(prev => Math.max(prev - 1, 1));
                                                        }}
                                                        className="absolute -top-2 -right-2 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
                                                        title="Remove color"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        {customColorsCount < 15 && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setCustomColorsCount(prev => Math.min(prev + 1, 15));
                                                    // Add a default white color for the new color input
                                                    setCustomColors(prev => [...prev, '#FFFFFF']);
                                                }}
                                                className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                                                title="Add color"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <div className="mt-3 text-center">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (customColors.length > 0 && isCustomColors) {
                                                    setMyColors(customColors);
                                                } else {
                                                    getNewColors();
                                                }
                                            }}
                                            className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors"
                                        >
                                            Apply Colors
                                        </button>
                                    </div>
                                </div>
                            </details>

                        </div>
                        <button
                            disabled={!isPointCountValid}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:hover:bg-blue-500 disabled:opacity-50 transition-colors"
                            onClick={() => {
                                setIsLoading(true);
                                fetch('/api/voronoi?points=' + numOfPoints)
                                    .then(response => response.json())
                                    .then(data => {
                                        setPlotData(data);
                                        console.log(data);
                                        getNewColors();
                                        setIsLoading(false);
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
                                showPoints={showLabels}
                            />
                        ) :
                            isLoading ? (
                                <div className="min-h-screen flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                <div className="text-gray-400">Click Generate to create a Voronoi diagram</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
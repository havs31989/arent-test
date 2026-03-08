import 'reflect-metadata';
import { useEffect, useRef, useState } from 'react';
import { HomeState } from './Home.state';
import { Chart } from 'chart.js';

export function HomeHook() {
    const [componentState, setcomponentState] = useState(new HomeState());
    const initialized = useRef(false);
    const chartRef = useRef({});

    async function loadData(): Promise<void> {
        const pageState: HomeState = componentState.copy();
        await pageState.init();
        setcomponentState(pageState);
    }

    async function loadMore(): Promise<void> {
        const pageState: HomeState = componentState.copy();
        pageState.loadMore();
        setcomponentState(pageState);
    }

    function renderChart(): void {
        const chartRenderInterval = setInterval(async () => {
            const ctx = document.getElementById('homeAnalyticsChart') as HTMLCanvasElement;
            if (ctx) {
                clearInterval(chartRenderInterval);
                await initChart(ctx);
            }
        }, 200);
    }

    async function initChart(ctx: HTMLCanvasElement): Promise<void> {
        let chartData = {
            labels: [''],
            datasets: [
                {
                    label: "A",
                    data: [0],
                    borderColor: "#facc15",
                    backgroundColor: "#facc15",
                    tension: 0.4
                },
                {
                    label: "B",
                    data: [0],
                    borderColor: "#7dd3c7",
                    backgroundColor: "#7dd3c7",
                    tension: 0.4
                }
            ]
        };
        const analyticsData = componentState.model.analyticsData.chartData;
        if (analyticsData.labels.length > 0) {
            chartData = {
                labels: analyticsData.labels,
                datasets: [
                    {
                        label: analyticsData.datasets[0].name,
                        data: analyticsData.datasets[0].data,
                        borderColor: "#facc15",
                        backgroundColor: "#facc15",
                        tension: 0.4
                    },
                    {
                        label: analyticsData.datasets[1].name,
                        data: analyticsData.datasets[1].data,
                        borderColor: "#7dd3c7",
                        backgroundColor: "#7dd3c7",
                        tension: 0.4
                    }
                ]
            };
        }
        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: true
                        }
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    useEffect(() => {
        // userEffect implement here
        if (initialized.current) return;
        initialized.current = true;
        loadData();
        renderChart();
    }, []);
    return {
        componentState,
        loadMore
    };
}
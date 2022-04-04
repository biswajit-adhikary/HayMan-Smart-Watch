import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, BarChart, Bar, ComposedChart, Scatter } from 'recharts';

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, []);

    return (
        <div className='chart-area'>
            <div className="theme-container">
                <h3>Website Report</h3>
                <div className="chart-content">
                    <div className="single-chart">
                        <h4>Simple LineChart</h4>
                        <LineChart
                            width={500}
                            height={400}
                            data={chart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Line yAxisId="left" type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
                            <Line yAxisId="right" type="monotone" dataKey="sell" stroke="#f44250" />
                        </LineChart>
                    </div>
                    <div className="single-chart">
                        <h4>Simple AreaChart</h4>
                        <AreaChart
                            width={500}
                            height={400}
                            data={chart}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#82ca9d" />
                            <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#f44250" />
                        </AreaChart>
                    </div>
                    <div className="single-chart">
                        <h4>Simple BarChart</h4>
                        <BarChart
                            width={500}
                            height={400}
                            data={chart}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                            <Bar dataKey="sell" stackId="a" fill="#f44250" />
                        </BarChart>
                    </div>
                    <div className="single-chart">
                        <h4>Simple ComposedChart</h4>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={chart}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="month" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                            <Scatter dataKey="sell" fill="red" />
                        </ComposedChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
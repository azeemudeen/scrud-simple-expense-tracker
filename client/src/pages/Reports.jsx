import React from 'react'
import { useContext } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Area } from 'recharts';
import { AppContext } from '../App';

function Reports() {
  const {records} = useContext(AppContext);
  console.log(records);
  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
    { name: 'Group G', value: 4800 },
    { name: 'Group H', value: 4800 },
  ];
  
  return (
    <div className="p-5">
      <div className="d-md-flex justify-content-center justify-content-md-start justify-content-sm-center gap-3">
        <div className="col-md-4 col-sm-6">
          <div className="card shadow">
            <div className="fw-bold text-center pt-4">
              Income Split
              <hr />
              <ResponsiveContainer width="100%" aspect={1}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx="50%"
                    cy="50%"
                    outerRadius={window.innerWidth < 500 ? 80 : 120}
                    fill="#8884d8"
                    label
                    fontSize={".8rem"}
                    cursor="pointer"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mt-2 mt-md-0">
          <div className="card shadow">
            <div className="fw-bold text-center pt-4">
              Expense Split
              <hr />
              <ResponsiveContainer width="100%" aspect={1}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx="50%"
                    cy="50%"
                    outerRadius={window.innerWidth < 500 ? 80 : 120}
                    fill="#8884d8"
                    label
                    fontSize={".8rem"}
                    cursor="pointer"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
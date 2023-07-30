import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';
import { AppContext } from '../App';

function Reports() {
  const { records } = useContext(AppContext);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [activeIndexIncome, setActiveIndexIncome] = useState(0);
  const [activeIndexExpense, setActiveIndexExpense] = useState(0);
  useEffect(() => {
    const filteredIncome = records
      .filter((rec) => rec.type === 'Credit')
      .map((rec) => {
        let rand_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return { name: rec.title, value: parseInt(rec.amount), fill: rand_color }
      })

    const filteredExpense = records
      .filter((rec) => rec.type === 'Debit')
      .map((rec) => {
        let rand_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return { name: rec.title, value: parseInt(rec.amount), fill: rand_color }
      });
    console.log("expense", filteredExpense, "\nincome:", filteredIncome);
    setIncome(filteredIncome);
    setExpense(filteredExpense);
  }, []);

  const defaultData = [
    { name: 'No Data', value: 100 },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={window.innerWidth < 550 ? ".8rem" : "1rem"}>{
          `${(percent * 100).toFixed(2)}%`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontSize={window.innerWidth < 550 ? ".8rem" : ".8rem"}>
          {`${value}`}</text>
      </g>
    );
  };

  return (
    <div className="p-5">
      <div className="d-md-flex justify-content-center justify-content-md-center justify-content-sm-center gap-3">
        <div className="col-md-4 col-sm-6">
          <div className="card shadow">
            <div className="fw-bold text-center pt-4">
              Income Split
              <hr />
              <ResponsiveContainer width="100%" aspect={1}>
                <PieChart>
                  <Pie
                    activeIndex={activeIndexIncome}
                    activeShape={renderActiveShape}
                    dataKey="value"
                    isAnimationActive={true}
                    data={income.length ? income : defaultData}
                    cx="50%"
                    cy="50%"
                    outerRadius={window.innerWidth < 550 ? 80 : 110}
                    innerRadius={window.innerWidth < 550 ? "40%" : "40%"}
                    cursor="pointer"
                    onMouseEnter={(_, i) => setActiveIndexIncome(i)}
                    onTouchStart={(_, i) => setActiveIndexIncome(i)}
                  />
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
                    activeIndex={activeIndexExpense}
                    activeShape={renderActiveShape}
                    dataKey="value"
                    isAnimationActive={true}
                    data={expense.length ? expense : defaultData}
                    cx="50%"
                    cy="50%"
                    outerRadius={window.innerWidth < 550 ? 80 : 110}
                    innerRadius={window.innerWidth < 550 ? "40%" : "40%"}
                    cursor="pointer"
                    onMouseEnter={(_, i) => setActiveIndexExpense(i)}
                    onTouchStart={(_, i) => setActiveIndexExpense(i)}
                  />
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
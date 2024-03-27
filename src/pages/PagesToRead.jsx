import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
};

const PagesToRead = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("books");
    const parsedData = JSON.parse(storedData);

    if (parsedData && Array.isArray(parsedData)) {
      setData(
        parsedData.map((books) => ({
          name: books.bookName,
          uv: books.totalPages,
        }))
      );
    }
  }, []);

  return (
    <div className='flex justify-center items-center  h-screen'>
      <BarChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: -10,
          right: 10,
          left: 10,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey='uv'
          fill='#8884d8'
          shape={<TriangleBar />}
          label={{ position: "top" }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 50]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
TriangleBar.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default PagesToRead;

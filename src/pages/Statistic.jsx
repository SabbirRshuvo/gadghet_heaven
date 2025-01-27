import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import product from "../../public/products.json";

const Statistic = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center bg-purple-500 text-white py-12 rounded-xl">
        <h2 className="text-3xl font-bold my-4">Statistics</h2>
        <p className="">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <BarChart width={600} height={300} data={product}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#7c3aed" />
          <Bar dataKey="rating" fill="#a855f7" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistic;

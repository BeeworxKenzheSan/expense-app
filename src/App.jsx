import { Expenses } from "./components/expenses/Expenses";

const expenses = [
  {
    // Страхование автомобилей
    title: "Car Insurance",
    price: 300,
    date: new Date(2021, 2, 28),
    id: "f1",
  },
  {
    // Медицинское страхование
    title: "Health Insurance",
    price: 400,
    date: new Date(2021, 2, 29),
    id: "f2",
  },
];

function App() {
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

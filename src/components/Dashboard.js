import { useDispatch, useSelector } from 'react-redux'
import { getAllCattles as cattlesService } from '../service/cattle-manage-service'
import { getAllCattles } from '../actions/cattle-maange'
import { useMemo } from 'react';

const Dashboard = () => {

  const data = useMemo(
    () => [
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
      // Add more data...
    ],
    []
  );
  const cattles = useSelector((state) => state.cattleManage)
  const dispatch = useDispatch();

  const handleGetCattles = async () => {
    const res = await cattlesService();
    dispatch(getAllCattles(res));
  }
  return (
    <div>
      <h1>Welcome{/*  {user?.email} */}</h1>
      <button onClick={handleGetCattles}>cattles</button>
      {cattles.value?.forEach((element) => {
        // <h2>{element.breed}</h2>
        console.log(JSON.stringify(element))
      })}
    </div>
  )
}

export default Dashboard

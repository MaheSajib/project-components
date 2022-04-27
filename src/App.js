import './App.css';
import AntSearchData from './components/antSearchData/AntSearchData';
import LoginForm from './components/loginForm/LoginForm';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BasicTable from './components/tableComponent/BasicTable';
import EditableTable from './components/tableComponent/editableTable/EditableTable';
import AddProductForm from './components/formComponent/addProductForm/AddProductForm';
import AddUnitForm from './components/formComponent/addUnitForm/AddUnitForm';
import AddCategoryForm from './components/formComponent/addCategoryForm/AddCategoryForm';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout/>}/>
        <Route path="/loginform" element={<LoginForm />}/>
        <Route path="/searchbar" element={<AntSearchData />}/>
        <Route path="/basictable" element={<BasicTable />}/>
        <Route path="/edittable" element={<EditableTable />}/>
        <Route path="/addproductform" element={<AddProductForm />}/>
        <Route path="/addunitform" element={<AddUnitForm />}/>
        <Route path="/addcategoryform" element={<AddCategoryForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

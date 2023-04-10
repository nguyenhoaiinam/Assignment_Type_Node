import { Outlet } from "react-router-dom";
import MenuAdmin from "./admin/Menu";
import ProductManagementPage from "../admin/Product/ProductManagement";
import Bar from "./admin/HeaderADM";
const AdminLayout = () => {

  return (
    <div>
      <div style={{
        // backgroundColor: '#001529',
        height: 50,
        display: 'flex'
      }}>
        <div style={{ width: 1345 }}>
        </div>
        <div style={{ float: "right", width: 126 }}>
          <Bar />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <aside>
          <MenuAdmin />
        </aside>
        <main style={{ width: "100%" }}>
          <Outlet>
            <ProductManagementPage />
          </Outlet>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

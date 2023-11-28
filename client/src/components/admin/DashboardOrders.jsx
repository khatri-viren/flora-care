/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Ordered on", width: 180 },
  {
    field: "productscount",
    headerName: "Products Count",
    type: "number",
    width: 110,
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 90,
  },
  { field: "delivery_status", headerName: "Delivery Status", width: 130 },
  { field: "id", headerName: "OrderId", width: 150, unique: true },
];

export default function DashboardOrders({ orders }) {
  const rows = orders.map((order) => {
    return {
      id: order._id,
      productscount: order.products.length,
      total: order.total / 100,
      delivery_status: order.delivery_status,
      date: new Date(order.createdAt).toLocaleString(),
    };
  });

  // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },];

  return (
    <section className="text-udark">
      <h2 className="text-2xl font-semibold">All Orders</h2>
      <div className="tableContainer my-5">
        {orders.length === 0 ? (
          <div>No Orders</div>
        ) : (
          <>
            <div style={{ height: 500, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "2px solid #343829", // Set border color and thickness
                  },
                }}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

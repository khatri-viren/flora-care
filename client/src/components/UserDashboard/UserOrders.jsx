/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { ring } from "ldrs";

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
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
  { field: "address", headerName: "address", width: 300 },
];

export default function UserOrders({ userId }) {
  const [loading, setLoading] = useState(true);
  ring.register();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://flora-care-server.vercel.app/orders/user/${userId}`
        );
        setOrders(response.data);
        setLoading(false); // Set loading to false when data is fetched

        console.log(response.data);
      } catch (error) {
        setLoading(false); // Set loading to false when data is fetched

        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);

  const rows = orders.map((order) => {
    const addressFields = Object.values(order.shipping.address);
    const concatenatedAddress = addressFields.join(", ");

    return {
      id: order._id,
      productscount: order.products.length,
      total: order.total / 100,
      delivery_status: order.delivery_status,
      date: new Date(order.createdAt).toLocaleString(),
      address: concatenatedAddress,
    };
  });

  // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },];

  return (
    <section className="text-udark">
      <hr className="border border-solid border-umedium my-3" />
      <h2 className="text-2xl font-semibold">Your Orders</h2>
      <div className="tableContainer my-5">
        {loading ? (
          <div className="w-full col-span-2 flex justify-center items-center">
            <l-ring
              size="40"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="black"
            ></l-ring>
          </div>
        ) : orders.length === 0 ? (
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

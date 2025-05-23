import React from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    const currentUserId = currentUser._id;

    const to = currentUserId === sellerId ? buyerId : sellerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to,
          gigId: order.gigId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error occurred"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <img
                        className="image"
                        src={order.img}
                        alt={order.title}
                      />
                    </td>
                    <td>{order.title}</td>
                    <td>${order.price}</td>
                    <td>
                      <img
                        className="message-btn"
                        src="/message.png"
                        alt="Message Icon"
                        onClick={() => handleContact(order)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

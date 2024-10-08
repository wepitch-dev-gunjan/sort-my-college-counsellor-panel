import "./style.scss";
import { useContext, useEffect, useState } from "react";
import config from "@/config";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { ProfileContext } from "../../context/ProfileContext";
import OutstandingBalance from "../../components/outstandingBalance";
import { getCounsellorAmount, parseTimestamp } from "../../utilities";

const { backend_url } = config;

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useContext(UserContext);
  console.log(user);

  const getCounsellorPaymentDetails = async () => {
    console.log("hello");
    try {
      const { data } = await axios.get(
        `${backend_url}/admin/payment/payment-for-counsellor`,
        // null,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      console.log(data);
      setPayments(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCounsellorPaymentDetails();
  }, [user]);

  return (
    <div className="Payments-container">
      <div className="heading sticky">
        <h1>All Payments</h1>
        <OutstandingBalance />
        {/* <div className="row">
          <div className="col pc-h4"><h4>ID</h4></div>
          <div className="col pc-h4"><h4>SERVICE</h4></div>
          <div className="col pc-h4"><h4>DATE</h4></div>
          <div className="col pc-h4"><h4>PAYMENT</h4></div>
          <div className="col pc-h4"><h4>STATUS</h4></div>
        </div> */}
      </div>
      <div className="RecentPayments-container">
        <div className="table">
          <div className="row sticky table-headings">
            <div className="col pc-h4">
              <h4>ID</h4>
            </div>
            <div className="col pc-h4">
              <h4>SERVICE</h4>
            </div>
            <div className="col pc-h4">
              <h4>DATE</h4>
            </div>
            <div className="col pc-h4">
              <h4>Time</h4>
            </div>
            <div className="col pc-h4">
              <h4>FEES</h4>
            </div>
            <div className="col pc-h4">
              <h4>PAYMENT</h4>
            </div>
            <div className="col pc-h4">
              <h4>STATUS</h4>
            </div>
          </div>
          <div className="payments-table-content">
            {payments.map((payment, i) => (
              <div className="row" key={i}>
                <div className="col">{payment._id}</div>
                <div className="col">{payment.session_type}</div>
                <div className="col">
                  {parseTimestamp(payment.created_at).date}
                </div>
                <div className="col">
                  {parseTimestamp(payment.created_at).time}
                </div>
                <div className="col">{payment.fees_amount}</div>
                <div className="col">{payment.amount_due}</div>
                <div
                  className={`col ${
                    payment.status === "Cancelled"
                      ? "red"
                      : payment.status === "Delivered"
                      ? "green"
                      : payment.status === "Pending"
                      ? "blue"
                      : ""
                  }`}
                >
                  {payment.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

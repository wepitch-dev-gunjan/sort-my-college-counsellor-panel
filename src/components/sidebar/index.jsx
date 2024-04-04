import "./style.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";
import React, { useContext, useState, useEffect, useCallback } from "react";
import SidebarMenuButton from "../buttons/sidebarMenuButton";
import RightLeftArrow from "../buttons/rightLeftArrow";
import GroupIcon from "@mui/icons-material/Group";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FeedIcon from "@mui/icons-material/Feed";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import useRazorpay from "react-razorpay";
import { GiUpgrade } from "react-icons/gi";
import PersonIcon from "@mui/icons-material/Person";
import { ProfileContext } from "../../context/ProfileContext";
import config from "@/config";
import axios from "axios";
import { Button } from "rsuite";
import { UserContext } from "../../context/UserContext";
import { rgbToHex } from "@mui/material";

const { backend_url } = config;
const Sidebar = () => {
  const [expand, setExpand] = useState(true);
  const { profile } = useContext(ProfileContext);
  const { user } = useContext(UserContext);
  const [Razorpay] = useRazorpay();

  // edited
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call once to set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Automatically minimize the sidebar on small screens
    if (isSmallScreen) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }, [isSmallScreen]);
  // edited

  const createOrder = async () => {
    try {
      const { data } = await axios.post(
        `${backend_url}/admin/payments/create-order`,
        {
          amount: 10,
          email: "gunjan@wepitch.uk",
          name: "Gunjan Soral",
          description: "Group session booking",
          phone_no: "917611821710",
        },
        {
          headers: {
            Authorization: user.token,
          },
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = useCallback(async () => {
    const order = await createOrder();
    const options = {
      key: order.key,
      amount: order.amount,
      currency: "INR",
      name: order.name,
      description: order.description,
      image:
        "https://counsellor.sortmycollege.com/static/media/logo.f4bd489af960789456c45340be8c6d4f.svg",
      order_id: order.id,
      handler: async (res) => {
        try {
          // Check if payment is successful
          if (res.razorpay_payment_id) {
            // Payment successful, update your database with order details
            const { data } = await axios.post(
              `${backend_url}/admin/payments/create-payment`,
              {
                order_id: order.id,
                payment_id: res.razorpay_payment_id,
                amount: order.amount,
                amount_due: order.amount_due,
                amount_paid: order.amount_paid,
                currency: order.currency,
                created_at: order.created_at,
                entity: order.entity,
                name: order.name,
                email: order.email,
                phone_no: order.phone_no,
                description: order.description,
                status: order.status,
              },
              {
                headers: { Authorization: user.token },
              }
            );
            // Handle response from your backend if needed
            console.log("Order details stored:", data);
          } else {
            // Payment failed, handle accordingly
            console.log("Payment failed:", res.error);
          }
        } catch (error) {
          console.error("Error updating order:", error);
        }
      },
      prefill: {
        name: profile.name,
        email: profile.email,
        contact: profile.phone_no,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className={`sidebar ${expand ? "expanded" : "collapsed"}`}>
      <div className="right-left-arrow" onClick={() => setExpand(!expand)}>
        <RightLeftArrow expand={expand} />
      </div>
      <div className="sidebar-container">
        {profile.verified && (
          // !profile.verified &&
          <>
            <SidebarMenuButton
              href="/"
              icon={DashboardIcon}
              text="Dashboard"
              expand={expand}
            />
            <SidebarMenuButton
              href="/session"
              icon={AccessTimeIcon}
              text="My Sessions"
              expand={expand}
            />
            <SidebarMenuButton
              href="/payment"
              icon={PaymentIcon}
              text="My Payments"
              expand={expand}
            />
            <SidebarMenuButton
              href="/users"
              icon={GroupIcon}
              text="My Followers"
              expand={expand}
            />
            {
              <SidebarMenuButton
                href="/feedbacks"
                icon={ReviewsIcon}
                text="User Feedbacks"
                expand={expand}
              />
            }
            {/* <SidebarMenuButton
              href="/feeds"
              icon={FeedIcon}
              text="My Feeds"
              expand={expand}
            /> */}
          </>
        )}
        <hr />

        <SidebarMenuButton
          href="/profile"
          icon={PersonIcon}
          text="Profile"
          expand={expand}
        />
        <SidebarMenuButton
          href="/help"
          icon={HelpOutlineIcon}
          text="Help"
          expand={expand}
        />

        {/* <div className="upgrade-button" onClick={handlePayment}>
          {!expand ? <div className="upgrade-button-icon"> <GiUpgrade className="upgrad-icon" title="Upgrade" id="upgrad-icon" />  </div> :
            <Button appearance="primary" active >
              Upgrade to Pro
            </Button>
          }
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

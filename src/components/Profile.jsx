import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  const [message, setMessage] = useState("");

  const handleLinkClick = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <br />
      <h1 className="text-2xl font-bold text-blue-400">หน้าโปรไฟล์ผู้ใช้</h1>
      <br />
      <nav>
        <Link to="info" onClick={() => handleLinkClick("ข้อมูลโปรไฟล์ผู้ใช้")}>ข้อมูลโปรไฟล์</Link> <br />
        <Link to="orders" onClick={() => handleLinkClick("คำสั่งซื้อของผู้ใช้")}>คำสั่งซื้อ</Link> <br />
        <Link to="settings" onClick={() => handleLinkClick("การตั้งค่าผู้ใช้")}>การตั้งค่า</Link> <br />
      </nav>
      <br />
      <h2 className="text-2xl font-bold text-blue-400">{message}</h2> 
      <Outlet /> 
    </div>
  );
}

export default Profile;

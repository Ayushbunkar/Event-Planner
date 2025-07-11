import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

      <div className="bg-white relative mx-auto my-5 w-[50%] border p-6 rounded-lg shadow-md flex justify-center gap-20 items-center">
        <div className="">
          <div className="w-50 h-50 rounded-full">
            <img
              src={userdata.photo}
              alt=""
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          
        </div>
        <div className="grid justify-around gap-5">
          <h3>
            <b>Name :</b> {userdata.fullName}
          </h3>
          <h3>
            <b>Email :</b> {userdata.email}
          </h3>
          <h3>
            <b>Phone :</b> {userdata.phone}
          </h3>
        </div>
        <button
          className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick={() => navigate("/userDashboardEdit")}
        >
          {" "}
          <CiEdit />
          Edit
        </button>
      </div>
    </>
  );
};

export default Profile;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import api from "../../config/api"; 

// const Profile = () => {
//   const [userdata, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const fetchUserData = async () => {
//     try {
//       const res = await api.get("/user/profile");
//       const user = res.data.data;

//       if (user.photo) {
//         user.photo = `${user.photo}?t=${Date.now()}`;
//       }

//       setUserData(user);
//     } catch (error) {
//       toast.error(
//         `Error: ${error.response?.status || error.message} | ${
//           error.response?.data.message || ""
//         }`
//       );
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   if (!userdata) return <div className="p-10">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-[#f9f4ef] flex justify-center items-center px-4">
//       <div className="bg-white max-w-lg w-full rounded-lg shadow-md border border-[#e0c9a6] p-6 text-center">
//         {userdata.photo ? (
//           <img
//             src={userdata.photo}
//             alt="User"
//             className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#f5e0c0]"
//           />
//         ) : (
//           <div className="w-28 h-28 rounded-full mx-auto bg-[#f5e0c0] text-[#8b1f1f] flex items-center justify-center text-4xl font-bold">
//             {userdata.name?.charAt(0)}
//           </div>
//         )}

//         <h2 className="mt-4 text-2xl font-semibold text-[#5e2c04]">{userdata.name}</h2>
//         <p className="text-[#946231] text-sm">{userdata.email}</p>
//         <p className="text-[#946231] text-sm">{userdata.phone}</p>

//         <button
//           onClick={() => navigate("/edit-dashboard")}
//           className="mt-6 px-6 py-2 bg-yellow-50 hover:bg-yellow-100 text-[#8b1f1f] border-2 border-yellow-200 rounded-full"
//         >
//           ✏️ Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

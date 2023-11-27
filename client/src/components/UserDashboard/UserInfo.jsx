const UserInfo = () => {
  return (
    <div className="userInfo grid grid-cols-3 my-auto font-medium m-5">
      <div className="leftSide">
        <img
          src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="  "
          className="profileImage rounded-full p-5 w-40"
        />
      </div>
      <div className="rightSide flex flex-col col-span-2 my-auto space-y-2">
        <div>
          <span className="name">Name: </span>
          <span>Viren Khatri</span>
        </div>
        <div>
          <span className="name">Email: </span>
          <span>vk102002@gmail.com</span>
        </div>
        <button className="editProfile p-2 bg-ubg text-udark w-fit my-2 text-sm">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserInfo;

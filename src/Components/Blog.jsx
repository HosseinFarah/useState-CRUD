import { useState } from "react";
const Blog = () => {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addUser = (e) => {
    setFirstName(e.target.value);
  };
  const addEmail = (e) => {
    setLastName(e.target.value);
  };
  const chkValue= document.querySelectorAll("input")
  const pushList = () => {
    const user = {
      id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
      fName: firstName,
      lName: lastName,
      active: false,
    };
     
     chkValue.forEach((val)=>val.value !=="" && setUserList([...userList, user]))
     chkValue.forEach((val)=>val.value = "")
    
  };
  const delUser = (userId) => {
    setUserList(
      userList.filter((user) => {
        return user.id !== userId;
      })
    );
  };
  const confirmUser = (userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) return { ...user, active: !user.active };
        else return user;
      })
    );
  };
  console.log(userList);
  return (
    <div>
      FirstName: <input type="text" onChange={addUser} />
      <br />
      LastName: <input type="email" onChange={addEmail} />
      <br />
      <button onClick={pushList}>Add New Message</button>
      {userList.map((user, index) => {
        return (
          <div
            key={`div_${index}`}
            style={{ backgroundColor: user.active ? "green" : "white" }}
          >
            <h3 key={`h3_${index}`}>
              {user.id}:{user.fName},{user.lName}
            </h3>
            <button key={`btn1_${index}`} onClick={() => delUser(user.id)}>
              Delete User
            </button>
            <br />
            <button key={`btn2_${index}`} onClick={() => confirmUser(user.id)}>
              Confirm
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
{/* Hossein Farahkordmahaleh  */}
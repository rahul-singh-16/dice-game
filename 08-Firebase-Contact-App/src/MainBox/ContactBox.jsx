import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactBox = () => {
  
  const [showNameAndEmail, setShowNameAndEmail] = useState(false);
  const [userBox, setUserBox] = useState([]);

  const nameRef =  useRef(null)
  const emailRef =  useRef(null)

    // Firebase se data realtime me lana
  useEffect(() => {

  const unsubscribe = onSnapshot(
    collection(db, "Contacts"),
    (snapshot) => {

      const contacts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setUserBox(contacts);
    }
  );

  return () => unsubscribe();

}, []);

const addContactBtn = async () => {

  const name = nameRef.current.value;
  const email = emailRef.current.value;

  if (!name || !email) return;

  try {

    await addDoc(collection(db, "Contacts"), {
      name: name,
      email: email
    });

    // Input खाली करो
    nameRef.current.value = "";
    emailRef.current.value = "";

    // Form बंद करो
    setShowNameAndEmail(false);

  } catch (error) {
    console.log(error);
  }
};

    // Firebase se delete
  const deletebtn = async (id) => {
    await deleteDoc(doc(db, "Contacts", id));
  };

  const crossBtnName = ()=>{
    nameRef.current.value = ""
  }
  const crossBtnEmail = ()=>{
    emailRef.current.value = ""
  }


  return (
    <div className="h-160 w-140">
      <Navbar />
      <div className="mt-4 flex items-center justify-center">
        <i className="ri-search-line text-4xl translate-x-10 cursor-pointer"></i>
        <input
          className="px-12 w-120 border-2 outline-none border-amber-400 py-2 text-xl rounded-xl font-semibold"
          type="text"
        />
        <i
          onClick={() => setShowNameAndEmail(!showNameAndEmail)}
          className="ri-add-circle-line ml-4 text-5xl cursor-pointer"
        ></i>
      </div>

      {showNameAndEmail && (
        <div className="h-70 w-140 bg-white pl-6 pt-10 mt-10 rounded-xl">
          <h1 className="text-xl text-blue-700 font-semibold">Name</h1>
          <input
            ref={nameRef}
            className="h-9 w-120 border-3 border-black hover:border-amber-500 outline-none relative text-black font-semibold text-xl pl-2"
            type="text"
          />
          <i
          onClick={crossBtnName}
           className="ri-close-large-line text-red-600 absolute -translate-x-7 cursor-pointer mt-1 text-2xl font-bold"></i>
          <div className="mt-5">
            <h1 className="text-xl text-blue-700 font-semibold">Email</h1>
            <input
              ref={emailRef}
              className="h-9 w-120 border-3 border-black hover:border-amber-500 outline-none text-black font-semibold text-xl pl-2"
              type="email"
            />
            <i
            onClick={crossBtnEmail}
             className="ri-close-large-line text-red-600 absolute -translate-x-7 cursor-pointer mt-1 text-2xl font-bold"></i>
          </div>
          <button
            onClick={addContactBtn}
            className="text-black px-6 py-2 border rounded-2xl bg-amber-400 font-bold text-2xl active:scale-95 mt-6 ml-35 right-0"
          >
            Add Contact
          </button>
        </div>
      )}

      {userBox.map((items)=>(
      <div
      key={items.id}
       className="h-16 w-113 bg-yellow-500 ml-10 rounded-xl mt-6 flex items-center justify-center gap-4">
        <i className="ri-account-circle-line text-4xl cursor-pointer text-black font-semibold"></i>
        <div className="h-full w-70 text-xl font-bold cursor-pointer">
          <h1>{items.name}</h1>
          <h1>{items.email}</h1>
        </div>
        <i
        // onClick={()=>setShowNameAndEmail(!showNameAndEmail)}
         className="ri-pencil-ai-line text-4xl cursor-pointer text-black font-semibold"></i>
        <i
        onClick={()=>deletebtn(items.id)}
         className="ri-delete-bin-6-line text-4xl cursor-pointer text-black font-semi bold"></i>
      </div>
      ))}


    </div>
  );
};

export default ContactBox;

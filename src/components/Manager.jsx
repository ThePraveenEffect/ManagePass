import React, { useRef,useState } from "react";
import { FcAddDatabase } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({site:"",username:"", password:""})

const showPassword =() => { 
  // alert("show pass")

  if(ref.current.src.includes('/icons/eyecross.png'))
  {
    ref.current.src ='/icons/eye.png'
  }
  else{
    ref.current.src ='/icons/eyecross.png'
  }
  
}

const savePassword =  () => { 
  console.log(form)
}

const handleChange = (e) => {
  setform({...form,[e.target.name]: e.target.value})
}

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[710px] w-[100vw] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">

        </div>
      </div>

      <div className=" h-[50vh] w-[50vw] relative mx-auto top-14">
        <h1 className="text-5xl font-bold text-center">ManagePass✍</h1>
        <p className="text-2xl font-serif mt-1">Your own Pass Manager</p>
        <input value={form.site} onChange={handleChange} placeholder="Enter Website URL" className=" inputStyle w-full mt-5" name="site" type="text" />
        <div className="flex  mt-5 my-5 gap-7 relative">

          <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="inputStyle w-3xl" name="username" type="text" />
          <span ><img src="icons/eye.png" ref={ref} onClick={showPassword}className="absolute right-3 top-2 size-6" alt="" /> </span>
          <input value={form.password} onChange={handleChange} placeholder="Enter Password" className="inputStyle  "  name="password" type="password" />

        </div> 

        <button onClick={savePassword} className="flex items-center  rounded-2xl hover:border-2 border-amber-950 bg-yellow-200 h-[8vh] w-[15vw] text-2xl text-black mx-60  font-bold"> <FcAddDatabase  className="h-15 w-20"/> Add Pass</button>
      </div>
    </>
  );
};

export default Manager;

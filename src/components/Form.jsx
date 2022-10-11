import { useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "./main/Cart";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const [form, setForm] = useState();

  const onSubmit = (data) => {
    console.log(data);
    setForm(data);
  };
  return (
    <div>
      <h2>Step 1</h2>
      <div className="form">
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputBox">
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div className="inputBox">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
          />
        </div>
        <div className="inputBox">
          <label>Phone</label>
          <input
            type="number"
            {...register("phone", {
              required: true,
            })}
          />
        </div>
        <input type="submit" className="buttonSend" value="Send"/>
      </form>
      </div>
      <Cart form={form}></Cart>
    </div>
  );
};
export default Form;

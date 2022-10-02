import { useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "./main/Cart";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const [form, setForm] = useState()

  const onSubmit = (data) => {
    console.log(data);
    setForm(data);
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 20,
            })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            {...register("phone", {
              required: true,
            })}
          />
        </div>
        <input type="submit" value="Send" />
      </form>
      <Cart form={form}></Cart>
    </div>
  );
};
export default Form;
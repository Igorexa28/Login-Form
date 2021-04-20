import './App.css';
import { useForm } from 'react-hook-form';
import React from 'react';

function Text(props) {
  return (
    <h2 className={props.className}>{props.text}</h2>
  );
}

function HorizontalLine(props) {
  return <hr className={props.className} />
}

function Input(props) {
  return (
    <input type={props.type} className={props.className} id={props.id} />
  );
}

function Label(props) {
  return (
    <label htmlFor={props.forHtml} className={props.className}>
      {props.text}
    </label>
  );
}

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    const resultObj = JSON.stringify(data);
    alert(resultObj);
  }

  return (
  //   <div id="mainBlock" className="border border-2 rounded-3">
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <Text className="signUp" text="Sign up to LinkedIn" />
  //     <HorizontalLine className="wideLine border border-1" />
  //     <center>
  //       <Label htmlFor="firstName" className="labelForm" text="First name" /><br/>
  //       <Input type="text" className="inputForm"  id="firstName" {...register("firstName", { required: true, minLenght: 1, maxLength: 20, pattern: /[A-Za-z]/gi })} /><br/>

  //       <Label htmlFor="secondName" className="labelForm" text="Second name" /><br/>
  //       <Input type="text" className="inputForm" id="secondName" {...register("secondName", { required: true, minLength: 1, maxLength: 20, pattern: /[A-Za-z]/gi })} /><br/>

  //       <Label htmlFor="nickName" className="labelForm" text="Nickname" /><br/>
  //       <Input type="text" className="inputForm" id="nickName" {...register("nickName", { required: true, minLength: 3, maxLength: 20, pattern: /[A-Za-z0-9]/gi })} /><br/>
        
  //       <Label htmlFor="email" className="labelForm" text="Email" /><br/>
  //       <Input type="text" className="inputForm" id="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig })} /><br/>

  //       <Label htmlFor="age" className="labelForm" text="Age" /><br/>
  //       <Input type="number" className="inputForm" id="age" {...register("age", { required: true, min: 18, max: 99 })} /><br/>

  //       <input type="submit" className="btn btn-outline-secondary" id="submitBtn" />
  //     </center>
  //   </form>
  // </div>


    
     <div id="mainBlock" className="border border-2 rounded-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="signUp">Sign up to LinkedIn</h1>
        <hr className="wideLine border border-1" />
        <center>
          <label htmlFor="firstName" className="labelForm">First name</label><br/>
          <input type="text" className="inputForm" id="firstName" {...register("firstName", { required: true, minLength: 2, maxLength: 20, pattern: /[A-Za-z]/gi })} /><br/>
          <p className="errorMessage">{errors.firstName && "First name is required*"}</p>

          <label htmlFor="secondName" className="labelForm">Second name</label><br/>
          <input type="text" className="inputForm" id="secondName" {...register("secondName", { required: true, minLength: 2, maxLength: 20, pattern: /[A-Za-z]/gi })} /><br/>
          <p className="errorMessage">{errors.secondName && "Second name is required*"}</p>

          <label htmlFor="nickName" className="labelForm">Nickname</label><br/>
          <input type="text" className="inputForm" id="nickName" {...register("nickName", { required: true, minLength: 3, maxLength: 20, pattern: /[A-Za-z0-9]/gi })} /><br/>
          <p className="errorMessage">{errors.nickName && "Nickname is required*"}</p>

          <label htmlFor="email" className="labelForm">Email</label><br/>
          <input type="text" className="inputForm" id="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig })} /><br/>
          <p className="errorMessage">{errors.email && "Email is required*"}</p>

          <label htmlFor="age" className="labelForm">Age</label><br/>
          <input type="number" className="inputForm" id="age" {...register("age", { required: true, min: 18, max: 99 })} /><br/>
          <p className="errorMessage">{errors.age && "Age is required*"}</p>

          <input type="submit" className="btn btn-outline-secondary" id="submitBtn" />
        </center>
      </form>
    </div> 

    /*
    <div id="mainBlock" className="border border-2 rounded-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text className="signUp" text="Sign up to LinkedIn" />
        <HorizontalLine className="wideLine border border-1" />
        <center>
          <Label htmlFor="firstName" className="labelForm" text="First name" /><br/>
          <Input type="text" className="inputForm"  id="firstName" {...register("firstName", { required: true, minLenght: 1, maxLength: 20, pattern: /[A-Za-z]/gi })} /><br/>

          <Label htmlFor="secondName" className="labelForm" text="Second name" /><br/>
          <Input type="text" className="inputForm" id="secondName" {...register("secondName", { required: true, minLength: 1, maxLength: 20, pattern: /[A-Za-z]/gi })} /><br/>

          <Label htmlFor="nickName" className="labelForm" text="Nickname" /><br/>
          <Input type="text" className="inputForm" id="nickName" {...register("nickName", { required: true, minLength: 3, maxLength: 20, pattern: /[A-Za-z0-9]/gi })} /><br/>
          
          <Label htmlFor="email" className="labelForm" text="Email" /><br/>
          <Input type="text" className="inputForm" id="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig })} /><br/>

          <Label htmlFor="age" className="labelForm" text="Age" /><br/>
          <Input type="number" className="inputForm" id="age" {...register("age", { required: true, min: 18, max: 99 })} /><br/>

          <input type="submit" className="btn btn-outline-secondary" id="submitBtn" />
        </center>
      </form>
    </div>
    */
  );
}

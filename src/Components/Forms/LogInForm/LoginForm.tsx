import { Field, Form } from "formik";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Elements/Buttons";
import FormInput from "../Fields/inputField";
import { FlexInput, Input, Label } from "../Fields/inputField.style";


interface IProps {
  errors: any;
  touched: any;
}
const LoginForm = ( {errors, touched}: IProps ) => {
  useEffect(()=> {
    // console.log
  })
  return (
    <Form >
      <FlexInput>
        <Label style={{
          color: 'black'
        }}>Enter your email addrees</Label>
        <FormInput
          name="userEmail"
          errors={errors}
          touched={touched}
        />
      </FlexInput>
      <FlexInput>
        <Label style={{
          color: 'black'
        }}>Enter your password</Label>
        <FormInput
          name="password"
          errors={errors}
          touched={touched}
          type={'password'}

        />
      </FlexInput>

      <Button
        bold={true}
        backgroundColor="#FCDD06"
        width="100%"
        margin="25px 0 0 0 "
      >Login</Button>
      
      <FlexInput style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        marginTop: '15px'
      }}>
      <Field
        component='input'
        type={'checkbox'}
        name={"isCurrentlyWork"}
        
      />
        <Label>Remember me</Label>
      </FlexInput>

      <div style={{textAlign: 'center'}}>
      <NavLink style={{
          color:' black',
          fontSize: '16px',
        }}
        to={'/'} >Forgot your password?</NavLink>
      </div>
    </Form>
  )
}

export default LoginForm

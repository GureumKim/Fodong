import React from "react";
import { Wrapper, Title, Input, Inputs, Button } from "../components/Common";
import { useForm } from "../hooks/useForm";
import { signup } from "../api/signup";
// import { useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";

const Signup = () => {
  const [id, onChangeId] = useForm();
  const [pwd, onChangePwd] = useForm();
  const [email, onChangeEmail] = useForm();
  // const router = useNavigate();
  const setToken = userStore((state) => state.setToken);

  const onClick = async () => {
    console.log("hello");
    console.log(id, pwd, email);
    await signup(id, pwd, email);
    const response = await signup(email, pwd);
    // response console.log 찍어서 수정 정확하게
    if (response && response.token) {
      setToken(response.token);
    }
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="account_id" vlaue={id} onChange={onChangeId} />
        <Input
          placeholder="account_email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder="account_pwd"
          type="password"
          value={pwd}
          onChange={onChangePwd}
        />
      </Inputs>
      <Button onClick={onClick}>회원가입</Button>
    </Wrapper>
  );
};

export default Signup;

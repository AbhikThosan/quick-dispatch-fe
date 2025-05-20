import { Button, Form } from "antd";
import { LOGIN_FORM_NAME } from "../constant/loginFormConstant";
import LoginFormInputs from "./LoginFormInputs";
import { useLogin } from "../../hook/useLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../../store";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login, loading } = useLogin();
  const { setUserInfo } = useStore();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      const response = await login(values);
      console.log("Login", response.user);
      toast.success("You Are Successfully Logged In ");
      setUserInfo(response.user);
      form.resetFields();
      if (response.user.profileSetup) {
        navigate("/chat");
      } else {
        navigate("profile");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        const errMsg = error?.response?.data || "An unexpected Error Occured";
        toast.error(errMsg);
      } else {
        toast.error("Login Successful");
      }
    }
  };
  return (
    <Form
      name={LOGIN_FORM_NAME}
      layout="vertical"
      requiredMark={false}
      form={form}
      onFinish={handleFinish}
    >
      <LoginFormInputs />
      <Button type="primary" htmlType="submit" loading={loading}>
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;

import { Button, Form } from "antd";
import { SIGNUP_FORM_NAME } from "../constant/signupFormConstant";
import SignupFormInputs from "./SignupFormInputs";
import { useSignup } from "../../hook/useSignup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../../../store";

const SignupForm = () => {
  const [form] = Form.useForm();
  const { signup, loading } = useSignup();
  const { setUserInfo } = useStore();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      const response = await signup(values);
      console.log("User:", response.user);
      setUserInfo(response.user);
      toast.success("Signup Successful");
      form.resetFields();
      if (response.user.profileSetup) {
        navigate("/chat");
      } else {
        navigate("profile");
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data) {
        const errMsg = error?.response?.data || "An Unexpected Error Occured";
        toast.error(errMsg);
      } else {
        toast.error("Signup Failed!");
      }
    }
  };

  return (
    <Form
      name={SIGNUP_FORM_NAME}
      layout="vertical"
      requiredMark={false}
      form={form}
      onFinish={handleFinish}
    >
      <SignupFormInputs />

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;

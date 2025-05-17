import { Form, Input, Select } from "antd";
import { SIGNUP_FORM_INPUTS } from "../constant/signupFormConstant";
import { THEME_COLORS } from "../../../../utils/constant/colors";

const SignupFormInputs = () => {
  return (
    <>
      <Form.Item
        label="First Name"
        name={SIGNUP_FORM_INPUTS.FIRSTNAME}
        rules={[
          {
            required: true,
            message: "First name is required.",
          },
          {
            pattern: /^[A-Za-z.,\- ]{1,50}$/,
            message: "Only letters, '.', ',', '-' allowed. Max 50 chars.",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name={SIGNUP_FORM_INPUTS.LASTNAME}
        rules={[
          {
            required: true,
            message: "Last name is required.",
          },
          {
            pattern: /^[A-Za-z.,\- ]{1,50}$/,
            message: "Only letters, '.', ',', '-' allowed. Max 50 chars.",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Email"
        name={SIGNUP_FORM_INPUTS.EMAIL}
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name={SIGNUP_FORM_INPUTS.PASSWORD}
        rules={[
          { required: true, message: "Please enter your password!" },
          { min: 6, message: "Password must be at least 6 characters long!" },
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Form.Item label="Theme Color" name={SIGNUP_FORM_INPUTS.COLOR}>
        <Select
          size="large"
          placeholder="Select a color"
          allowClear
          dropdownMatchSelectWidth={false}
        >
          {THEME_COLORS.map((color) => (
            <Option key={color.id} value={color.id}>
              <div className="flex items-center">
                <span
                  style={{
                    display: "inline-block",
                    width: 30,
                    height: 30,
                    backgroundColor: color.hex,
                    borderRadius: "5px",
                    marginRight: 8,
                    border: "1px solid #ccc",
                  }}
                />
                {color.name}
              </div>
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Profile Picture URL (optional)"
        name={SIGNUP_FORM_INPUTS.PROFILE_PICTURE}
        rules={[
          {
            type: "url",
            message: "Please enter a valid image URL!",
          },
        ]}
      >
        <Input size="large" placeholder="https://example.com/image.jpg" />
      </Form.Item>
    </>
  );
};

export default SignupFormInputs;

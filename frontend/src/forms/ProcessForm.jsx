import React from "react";
import { Form, Input } from "antd";

export default function LeadForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Process"
        name="process"
        rules={[
          {
            required: true,
            message: "Please input process!",
          },
        ]}
      >
        <Input />
      </Form.Item>
     
    </>
  );
}

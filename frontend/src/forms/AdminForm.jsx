import React, { useEffect, useState } from "react";
import { Form, Input, Select, Spin } from "antd";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "@/config/serverApiConfig";
import axios from "axios";
import { token as tokenCookies } from "@/auth";
const headersInstance = { [ACCESS_TOKEN_NAME]: tokenCookies.get() };

const config = {
  headers: headersInstance,
};
export default function AdminForm({ isUpdateForm = false }) {
  const [auth1, setAuth1] = useState([]);
  useEffect(function () {
    async function getArticles() {
      try {
        const response = await axios.get(API_BASE_URL + `process/list`, config);
        setAuth1(response.data.result);
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    }
    getArticles();
  }, []);

  return (
    <>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      {!isUpdateForm && (
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="password" autoComplete="off" />
        </Form.Item>
      )}

      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        hasFeedback
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Option value="user">User</Option>
          <Option value="admin">Admin</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="process"
        label="Process"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select Process!",
          },
        ]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
          placeholder="Please select a process"
        >
          {auth1.map((doc, index) => (
            <Option value={doc.process} key={doc._id}>
              {doc ? doc.process : <Spin size="small" />}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
}

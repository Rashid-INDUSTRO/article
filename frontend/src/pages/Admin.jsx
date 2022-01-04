import React from "react";

import AdminCrudModule from "@/modules/AdminCrudModule";
import AdminForm from "@/forms/AdminForm";

export default function Admin() {
  const entity = "admin";
  const searchConfig = {
    displayLabels: ["name", "role","process"],
    searchFields: "email,name,role,process",
    outputValue: "_id",
  };

  const panelTitle = "Admin Panel";
  const dataTableTitle = "User Lists";
  const entityDisplayLabels = ["email"];

  const readColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "role", dataIndex: "role" },
    { title: "Email", dataIndex: "email" },
    { title: "Process", dataIndex: "process" },
  ];

  const dataTableColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "role", dataIndex: "role" },
    { title: "Email", dataIndex: "email" },
    { title: "Process", dataIndex: "process" },
  ];
  const ADD_NEW_ENTITY = "Add new user";
  const DATATABLE_TITLE = "User List";
  const ENTITY_NAME = "admin";
  const CREATE_ENTITY = "Create user";
  const UPDATE_ENTITY = "Update user";

  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}

import React from "react";

import CrudModule from "@/modules/CrudModule";
import LeadForm from "@/forms/ProcessForm";

function Lead() {
  const entity = "process";
  const searchConfig = {
    displayLabels: ["process"],
    searchFields: "process",
    outputValue: "_id",
  };

  const panelTitle = "Process Panel";
  const dataTableTitle = "Process Lists";
  const entityDisplayLabels = ["process"];

  const readColumns = [
    {
      title: "Date",
      dataIndex: "created",
    },
    {
      title: "Process",
      dataIndex: "process",
    },
  ];
  const dataTableColumns = [
    {
      title: "Date",
      dataIndex: "created",
    },
    {
      title: "Process",
      dataIndex: "process",
    },
   
  ];

  const ADD_NEW_ENTITY = "Add new Process";
  const DATATABLE_TITLE = "process List";
  const ENTITY_NAME = "process";
  const CREATE_ENTITY = "Create Process";
  const UPDATE_ENTITY = "Update Process";
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
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Lead;

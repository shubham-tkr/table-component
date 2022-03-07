export function createColDefs() {
  const ReadeOnlyColumnDefs = [
    {
      headerName: "Alert date",
      field: "date",
      width: 150,
      cellRenderer: "agGroupCellRenderer",
    },

    {
      headerName: "Counterparty name",
      field: "counterPartyName",
      width: 300,
      filter: "text",
    },

    {
      headerName: "ISIN",
      field: "isin",
      width: 180,
      filter: "text",
    },

    {
      headerName: "Variation",
      field: "variationPercentage",
      width: 165,
      type: "numericColumn",
      filter: "number",
    },

    {
      headerName: "Previous level",
      field: "previousLevel",
      width: 190,
      type: "numericColumn",
      filter: "text",
    },

    {
      headerName: "Previous level date",
      field: "previousLevelAsOf",
      width: 200,
    },

    {
      headerName: "New level",
      field: "newLevel",
      width: 170,
      type: "numericColumn",
      filter: "text",
    },

    {
      headerName: "New level date",
      field: "newLevelAsOf",
      width: 160,
    },

    {
      headerName: "Currency",
      field: "currency",
      width: 140,
      filter: "text",
    },

    {
      headerName: "Group name",
      field: "groupName",
      width: 250,
      filter: "text",
    },

    {
      headerName: "Group RCT id",
      field: "groupRctId",
      width: 190,
      type: "numericColumn",
      filter: "text",
    },

    {
      headerName: "RCT id",
      field: "rctId",
      width: 120,
      filter: "text",
    },

    {
      headerName: "Risk cell",
      field: "riskCell",
      width: 250,
      filter: "text",
    },

    {
      headerName: "PCRU",
      field: "pcru",
      width: 250,
      filter: "text",
    },

    {
      headerName: "EWS type",
      field: "ewsType",
      width: 370,
      filter: "text",
    },
  ];

  return ReadeOnlyColumnDefs;
}

export function createHistoryColDefs() {
  const HistoryColDefs = [
    {
      headerName: "Approved date",
      field: "approvedOn",
      width: 150,
    },
    {
      headerName: "Counterparty name",
      field: "counterPartyName",
      width: 300,
      filter: "text",
    },
    {
      headerName: "ISIN",
      field: "isin",
      width: 180,
      filter: "text",
    },
    {
      headerName: "Variation",
      field: "variationPercentage",
      width: 165,
      type: "numericColumn",
      filter: "number",
    },
    {
      headerName: "Previous level",
      field: "previousLevel",
      width: 190,
      type: "numericColumn",
      filter: "text",
    },
    {
      headerName: "Previous level date",
      field: "previousLevelAsOf",
      width: 200,
    },
    {
      headerName: "New level",
      field: "newLevel",
      width: 170,
      type: "numericColumn",
      filter: "text",
    },

    {
      headerName: "New level date",
      field: "newLevelAsOf",
      width: 160,
    },
    {
      headerName: "EWS type",
      field: "ewsType",
      width: 370,
      filter: "text",
    },
  ];

  return HistoryColDefs;
}

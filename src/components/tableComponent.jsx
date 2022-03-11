import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { createHistoryColDefs, createColDefs } from "../data/columnDefs.jsx";
import { sampleData } from "../data/sampleData.jsx";
import TopComponent from "./topComponent";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import ReactFullScreenComponent from "react-easyfullscreen";
import { RatingsGridModel } from "./../model/RatingsGridModel.ts";
import "ag-grid-enterprise";

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      columnDefs: createColDefs(),
      data: sampleData,
      validated: false,
      validRowCountAtleastOne: false,

      detailCellRendererParams: {
        refreshStrategy: "rows",
        detailGridOptions: {
          columnDefs: createHistoryColDefs(),
          defaultColDef: {
            resizable: true,
            sortable: true,
          },
          rowHeight: 50,
          headerHeight: 50,
          enableCellTextSelection: true,
        },
        getDetailRowData: (params) => {
          params.successCallback(params.data.callRecords);
        },
      },
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  handleExport = () => {
    this.gridApi.exportDataAsCsv();
  };

  handleValidate = () => {
    alert("Validated");
    this.setState({ validated: true });
  };

  // updateValidCheckCount(validRowCount) {
  //   this.setState({ validRowCountAtleastOne: this.validRowCountAtleastOne });
  // }

  render() {
    const defaultColDef = { sortable: true, filter: true };

    return (
      <ReactFullScreenComponent>
        {({ ref, onRequest, onExit }) => (
          <React.Fragment>
            <TopComponent
              onExportClick={this.handleExport}
              onValidateClick={this.handleValidate}
              onRequest={onRequest}
              onExit={onExit}
              //updateValidCheckCount={this.updateValidCheckCount}
            />
            <div
              className="ag-grid ag-theme-alpine ag-theme-bootstrap"
              style={{ height: 400 }}
            >
              <AgGridReact
                rowData={this.state.data}
                columnDefs={this.state.columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={this.onGridReady}
                rowHeight={50}
                headerHeight={50}
                pagination={true}
                paginationAutoPageSize={true}
                enableSorting={true}
                enableFilter={true}
                enableColResize={true}
                detailCellRendererParams={this.state.detailCellRendererParams}
                masterDetail={true}
              />
            </div>
          </React.Fragment>
        )}
      </ReactFullScreenComponent>
    );
  }
}

export default TableComponent;

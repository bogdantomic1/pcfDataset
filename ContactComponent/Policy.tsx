import * as React from "react";
import { Label, Image } from "@fluentui/react";
import { FontIcon } from "@fluentui/react/lib/Icon";

type Dataset = ComponentFramework.PropertyTypes.DataSet;
export interface IPolicyProps {
  dataset: Dataset;
  //customTitle: string;
  customName: string | null;
  customInsuranceType: string | null;
}

interface LookupObject {
  etn: string;
  id: { guid: string };
  name: string;
}

export const CarInsurance = React.memo(
  ({ dataset, customName, customInsuranceType }: IPolicyProps): JSX.Element => {
    const [insuranceTypeValue, setInsuranceTypeValue] = React.useState("");
    const [policyId, setPolicyId] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [premium, setPremium] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [noData, setNoData] = React.useState(false);
    const getStatusStyle = () => {
      switch (status) {
        case "Active":
          return "status-active";
        case "Pending":
          return "status-pending";
        case "Inactive":
          return "status-inactive";
        default:
          return "";
      }
    };

    React.useEffect(() => {
      let found = false;

      for (const recordId of dataset.sortedRecordIds) {
        const record = dataset.records[recordId];

        const nameValue = record.getFormattedValue("cre3c_kontaktosoba");
        const insuranceType = record.getFormattedValue("cre3c_insurancetype");

        const obj = record.getValue("cre3c_kontaktosoba") as LookupObject;
        const objIns = record.getValue("cre3c_insurancetype") as LookupObject;
        let lookupName = "";
        let insuranceTypeVar = "";
        if (obj && objIns) {
          lookupName = obj.id.guid;
          insuranceTypeVar = objIns.name;
          console.log(lookupName + "-premecovanja-" + insuranceTypeVar);
        }

        if (
          lookupName === customName &&
          insuranceType === customInsuranceType
        ) {
          console.log("Mecovali se_________________________");
          setInsuranceTypeValue(
            record.getFormattedValue("cre3c_insurancetype")
          );
          setPolicyId(record.getFormattedValue("cre3c_policyid"));
          setStartDate(record.getFormattedValue("cre3c_startdate"));
          setEndDate(record.getFormattedValue("cre3c_enddate"));
          setPremium(record.getFormattedValue("cre3c_premium"));
          setStatus(record.getFormattedValue("cre3c_status"));

          found = true;
          break;
        }
      }

      setNoData(found);
    }, [dataset, customName, customInsuranceType]);

    return (
      <>
        {noData ? (
          <div className="card">
            <div className="field title-field">
              <FontIcon
                aria-label="Train"
                iconName="TrainSolid"
                className="iconClass"
              />
              <label className="labelTitle">{insuranceTypeValue}</label>
            </div>

            <div className="field seperated">
              <label className="label">Policy ID:</label>
              <label className="value">{policyId}</label>
            </div>
            <div className="field">
              <label className="label">Start Date:</label>
              <label className="value">{startDate}</label>
            </div>
            <div className="field">
              <label className="label">End Date:</label>
              <label className="value">{endDate}</label>
            </div>
            <div className="field">
              <label className="label">Premium:</label>
              <label className="value">{premium}</label>
            </div>

            <div className={`field status-field ${getStatusStyle()}`}>
              <Label className="status-label">{status}</Label>
            </div>
          </div>
        ) : (
          <div className="no-data">
            <p>No data available for the selected contact.</p>
          </div>
        )}
      </>
    );
  }
);

CarInsurance.displayName = "CarInsurance";

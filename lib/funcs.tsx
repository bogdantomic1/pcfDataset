//listing every item

// context.parameters.sampleDataSet.columns.forEach(function (
//   column: DataSetInterfaces.Column
// ) {
//   console.log(column.displayName + "----------------" + column.name);
// });

//lists every record then getting values using column names

// context.parameters.sampleDataSet.sortedRecordIds.forEach(function (
//     recordId: string
//   ) {
//     var record = context.parameters.sampleDataSet.records[recordId];
//     var title = record.getFormattedValue("Title");
//     var policyID = record.getFormattedValue("ID_POLICY");
//     console.log(kljuc + "--------------------------------" + policyID);
//   });
///

// context.parameters.sampleDataSet.sortedRecordIds.forEach(function (
//     recordId: string
//   ) {
//     var record = context.parameters.sampleDataSet.records[recordId];
//     var contactValue = record.getFormattedValue("Contact");
//     var titleValue = record.getFormattedValue("Title");

//     if (
//       contactValue === "34ddf415-674b-ef11-bfe3-000d3ad8b6dd" &&
//       titleValue === "Car Insurance"
//     ) {
//       var policyID = record.getFormattedValue("ID_POLICY");
//       console.log(`Title: ${titleValue} | Policy ID: ${policyID}`);

//       return;
//     }
//   });
/////this.propertyTitle = matchedRecord.getFormattedValue("new_title");
// this.propertyPolicyId = matchedRecord.getFormattedValue("cre3c_policyid");
// this.propertyStartDate =
//   matchedRecord.getFormattedValue("cre3c_startdate");
// this.propertyEndDate = matchedRecord.getFormattedValue("cre3c_enddate");
// this.propertyPremium = matchedRecord.getFormattedValue("cre3c_premium");
// this.propertyStatus = matchedRecord.getFormattedValue("cre3c_status");

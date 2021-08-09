export const getSheet = (name: string) => {
  const spreadsheet = SpreadsheetApp.getActive();
  return spreadsheet.getSheetByName(name);
}

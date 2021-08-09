import { getSheet } from "./src/spreadsheet";
import { generateDummyUserData, TERMS } from "./src/dummy";

const writeDummyData = () => {
  const USERS = 1000;
  const SHEET_NAME = 'ダミー回答';

  const sheet = getSheet(SHEET_NAME);
  let rows = [["id", "number", "value"]];

  for (let i = 1; i <= USERS; i++) {
    const data = generateDummyUserData();
    rows = rows.concat(data.map(d => [d["name"], d["target"], d["value"]]));
  }

  sheet.getRange(1,1,rows.length,3).setValues(rows);
}

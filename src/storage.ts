import { ErrorCallback } from "./helper";
import { ICalculatorHistory } from "./types";

const CACHE_KEY = "calculation_history";
 
function checkForStorage(): boolean {
   return typeof(Storage) !== "undefined";
}
  
function showHistory(): ICalculatorHistory[] {
   const cacheData = localStorage.getItem(CACHE_KEY);
   if (!cacheData) {
       return [];
   } 
   return JSON.parse(cacheData) as ICalculatorHistory[]
}

function putHistory(data: ICalculatorHistory): void {
    if (!checkForStorage()) {
        return;
    }
    let historyData: ICalculatorHistory[] = [];
    const cacheData = localStorage.getItem(CACHE_KEY);
    if(cacheData) {
        historyData = JSON.parse(cacheData) as ICalculatorHistory[];
    }
    historyData.unshift(data);
    if (historyData.length > 5) {
        historyData.pop();
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
}
 
function renderHistory() {
   const historyData = showHistory();
   let historyList = document.querySelector("#historyList") as HTMLElement;
   if(!historyList){
       ErrorCallback("Display element not found");
       return;
   }
   historyList.innerHTML = "";
 
   for (let history of historyData) {
       let row = document.createElement('tr');
       row.innerHTML = "<td>" + history.firstNumber + "</td>";
       row.innerHTML += "<td>" + history.operator + "</td>";
       row.innerHTML += "<td>" + history.secondNumber + "</td>";
       row.innerHTML += "<td>" + history.result + "</td>";
 
       historyList.appendChild(row);
   }
}

function deleteHistory(): void {
   localStorage.removeItem(CACHE_KEY);
   location.reload();
}

(window as any).deleteHistory = deleteHistory;

renderHistory();

export { putHistory, renderHistory}
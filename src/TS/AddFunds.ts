export class Deposit {
  //   constructor() {}

  addSum() {
    const formAddSum: HTMLFormElement | null =
      document.querySelector(".form-add")!;
    const btnAddSum: HTMLButtonElement | null =
      document.querySelector("#addBtnSum")!;

    formAddSum.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    btnAddSum.addEventListener("click", () => {
      const inputAddSum: HTMLInputElement | null =
        document.querySelector(".add-sum--input")!;
      const balance: HTMLHeadingElement | null =
        document.querySelector(".balance-sum")!;

      const whereSelect: HTMLSelectElement | null =
        document.querySelector("#AddWhereSelect")!;

      if (inputAddSum.value === "") {
        inputAddSum.value = "0.00";
        return;
      }

      const whereValue: string = whereSelect.value;
      const inputValue: number = parseFloat(inputAddSum.value);
      const currentBalance: number = parseFloat(balance.textContent);

      const newBalance: number = currentBalance + inputValue;
      balance.textContent = newBalance.toFixed(2);

      this.addTransaction(inputValue, whereValue);
      inputAddSum.value = "";
    });
  }

  addTransaction(sum: number, way: string): void {
    const currentDate = new Date();
    let currentDay: string | number = currentDate.getDate();
    let currentMonth: string | number = currentDate.getMonth() + 1;
    let currentHours: string | number = currentDate.getHours();
    let currentTime: string | number = currentDate.getMinutes();

    if (currentDay < 10) currentDay = "0" + currentDay;
    if (currentMonth < 10) currentMonth = "0" + currentMonth;
    if (currentHours < 10) currentHours = "0" + currentHours;
    if (currentTime < 10) currentTime = "0" + currentTime;

    const containerTransactions: HTMLUListElement | null =
      document.querySelector(".transactions")!;
    containerTransactions.innerHTML += `
    <li class="transaction">
      <div class="transaction-info">
        <p class="transaction-value">Пополнение</p>
        <p class="transaction-date">
          ${currentDay}.${currentMonth}, <strong>${currentHours}:${currentTime}</strong> <span> ${way}</span>
        </p>
      </div>
     <p class="transactions-sum sum-green">+$ ${sum}</p>
    </li>
    `;
  }
}

const addDeposit = new Deposit();
addDeposit.addSum();

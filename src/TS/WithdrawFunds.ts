export class WithdrawAmount {
  withdrawSum() {
    const formWithdrawSum: HTMLFormElement | null =
      document.querySelector(".form-reduce")!;
    const btnWithdrawSum: HTMLButtonElement | null =
      document.querySelector("#withdrawBtnSum")!;

    formWithdrawSum.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    btnWithdrawSum.addEventListener("click", () => {
      const inputWithdrawSum: HTMLInputElement | null =
        document.querySelector(".reduce-sum--input")!;
      const balance: HTMLHeadingElement | null =
        document.querySelector(".balance-sum")!;
      const whereSelect: HTMLSelectElement | null = document.querySelector(
        "#WithdrawWhereSelect"
      )!;

      if (inputWithdrawSum.value === "") {
        inputWithdrawSum.value = "0.00";
        return;
      }

      const whereValue: string = whereSelect.value;
      const inputValue: number = parseFloat(inputWithdrawSum.value);
      const currentBalance: number = parseFloat(balance.textContent);

      const newBalance: number = currentBalance - inputValue;
      balance.textContent = newBalance.toFixed(2);
      this.withdrawTransaction(inputValue, whereValue);
      inputWithdrawSum.value = "";
    });
  }

  withdrawTransaction(sum: Number, way: string): void {
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
        <p class="transaction-value">Снятие</p>
        <p class="transaction-date">
          ${currentDay}.${currentMonth}, <strong>${currentHours}:${currentTime}</strong> <span> ${way}</span>
        </p>
      </div>
     <p class="transactions-sum sum-red">-$ ${sum}</p>
    </li>
    `;
  }
}

const fff = new WithdrawAmount();
fff.withdrawSum();

export class Deposit {
    //   constructor() {}
    addSum() {
        const formAddSum = document.querySelector(".form-add");
        const btnAddSum = document.querySelector("#addBtnSum");
        formAddSum.addEventListener("submit", (event) => {
            event.preventDefault();
        });
        btnAddSum.addEventListener("click", () => {
            const inputAddSum = document.querySelector(".add-sum--input");
            const balance = document.querySelector(".balance-sum");
            const whereSelect = document.querySelector("#AddWhereSelect");
            if (inputAddSum.value === "") {
                inputAddSum.value = "0.00";
                return;
            }
            const whereValue = whereSelect.value;
            const inputValue = parseFloat(inputAddSum.value);
            const currentBalance = parseFloat(balance.textContent);
            const newBalance = currentBalance + inputValue;
            balance.textContent = newBalance.toFixed(2);
            this.addTransaction(inputValue, whereValue);
            inputAddSum.value = "";
        });
    }
    addTransaction(sum, way) {
        const currentDate = new Date();
        let currentDay = currentDate.getDate();
        let currentMonth = currentDate.getMonth() + 1;
        let currentHours = currentDate.getHours();
        let currentTime = currentDate.getMinutes();
        if (currentDay < 10)
            currentDay = "0" + currentDay;
        if (currentMonth < 10)
            currentMonth = "0" + currentMonth;
        if (currentHours < 10)
            currentHours = "0" + currentHours;
        if (currentTime < 10)
            currentTime = "0" + currentTime;
        const containerTransactions = document.querySelector(".transactions");
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
//# sourceMappingURL=AddFunds.js.map
export class WithdrawAmount {
    withdrawSum() {
        const formWithdrawSum = document.querySelector(".form-reduce");
        const btnWithdrawSum = document.querySelector("#withdrawBtnSum");
        formWithdrawSum.addEventListener("submit", (event) => {
            event.preventDefault();
        });
        btnWithdrawSum.addEventListener("click", () => {
            const inputWithdrawSum = document.querySelector(".reduce-sum--input");
            const balance = document.querySelector(".balance-sum");
            const whereSelect = document.querySelector("#WithdrawWhereSelect");
            if (inputWithdrawSum.value === "") {
                inputWithdrawSum.value = "0.00";
                return;
            }
            const whereValue = whereSelect.value;
            const inputValue = parseFloat(inputWithdrawSum.value);
            const currentBalance = parseFloat(balance.textContent);
            const newBalance = currentBalance - inputValue;
            balance.textContent = newBalance.toFixed(2);
            this.withdrawTransaction(inputValue, whereValue);
            inputWithdrawSum.value = "";
        });
    }
    withdrawTransaction(sum, way) {
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
const withdrawAmount = new WithdrawAmount();
withdrawAmount.withdrawSum();
//# sourceMappingURL=WithdrawFunds.js.map

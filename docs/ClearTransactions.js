export class clearTransaction {
    clear() {
        const clearBtn = document.querySelector("#clearTransactiosBtn");
        clearBtn.addEventListener("click", () => {
            const containerTransactions = document.querySelector(".transactions");
            containerTransactions.textContent = "Транзакции удалены. История пуста.";
            setTimeout(() => {
                containerTransactions.textContent = "";
            }, 1000);
        });
    }
}
const clearTransactionw = new clearTransaction();
clearTransactionw.clear();
//# sourceMappingURL=ClearTransactions.js.map
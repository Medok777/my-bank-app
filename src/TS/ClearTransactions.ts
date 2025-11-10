export class clearTransaction {
  clear() {
    const clearBtn: HTMLButtonElement | null = document.querySelector(
      "#clearTransactiosBtn"
    )!;

    clearBtn.addEventListener("click", () => {
      const containerTransactions: HTMLUListElement | null =
        document.querySelector(".transactions")!;
      containerTransactions.textContent = "Транзакции удалены. История пуста.";
      setTimeout(() => {
        containerTransactions.textContent = "";
      }, 1000); 
    });
  }
}

const clearTransactionw = new clearTransaction();
clearTransactionw.clear();

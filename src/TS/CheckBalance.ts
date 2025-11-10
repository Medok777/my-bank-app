export class СheckBalance {
  openModal() {
    const btnModal: HTMLButtonElement | null =
      document.querySelector(".check-button")!;
    const btnCloseModal: HTMLButtonElement | null =
      document.querySelector(".modal-btn")!;
    btnModal.addEventListener("click", () => {
      const modal: HTMLDivElement | null =
        document.querySelector(".modal-window")!;

      const balanceSum: HTMLHeadingElement | null =
        document.querySelector(".balance-sum")!;

      const modalValue: HTMLParagraphElement | null =
        document.querySelector(".modal-balance")!;

      modalValue.textContent = String(balanceSum.textContent);
      modal.style.display = "block";
    });

    btnCloseModal.addEventListener("click", () => {
      const modal: HTMLDivElement | null =
        document.querySelector(".modal-window")!;
      modal.style.display = "none";
    });
  }
}

const СheckBalanceModal = new СheckBalance();
СheckBalanceModal.openModal();

export class СheckBalance {
    openModal() {
        const btnModal = document.querySelector(".check-button");
        const btnCloseModal = document.querySelector(".modal-btn");
        btnModal.addEventListener("click", () => {
            const modal = document.querySelector(".modal-window");
            const balanceSum = document.querySelector(".balance-sum");
            const modalValue = document.querySelector(".modal-balance");
            modalValue.textContent = String(balanceSum.textContent);
            modal.style.display = "block";
        });
        btnCloseModal.addEventListener("click", () => {
            const modal = document.querySelector(".modal-window");
            modal.style.display = "none";
        });
    }
}
const СheckBalanceModal = new СheckBalance();
СheckBalanceModal.openModal();
//# sourceMappingURL=CheckBalance.js.map
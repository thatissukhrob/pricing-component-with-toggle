const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment-period"]');
const elPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elsPaymentPeriodRadio) {
    elsPaymentPeriodRadio.addEventListener('change', function () {
        const period = elsPaymentPeriodRadio.value; 

        if (period === 'annual') {
            elPricingPlanValue.forEach(function (elPrice) {
                elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
            });
        } else {
            elPricingPlanValue.forEach(function (elPrice){
                elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;   
            });   
        }
    });
});
const MAX_ALLOWED_REPAYMENT_PERCENTAGE_OF_GROSS = 30;

export const repaymentCalculator = ({
  purchasePrice,
  deposit = 0,
  interestRate,
  term = 20 // in years
}) => {
  const interestRatePerMonth = interestRate / 100 / 12;
  const termInMonths = term * 12;
  const loanAmountRequired = purchasePrice - deposit;
  const monthlyRepayment = (
    (interestRatePerMonth * loanAmountRequired) /
    (1 - Math.pow(1 + interestRatePerMonth, -termInMonths))
  ).toFixed(2);
  const totalRepayment = (monthlyRepayment * termInMonths).toFixed(2);
  const minGrossMonthlyIncomeRequired =
    (monthlyRepayment * 100) / MAX_ALLOWED_REPAYMENT_PERCENTAGE_OF_GROSS;
  return {
    monthlyRepayment,
    minGrossMonthlyIncomeRequired,
    totalRepayment
  };
};

export const affordabilityCalculator = ({
  grossMonthlyIncome,
  totalMonthlyExpenses, // including taxes and other deductions
  interestRate,
  term = 20 // in years
}) => {
  const surplus = grossMonthlyIncome - totalMonthlyExpenses;
  const normalizedSurplus = Math.max(surplus, 0);
  const maxAllowedSpend =
    grossMonthlyIncome * (MAX_ALLOWED_REPAYMENT_PERCENTAGE_OF_GROSS / 100);
  const possibleMonthlyRepayment =
    normalizedSurplus > maxAllowedSpend ? maxAllowedSpend : normalizedSurplus;
  const monthlyInterest = interestRate / 100 / 12;
  const termInMonths = term * 12;
  const maxPrice = (
    (possibleMonthlyRepayment *
      (1 - Math.pow(1 + monthlyInterest, -termInMonths))) /
    monthlyInterest
  ).toFixed(2);
  return {
    maxPrice,
    possibleMonthlyRepayment
  };
};

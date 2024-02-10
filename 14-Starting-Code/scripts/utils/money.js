export function formatCurrency(priceCents){
    return (priceCents / 100).toFixed(2);
}//This function is used in checkout.js and amazon.js. Using modules we are sharing code in two files and avoiding repetition.
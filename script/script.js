function ageCalculator() {
    var myDate = new Date("03/29/2001");
    var month_diff = Date.now() - myDate.getTime();
    var age_dt = new Date(month_diff);
    var age = Math.abs(age_dt.getUTCFullYear() - 1970);
    return age;
}
     

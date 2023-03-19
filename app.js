function Send() {
    var selected_box = document.getElementById('AnyPacks').selectedIndex;
    var where_field = document.getElementById('Where').value;
    if (where_field == "") {
        document.getElementById('Result').innerHTML = "The delivery address must not be empty";
    }
    else {
        switch (selected_box) {
            case 0:
                {
                    document.getElementById('Result').innerHTML = `Your order will be waiting for you at the store in the city ${where_field}. Cost 7,490rubles. `;
                }
                break;
            case 1:
                {
                    document.getElementById('Result').innerHTML = `Your order will be waiting for you at the store in the city ${where_field}. Cost 11,990rubles. `;
                }
                break;
            case 2:
                {
                    document.getElementById('Result').innerHTML = `Your order will be waiting for you at the store in the city ${where_field}. Стоимость 16,990rubles. `;
                }
                break;
            default:
        }
    }
}





















//# sourceMappingURL=app.js.map
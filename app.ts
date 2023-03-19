function Send(): void {
    var selected_box = (<HTMLSelectElement>document.getElementById('AnyPacks')).selectedIndex;
    var where_field = (<HTMLSelectElement>document.getElementById('Where')).value;

    if (where_field == "") {
        document.getElementById('Result').innerHTML = "Адрес доставки не должен быть пустым";
    }
    else {
        switch (selected_box) {
            case 0:
                {
                    document.getElementById('Result').innerHTML = `Заказ будет ожидать вас в городе ${where_field}. Стоимость 250рублей. `;
                }
                break;
            case 1:
                {
                    document.getElementById('Result').innerHTML = `Заказ будет доставлен в городе ${where_field}. Стоимость 450рублей. `;
                }
                break;
            case 2:
                {
                    document.getElementById('Result').innerHTML = `Заказ будет доставлен в городе ${where_field}. Стоимость 650рублей. `;
                }
                break;
            default:
        }
    }
}  
let pageNumber = 1;
let maxPageNumber = Math.ceil(data.length / 10);
let Mass1 = data.slice(0, data.length);

(function init() {

    tableDraw(data);
    event();
})();

function nextPage() {
    if (pageNumber < maxPageNumber)
        pageNumber++;
    tableDraw(Mass1);
    event();
}

function prevPage() {
    if (pageNumber > 1)
        pageNumber--;
    tableDraw(Mass1);
    event();
}




function event() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        let str = $(this).serialize().split('&');

        let foo = str.reduce(function(obj, item) {
            let filterMass = item.split('=');
            if (filterMass[0] === 'price') {
                filterMass[1] = filterMass[1].split('-');
            }

            obj[filterMass[0]] = filterMass[1];

            return obj;
        }, {});

        pageNumber = 1;
        tableFilter(foo);
    })

}

function tableFilter(obj) {
    let presence = document.getElementsByClassName('filter-checkbox')[0];
    let newMass;

    if (obj.price == undefined && obj.type == undefined) {
        if (presence.checked == true) { newMass = data.filter(value => presence.checked == value.presence); }
        if (presence.checked == false) { newMass = data; }

    } else if (obj.price == undefined) {
        if (presence.checked == true) { newMass = data.filter(value => value.type == obj.type && presence.checked == value.presence); }
        if (presence.checked == false) { newMass = data.filter(value => value.type == obj.type); }

    } else if (obj.type == undefined) {
        if (presence.checked == true) { newMass = data.filter(value => value.price > obj.price[0] && value.price < obj.price[1] && presence.checked == value.presence); }
        if (presence.checked == false) { newMass = data.filter(value => value.price > obj.price[0] && value.price < obj.price[1]); }
    } else {
        if (presence.checked == true) { newMass = data.filter(value => value.type == obj.type && value.price > obj.price[0] && value.price < obj.price[1] && presence.checked == value.presence); }
        if (presence.checked == false) { newMass = data.filter(value => value.type == obj.type && value.price > obj.price[0] && value.price < obj.price[1]); }
    }
    Mass1.splice(0, Mass1.length);
    Mass1 = newMass.slice(0, newMass.length);;
    pageNumber = 1;
    maxPageNumber = Math.ceil(Mass1.length / 10);

    tableDraw(newMass);

}

function tableDraw(mass) {

    let index1 = (10 * (pageNumber - 1));

    index1--;

    //console.log(mass[(index1 + 1)]);
    $('.product-table tbody').html(mass.reduce(function(str, item, index) {
        index1++;

        if (index1 >= (pageNumber * 10) || mass[(index1)] == undefined) return str;
        //console.log(mass[(index1)]);
        let type = {
            1: "Без скидки",
            2: "Скидка по программе",
            3: "Временная скидка",
            4: "Постоянная скидка"
        };
        // console.log(mass[index1]);
        return str += '<tr>' +
            '<td>' + mass[index1].name + '</td>' +
            '<td>' + mass[index1].price + '</td>' +
            '<td style="width: 20px;"><div class="' + (mass[index1].presence ? "alert-success" : "alert-danger") + '" role="alert">&nbsp;</div></td>' +
            '<td>' + type[mass[index1].type] + '</td>' +
            '<td>' + mass[index1].area + '</td>' +
            '</tr>'
    }, ''));

}
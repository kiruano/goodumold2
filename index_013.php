window.showCase = {isActive: false};
var GeoInfo = {
    ip: '213.87.135.82',
    cityId: '51042',
    city: 'Подольск',
    countryCode: 'RU'
};

window.pageType = 'layer';
        window.hasComebacker = true;
        if (typeof(comebacker) != 'undefined' && null != comebacker) {
            comebacker.page = comebacker.page + "?comebacker" + getTid();
        }
        $('.comebacker_iframe').each(function() {
            $(this).attr('src', "http://mb.diettonus.com" + "?comebacker" + getTid());
        });
    

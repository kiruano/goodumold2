var GeoInfo = {
    ip: '213.87.135.82',
    cityId: '51042',
    city: 'Подольск',
    countryCode: 'RU'
};

window.pageType = 'landing';
        landingFeatures = {visitorsStat:0,onlineVisitors:0,orderNotification:0,frozenPrice:0};
    
        window.hasComebacker = true;
        if (typeof(comebacker) != 'undefined' && null != comebacker) {
            comebacker.page = comebacker.page + "?comebacker" + getTid();
        }
        $('.comebacker_iframe').each(function() {
            $(this).attr('src', "http://mb.diettonus.com" + "?comebacker" + getTid());
        });
    

function initMap() {
    const map = L.map('mymap', {
        scrollWheelZoom: true
    }).setView([47.567670666519604, 34.39668931820382], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const iconMap = L.icon({
        iconUrl: 'assets/img/iconmap.svg',
        iconSize: [106, 106]
    });

    L.marker([47.613069597893436, 34.429273490947004], {
            title: 'The best lovely place and center of the Universe',
            icon: iconMap
        })
        .addTo(map)
        .bindPopup('ONE LOVE')
}

$(document).ready(function () {

    initMap();

    $(window).scroll(function () {
        const headerWrap = $('.header_wrap');
        const scroll = $(window).scrollTop();
        if (scroll >= $('header').outerHeight() - 80) {
            headerWrap.addClass('fixed');
        } else {
            headerWrap.removeClass('fixed');
        }
    })
    $("#lightSlider").lightSlider({
        vertical: true,
        verticalHeight: 800,
        item: 1,
        galery: false,
        controls: false,
        pager: true,
        auto: true,
        pause: 4000,
        slideMargin: 0,
        responsive: [
            {
                breakpoint:965,
                settings: {
                    verticalHeight: 600,

                  }
            },
            {
                breakpoint:771,
                settings: {
                    verticalHeight: 400,
                  }
            }
        ]

    });
    $.getJSON('./assets/js/news.json', function (data) {
        const ul = $('<ul></ul>').attr('id', 'kart_news');
        data.forEach(function (newsItem) {
            const li = $('<li></li>');
            const a = $('<a></a>').attr('href', newsItem.link).attr('target', '_blank')
            const img = $('<img>').attr('src', newsItem.image).attr('alt', 'news foto').addClass('building_img');
            const newsContent = $('<div></div>').addClass('news_content');
            const newsH = $('<p></p>').text(newsItem.title).addClass('news_h');
            const newDesc = $('<p></p>').text(newsItem.description).addClass('new_desc');
            const personCart = $('<div></div>').addClass('person_cart');
            const imgFoto = $('<img>').attr('src', newsItem.autor.foto).attr('alt', 'foto').addClass('person_foto');
            const div = $('<div></div>');
            const nameFoto = $('<p></p>').text(newsItem.autor.name).addClass('name_foto');
            const time = $('<time></time>').text(newsItem.autor.time);

            div.append(nameFoto).append(time);
            personCart.append(imgFoto).append(div);
            newsContent.append(newsH).append(newDesc).append(personCart);
            li.append(a).append(img).append(newsContent);
            ul.append(li);
        })
        $('#last_news .container').append(ul)

    }).then(function () {
        $("#kart_news").lightSlider({
            item: 3,
            galery: false,
            controls: true,
            slideMargin: 30,
            loop: true,
            responsive: [
                {
                    breakpoint:1155,
                    settings: {
                        item:2,
                        slideMove:1,
                      }
                },
                {
                    breakpoint:771,
                    settings: {
                        item:1,
                      }
                }
            ]
        });
    })
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: '0000-0000-000-0000',
        speed: 500,

    });


    function slowScroll(elementId) {
        $('html, body').animate({
            scrollTop: $(elementId).offset().top - 80
        }, 'slow');
    }
    const scrollBtn = $('.scroll_whatwedo a');
    scrollBtn.click(function () {
        slowScroll(scrollBtn.attr('href'))
    })

    $('.site_nav a').click(function (event) {
        slowScroll($(event.target).attr('href'))
    })
});

function toggleMenu() {
    document.querySelector('#hamb_btn').classList.toggle('is-active');
    document.querySelector('#nambugrer_menu').classList.toggle('is-active');
}

document.querySelector('#hamb_btn').addEventListener('click', toggleMenu);
document.querySelectorAll('#nambugrer_menu .site_nav a').forEach(function(link){
    link.addEventListener('click', toggleMenu)
})
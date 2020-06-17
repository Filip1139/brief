const checkboxes = [
    {
        title: '1. Czy posiadają Państwo obecnie stronę internetową?',
        qustions: [{
            name: 'haveSite',
            hiddenTextInput: true,
            id: 'haveSite-yes',
            value: 'Posiadam strone',
            title: 'Tak'
        }, {
            name: 'haveSite',
            id: 'haveSite-no',
            value: 'Nie osiadam strony internetowej',
            title: 'Nie'
        },

        ]
    },
    {
        title: '2. Czy kopiujemy wartość merytoryczną z obecnie istniejącej strony?',
        qustions: [{
            name: 'siteContent',
            id: 'content-all',
            value: 'Kopiujemy całość wartość merytoryczną',
            title: 'Całość'
        }, {
            name: 'siteContent',
            id: 'content-part',
            value: 'Kopiujemy część wartości merytorycznej',
            title: 'Część'
        }, {
            name: 'siteContent',
            id: 'content-new',
            value: 'Potrzebuje nowej wartości merytorycznej',
            title: 'Nowa wartość merytoryczna'
        },

        ]
    },
    {
        title: '3. Jaki ma być obszar zasięgu oferty?',
        qustions: [{
            name: 'siteRange',
            id: 'range-local',
            value: 'Chcę działać lokalnie',
            title: 'lokalny'
        }, {
            name: 'siteRange',
            id: 'range-country',
            value: 'Chcę działać na cały kraj',
            title: 'cała Polska'
        }, {
            name: 'siteRange',
            id: 'range-abroad',
            value: 'Interesują mnie rynki zagraniczne',
            title: 'zagranica'
        },

        ]
    },
    {
        title: '5. Czy strona powinna posiadać zakładkę "Blog"?',
        qustions: [{
            name: 'haveBlog',
            id: 'site-blog-yes',
            value: 'Chcę mieć na swojej nowej stronie zakładkę "Blog"',
            title: 'Tak'
        }, {
            name: 'haveBlog',
            id: 'site-blog-no',
            value: 'Nie chcę zakładki "Blog"',
            title: 'Nie'
        }
        ]
    },

];

export default checkboxes;
require('babel-core/register')({presets: ['env', 'react']}); // ES6 JS below!

//import React from 'react';
import React from './ReactFake';    // Note React is used by the JSX compiler that handles the HTML below this fakes the React.createElement


export default class Util {
    static number_format(nStr)//this is just addCommas now
    {
        //http://www.mredkj.com/javascript/numberFormat.html
        nStr += '';

        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        return x1 + x2;
    }

    static glyph({name = 'question', classes = ''} = {}) {
        return (
            <span className={classes}>
                <span className={'iconochive-'+name} aria-hidden="true"></span>
                <span className="sr-only">{name}</span>
            </span>
        );
    }

    // pass in a <mediatype> value
    static mediatype_icon(mediatype) {
        const ICONS = {
            "audio": "audio",
            "collection": "collection",
            "etree": "etree",
            "image": "image",
            "data": "data",
            "movies": "movies",
            "movingimage": "movies",
            "other": "question",
            "software": "software",
            "sound": "audio",
            "stillimages": "image",
            "text": "texts",
            "texts": "texts",
            "tv": "tv",
            "unknown": "question",
            "video": "movies",
            "search": "search",
            "forum": "comments",
            "web": "web",
            "article": "article",
            "account": "person",
            "quote": "quote",
            "ad": "tv-commercial"
        };

        let icon = ICONS[mediatype];
        if (!icon)
            icon = 'question';

        return this.glyph({name: icon});
    }

    static natcompare(a, b) {
        return natcompare(a, b);
    }

    static AJS_on_dom_loaded() {
        /*
        This function is copied from archive.min.js because
        a) its run there on DOMLoaded, which is before we've got anything on the page
        b) Its anonymous in archive.min.js so can't call it
         */
        // Use this global hack, by adding class 'accessible-link' to any mouse-only element div/img
        // Note AJS is defined in archive_min.js
        AJS.makeMouseElementAccessible('.accessible-link');


        AJS.setUpActionTracking(); // Must be before other form submit handlers are assigned
        AJS.setupPopupLink();
        AJS.nav_tophat_setup();
        AJS.nav_tophat_wb_setup();
        AJS.setUpCreativeCommonsLicenseLink();
        AJS.setUpSearchForms();

        /* global  archive_setup */
        if (typeof archive_setup !== 'undefined') {
            // when DOM loaded/stable, do some setup
            $(() => {
                for (const fn of archive_setup)
                    fn()
                archive_setup = []; // Delete archive_setup
            })
        }

        AJS.footer();
    }

    static async fetch_json(url) {
        /*
        url:   to be fetched - construct CORS safe JSON enquiry.
        throws: TypeError if cant fetch
        throws: Error if fetch doesnt return JSON.
        resolves to: Decoded json response
         */
        let response = await fetch(new Request(url, // Throws TypeError on failed fetch
            {
                method: 'GET',
                headers: new Headers(),
                mode: 'cors',
                cache: 'default',
                redirect: 'follow',  // Chrome defaults to manual
            }
        ));
        if (response.ok) {
            if (response.headers.get('Content-Type') === "application/json") {
                return await response.json(); // response.json is a promise resolving to JSON already parsed
            } else {
                let t = response.text(); // promise resolving to text
                throw new Error(`Unable to fetch, return was not JSON - got: ${response.headers.get('Content-Type')} ${t}`);
            }
        }   // Note - if copy this for binary files, make sure to look at TransportHTTP which uses response.arrayBuffer

    }
}

/* === Configuration info ==== */
Util.archiveMimeTypeFromFormat = {
        JPEG: "image/jpeg",
        PNG: "image/png",
        "h.264": "video/mp4"
    };   //TODO expand to other formats - see mimetypes list from petabox
Util.imageFormats = ['JPEG', 'PNG'];     //TODO expand to other formats - see mimetypes list from petabox
Util.downloadableFormats = {
    'JPEG Thumb': 'JPEG THUMB',
    'JPEG 250px Thumb': 'JPEG 250PX THUMB',
    "JPEG 500px Thumb": 'JPEG 500PX THUMB',
    'Archive BitTorrent': 'TORRENT',
    "JPEG": "JPEG",
    "PNG": "PNG"
}
Util.gateway = {
        "url_download": "https://gateway.dweb.me/download/archiveid/",
        "url_servicesimg": "https://gateway.dweb.me/thumbnail/archiveid/",
        "url_torrent": "https://gateway.dweb.me/torrent/archiveid/",
        "url_metadata": "https://gateway.dweb.me/metadata/archiveid/"
}
// minified FROM http://sourcefrog.net/projects/natsort/natcompare.js
function isWhitespaceChar(B){var A;A=B.charCodeAt(0);if(A<=32){return true;}else{return false;}}function isDigitChar(B){var A;A=B.charCodeAt(0);if(A>=48&&A<=57){return true;}else{return false;}}function compareRight(E,B){var G=0;var F=0;var D=0;var C;var A;for(;;F++,D++){C=E.charAt(F);A=B.charAt(D);if(!isDigitChar(C)&&!isDigitChar(A)){return G;}else{if(!isDigitChar(C)){return -1;}else{if(!isDigitChar(A)){return +1;}else{if(C<A){if(G==0){G=-1;}}else{if(C>A){if(G==0){G=+1;}}else{if(C==0&&A==0){return G;}}}}}}}}function natcompare(I,H){var C=0,A=0;var D=0,B=0;var F,E;var G;while(true){D=B=0;F=I.charAt(C);E=H.charAt(A);while(isWhitespaceChar(F)||F=="0"){if(F=="0"){D++;}else{D=0;}F=I.charAt(++C);}while(isWhitespaceChar(E)||E=="0"){if(E=="0"){B++;}else{B=0;}E=H.charAt(++A);}if(isDigitChar(F)&&isDigitChar(E)){if((G=compareRight(I.substring(C),H.substring(A)))!=0){return G;}}if(F==0&&E==0){return D-B;}if(F<E){return -1;}else{if(F>E){return +1;}}++C;++A;}};


// NOTE: copied _verbatim_ from  Details::$langList & Languages.inc until @hank and @ximm weigh in.. 8-)

Util.languageMapping = {
    // short (marc) and long versions of language names
    // if a 'language' metadata element matches either version,
    // the long form will be displayed on the details
    // page, linked to a search engine query on an OR of both forms
    // (if no match is found, the metadata value itself is displayed,
    // linked to a query on just that value)
    'aar': 'Afar',
    'abk': 'Abkhaz',
    'ady': 'Adyghe',
    'afr': 'Afrikaans',
    'aka': 'Akan',
    'akk': 'Akkadian',
    'alb': 'Albanian',
    'ale': 'Aleut',
    'alg': 'Algonquian',
    'amh': 'Amharic',
    'ang': 'Old English',
    'apa': 'Apache languages',
    'ara': 'Arabic',
    'arc': 'Aramaic',
    'arg': 'Aragonese',
    'arm': 'Armenian',
    'arp': 'Arapaho',
    'asm': 'Assamese',
    'ath': 'Athapascan (Other)',
    'aym': 'Aymara',
    'aze': 'Azerbaijani',
    'bak': 'Bashkir',
    'bal': 'Baluchi',
    'ban': 'Balinese',
    'baq': 'Basque',
    'bel': 'Belarusian',
    'bem': 'Bemba',
    'ben': 'Bengali',
    'ber': 'Berber',
    'bih': 'Bihari',
    'bis': 'Bislama',
    'bla': 'Blackfoot',
    'bnt': 'Bantu',
    'bos': 'Bosnian',
    'bre': 'Breton',
    'bua': 'Buryat',
    'bul': 'Bulgarian',
    'bur': 'Burmese',
    'cai': 'Central American Indian',
    'car': 'Carib',
    'cat': 'Catalan',
    'cau': 'Caucasian',
    'ceb': 'Cebuano',
    'cha': 'Chamorro',
    'che': 'Chechen',
    'chi': 'Chinese',
    'chm': 'Mari',
    'chn': 'Chinook jargon',
    'cho': 'Choctaw',
    'chp': 'Chipewyan',
    'chr': 'Cherokee',
    'chu': 'Church Slavic',
    'chv': 'Chuvash',
    'chy': 'Cheyenne',
    'cop': 'Coptic',
    'cor': 'Cornish',
    'cos': 'Corsican',
    'cpe': 'Creoles and Pidgins, English-based',
    'cpf': 'Creoles and Pidgins, French-based',
    'cpp': 'Creoles and Pidgins, Portuguese-based',
    'cre': 'Cree',
    'crh': 'Crimean Tatar',
    'crp': 'Creoles and Pidgins',
    'csb': 'Kashubian',
    'cze': 'Czech',
    'dak': 'Dakota',
    'dan': 'Danish',
    'dar': 'Dargwa',
    'del': 'Delaware',
    'dih': 'Dhivehi',
    'dsb': 'Lower Sorbian',
    'dum': 'Middle Dutch',
    'dut': 'Dutch',
    'dzo': 'Dzongkha',
    'eng': 'English',
    'enm': 'Middle English',
    'epo': 'Esperanto',
    'esk': 'Eskimo',
    'esp': 'Esperanto',
    'est': 'Estonian',
    'eth': 'Ethiopic',
    'fao': 'Faroese',
    'far': 'Faroese',
    'fij': 'Fijian',
    'fil': 'Filipino',
    'fin': 'Finnish',
    'fre': 'French',
    'fri': 'Frisian',
    'frm': 'Middle French',
    'fro': 'Old French',
    'frr': 'North Frisian',
    'fry': 'Frisian',
    'fur': 'Friulian',
    'gaa': 'Gã',
    'gae': 'Scottish Gaelic',
    'gag': 'Galician',
    'gem': 'Germanic',
    'geo': 'Georgian',
    'ger': 'German',
    'gez': 'Ethiopic',
    'gil': 'Gilbertese',
    'gla': 'Scottish Gaelic',
    'gle': 'Irish',
    'glg': 'Galician',
    'glv': 'Manx',
    'gmh': 'Middle High German',
    'goh': 'Old German',
    'got': 'Gothic',
    'grb': 'Grebo',
    'grc': 'Ancient Greek',
    'gre': 'Greek',
    'grn': 'Guarani',
    'gsw': 'Swiss German',
    'gua': 'Guarani',
    'guj': 'Gujarati',
    'gwi': 'Gwichin',
    'hai': 'Haida',
    'hat': 'Haitian French Creole',
    'hau': 'Hausa',
    'haw': 'Hawaiian',
    'heb': 'Hebrew',
    'hin': 'Hindi',
    'hmn': 'Hmong',
    'hsb': 'Upper Sorbian',
    'hun': 'Hungarian',
    'ibo': 'Igbo',
    'ice': 'Icelandic',
    'ido': 'Ido',
    'iku': 'Inuktitut',
    'ile': 'Interlingue',
    'ilo': 'Iloko',
    'ina': 'Interlingua',
    'ind': 'Indonesian',
    'inh': 'Ingush',
    'int': 'Interlingua',
    'ipk': 'Inupiaq',
    'ira': 'Iranian',
    'iri': 'Irish',
    'iro': 'Iroquoian',
    'ita': 'Italian',
    'jav': 'Javanese',
    'jpn': 'Japanese',
    'jrb': 'Judeo-Arabic',
    'kaa': 'Karakalpak',
    'kal': 'Kalatdlisut',
    'kan': 'Kannada',
    'kar': 'Karen',
    'kas': 'Kashmiri',
    'kaz': 'Kazakh',
    'kbd': 'Kabardian',
    'kha': 'Khasi',
    'khm': 'Khmer',
    'kik': 'Kikuyu',
    'kin': 'Kinyarwanda',
    'kir': 'Kirgiz',
    'kir': 'Kyrgyz',
    'kon': 'Kongo',
    'kor': 'Korean',
    'kpe': 'Kpelle',
    'krc': 'Karachay-Balkar',
    'kro': 'Kru',
    'kum': 'Kumyk',
    'kur': 'Kurdish',
    'lad': 'Ladino',
    'lah': 'Lahnda',
    'lao': 'Lao',
    'lap': 'Sami',
    'lat': 'Latin',
    'lav': 'Latvian',
    'lez': 'Lezgin',
    'lim': 'Limburgish',
    'lin': 'Lingala',
    'lit': 'Lithuanian',
    'lol': 'Mongo-Nkundu',
    'ltz': 'Luxembourgish',
    'lua': 'Luba-Lulua',
    'lub': 'Luba-Katanga',
    'lug': 'Ganda',
    'mac': 'Macedonian',
    'mah': 'Marshallese',
    'mal': 'Malayalam',
    'mao': 'Maori',
    'map': 'Austronesian',
    'mar': 'Marathi',
    'max': 'Manx',
    'may': 'Malay',
    'mga': 'Middle Irish',
    'mic': 'Micmac',
    'min': 'Minankabaw',
    'mis': 'Miscellaneous languages',
    'mkh': 'Mon-Khmer',
    'mla': 'Malagasy',
    'mlg': 'Malagasy',
    'mlt': 'Maltese',
    'moh': 'Mohawk',
    'mol': 'Moldavian',
    'mon': 'Mongolian',
    'mul': 'Multiple',
    'mus': 'Creek',
    'myn': 'Maya',
    'nah': 'Nahuatl',
    'nai': 'North American Indian',
    'nap': 'Neapolitan',
    'nau': 'Nauru',
    'nav': 'Navajo',
    'nbl': 'Ndebele',
    'nds': 'Low German',
    'nep': 'Nepali',
    'new': 'Newari',
    'nic': 'Niger-Kordofanian',
    'nno': 'Norwegian (Nynorsk)',
    'nob': 'Norwegian (Bokmål)',
    'nog': 'Nogay',
    'non': 'Old Norse',
    'nor': 'Norwegian',
    'nso': 'Northern Sotho',
    'nya': 'Nyanja',
    'oci': 'Occitan',
    'oji': 'Ojibwa',
    'ori': 'Oriya',
    'orm': 'Oromo',
    'oss': 'Ossetic',
    'ota': 'Ottoman Turkish',
    'oto': 'Otomian',
    'paa': 'Papuan',
    'pag': 'Pangasinan',
    'pal': 'Pahlavi',
    'pam': 'Pampanga',
    'pan': 'Panjabi',
    'pap': 'Papiamento',
    'per': 'Persian',
    'phi': 'Philippine',
    'pli': 'Pali',
    'pol': 'Polish',
    'por': 'Portuguese',
    'pra': 'Prakrit',
    'pro': 'Provencal',
    'pus': 'Pashto',
    'que': 'Quechua',
    'roa': 'Romance',
    'roh': 'Romansh',
    'rom': 'Romani',
    'rum': 'Romanian',
    'run': 'Rundi',
    'rus': 'Russian',
    'sag': 'Sango',
    'sah': 'Yakut',
    'sai': 'South American Indian',
    'sam': 'Samaritan Aramaic',
    'san': 'Sanskrit',
    'sao': 'Samoan',
    'sat': 'Santali',
    'scc': 'Serbian',
    'sco': 'Scots',
    'scr': 'Croatian',
    'sel': 'Selkup',
    'sem': 'Semitic',
    'sga': 'Old Irish',
    'sho': 'Shona',
    'sio': 'Siouan',
    'sin': 'Sinhalese',
    'sit': 'Sino-Tibetan',
    'sla': 'Slavic',
    'slo': 'Slovak',
    'slv': 'Slovenian',
    'smi': 'Sami',
    'smo': 'Samoan',
    'sms': 'Skolt Sami',
    'sna': 'Shona',
    'snd': 'Sindhi',
    'snh': 'Sinhalese',
    'som': 'Somali',
    'sot': 'Sotho',
    'spa': 'Spanish',
    'sso': 'Sotho',
    'ssw': 'Swazi',
    'sun': 'Sundanese',
    'sux': 'Sumerian',
    'swa': 'Swahili',
    'swe': 'Swedish',
    'swz': 'Swazi',
    'syc': 'Syriac',
    'syr': 'Modern Syriac',
    'tag': 'Tagalog',
    'tah': 'Tahitian',
    'taj': 'Tajik',
    'tam': 'Tamil',
    'tar': 'Tatar',
    'tat': 'Tatar',
    'tgk': 'Tajik',
    'tel': 'Telugu',
    'tem': 'Temne',
    'tgl': 'Tagalog',
    'tha': 'Thai',
    'tib': 'Tibetan',
    'tig': 'Tigre',
    'tir': 'Tigrinya',
    'tlh': 'Klingon',
    'tog': 'Tonga',
    'ton': 'Tongan',
    'tpi': 'Tok Pisin',
    'tsi': 'Tsimshian',
    'tsn': 'Tswana',
    'tso': 'Tsonga',
    'tsw': 'Tswana',
    'tuk': 'Turkmen',
    'tur': 'Turkish',
    'tut': 'Altaic',
    'tyv': 'Tuvinian',
    'udm': 'Udmurt',
    'uig': 'Uighur',
    'ukr': 'Ukrainian',
    'urd': 'Urdu',
    'uzb': 'Uzbek',
    'ven': 'Venda',
    'vie': 'Vietnamese',
    'vol': 'Volapük',
    'war': 'Waray',
    'wel': 'Welsh',
    'wen': 'Sorbian',
    'wol': 'Wolof',
    'xal': 'Oirat',
    'xho': 'Xhosa',
    'yid': 'Yiddish',
    'yor': 'Yoruba',
    'ypk': 'Yupik languages',
    'zap': 'Zapotec',
    'zha': 'Zhuang',
    'zul': 'Zulu',
    'zun': 'Zuni',
    'zxx': 'No linguistic content'
}

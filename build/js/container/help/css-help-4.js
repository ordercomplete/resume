this["MyApp"]["templates"]["css-help-4"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Що таке селектор псевдоклас?\r\n\r\nСелектор псевдоклас — це ключове слово, додане до\r\nзвичайного селектора, яке визначає його особливий стан\r\nСелектор псевдокласу додається через двокрапку (\":\")\r\n\r\n_____________________________________________________________\r\n\r\nСелектор цільового тегу\r\n\r\nСелектор цільового тегу — це селектор, який вибирає тег,\r\nякщо він має свій якір та в URL сторінки вибраний цей якір\r\nЯкір — це посилання в форматі #id , в якому замість id вказане\r\nзначення атрибута id певного тегу.\r\nПри натисканні на таке посилання, браузер буде прокручувати\r\nсторінку до тегу з цим id\r\n\r\n\r\n#section1:target {\r\ncolor: blue;\r\n}\r\n:target\r\n\r\n_____________________________________________________________\r\n\r\n\r\nСелектор невідвіданих посилань\r\n\r\n<code>Селектор невідвіданих посилань — це селектор, який вибирає\r\nтег <a>, якщо по його посиланню користувач ще не переходив\r\n\r\n    a:link {\r\n    color: blue;\r\n    }\r\n    :link\r\n    </code>\r\n\r\n_____________________________________________________________\r\n\r\nСелектор відвіданих посилань\r\n\r\nСелектор відвіданих посилань — це селектор, який вибирає тег\r\n<a>, якщо по його посиланню користувач уже переходив\r\n\r\n    a:visited {\r\n    color: purple;\r\n    }\r\n\r\n    :visited\r\n\r\n    _____________________________________________________________\r\n\r\n    Селектор наведення\r\n\r\n    Селектор наведення — це селектор, який дозволяє вказати\r\n    стилізацію в той момент, коли користувач навів мишкою на тег\r\n\r\n    a:hover {\r\n    color: blue;\r\n    }\r\n    :hover\r\n\r\n    _____________________________________________________________\r\n\r\n\r\n    Селектор активного тегу\r\n\r\n    Селектор активного тегу — це селектор, який вибирає\r\n    тег, коли користувач на нього натиснув мишкою\r\n\r\n    button:active {\r\n    color: blue;\r\n    }\r\n\r\n    :active\r\n    _____________________________________________________________\r\n\r\n    Селектор фокусованого тегу\r\n\r\n    Селектор фокусованого тегу — це селектор,\r\n    який вибирає тег, коли користувач почав взаємодіяти з ним\r\n    Цей селектор схожий на селектор активного тегу, але\r\n    використовується в більшості випадках для <input> тегу\r\n\r\n    input:focus {\r\n    color: blue;\r\n    }\r\n\r\n    :focus\r\n\r\n    _____________________________________________________________\r\n\r\n    Селектор фокус всередині тегу\r\n\r\n    Селектор фокус всередині тегу — це селектор,\r\n    який вибирає тег, коли користувач почав взаємодіяти\r\n    з ним або з його дитячими тегами\r\n    Цей селектор схожий на селектор фокусованого тегу, але\r\n    використовується в більшості випадках для <form> тегу,\r\n        щоб задати стилізацію при взаємодії з елементами форми\r\n\r\n        form:focus-within {\r\n        background-color: blue;\r\n        }\r\n\r\n        :focus-within\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор мови тегу\r\n\r\n        Селектор мови тегу — це селектор, який вибирає тег,\r\n        який має атрибут lang з вказаним значенням\r\n\r\n        p:lang(fr) {\r\n        color: blue;\r\n        }\r\n\r\n        :lang(value) value — це код мови\r\n\r\n        <p lang=\"fr\">Bonjour! Comment ça va?</p>\r\n        <p lang=\"en\">Hello! How are you?</p>\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор увімкненого тегу\r\n\r\n        Селектор увімкненого тегу — це селектор, який вибирає тег\r\n        форми, який доступний та не заблокований для взаємодії\r\n\r\n        button:enabled {\r\n        color: blue;\r\n        }\r\n\r\n        :enabled\r\n\r\n        <button>Enabled button</button>\r\n        <button disabled>Disabled button</button>\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор вимкненого тегу\r\n\r\n        Селектор вимкненого тегу — це селектор, який вибирає тег\r\n        форми, який не доступний і є заблокований для взаємодії\r\n\r\n        button:disabled {\r\n        color: blue;\r\n        }\r\n\r\n        :disabled\r\n\r\n        <button>Enabled button</button>\r\n        <button disabled>Disabled button</button>\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор редагованого тегу\r\n\r\n        Селектор редагованого тегу — це селектор, який вибирає тег\r\n        форми, в який ми можемо вводити свої значення\r\n\r\n        input:read-write {\r\n        color: blue;\r\n        }\r\n\r\n        :read-write\r\n\r\n        <input>\r\n        <input readonly>\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор нередагованого тегу\r\n\r\n        Селектор нередагованого тегу — це селектор, який вибирає тег\r\n        форми, в який ми не можемо вводити значення, а лише читати\r\n\r\n        input:read-only {\r\n        color: blue;\r\n        }\r\n\r\n        :read-only\r\n\r\n        <input>\r\n        <input readonly>\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор відміченого тегу\r\n\r\n        Селектор відміченого тегу — це селектор, який вибирає\r\n        тег форми, який був відмічений або вибраний користувачем\r\n\r\n        .input-checkbox:checked {\r\n        background-color: green;\r\n        }\r\n\r\n        :checked\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор валідного тегу\r\n\r\n        Селектор валідного тегу — це селектор, який вибирає\r\n        тег поля форми, який пройшов валідацію і є валідним\r\n\r\n        input:valid {\r\n        background-color: green;\r\n        }\r\n\r\n        :valid\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор не валідного тегу\r\n\r\n        Селектор не валідного тегу — це селектор, який вибирає\r\n        тег поля форми, який не пройшов валідацію і не є валідним\r\n\r\n        input:invalid {\r\n        background-color: green;\r\n        }\r\n\r\n        :invalid\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор необов’язкового тегу\r\n\r\n        Селектор необов’язкового тегу — це селектор,\r\n        який вибирає тег поля форми, який є необов’язковим\r\n\r\n        input:optional {\r\n        background-color: green;\r\n        }\r\n\r\n        :optional\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор за межі діапазону тегу\r\n\r\n        Селектор за межі діапазону тегу — це селектор, який\r\n        вибирає <input> тег, значення якого виходить за межі\r\n        вказаного діапазону атрибутів min та max\r\n\r\n        input:out-of-range {\r\n        background-color: green;\r\n        }\r\n        :out-of-range\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор в межах діапазону тегу\r\n\r\n        Селектор в межах діапазону тегу — це селектор, який\r\n        вибирає <input> тег, значення якого знаходиться в межах\r\n        вказаного діапазону атрибутів min та max\r\n\r\n        input:in-range {\r\n        background-color: green;\r\n        }\r\n        :in-range\r\n\r\n        _____________________________________________________________\r\n\r\n        Селектор наявності плейсхолдера в тегу\r\n\r\n        Селектор наявності плейсхолдера в тегу — це селектор,\r\n        який вибирає <input> тег, який має атрибут placeholder\r\n        input:placeholder-shown {\r\n        background-color: green;\r\n        }\r\n\r\n        :placeholder-shown";
},"useData":true});
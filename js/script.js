//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачу:
*/

/*
- Создайте форму и отработайте на ней все события и методы из этого урока
- Добавьте к текстовым полям формы валидацию заполнения полей
и счетчик символов
- Запретите вставку текста в объект textarea этой формы
*/

//========================================================================================================================================================

//ДОМАШКА виконання

/*
1. Изучить теорию
2. Решить задачу:
*/

/*
- Создайте форму и отработайте на ней все события и методы из этого урока
- Добавьте к текстовым полям формы валидацию заполнения полей
и счетчик символов
- Запретите вставку текста в объект textarea этой формы
*/

// Variables
const secondForm = document.forms.secondForm;
const secondFormUsername = secondForm.nameUsername;
const secondFormUsernameLimit = secondFormUsername.getAttribute('maxlength');
const formBarCounter = document.querySelector('.input__counter span');
const formBar = document.querySelector('.input__counter');

formBarCounter.innerHTML = secondFormUsernameLimit;

const secondFormEmail = secondForm.nameEmail;
const secondFormPassword = secondForm.namePassword;
const secondFormPassword2 = secondForm.namePassword2;

const secondFormUsernamePh = secondFormUsername.placeholder;

const secondFormEmailPh = secondFormEmail.placeholder;

secondFormUsername.addEventListener("input", formSetCounter);

function formSetCounter() {
	const formCounterResult = secondFormUsernameLimit - secondFormUsername.value.length;
	formBarCounter.innerHTML = formCounterResult;
}

// Add validation
secondForm.addEventListener("submit", function (event) {
	event.preventDefault();
	if (!secondFormUsername.value) {
		if (!secondFormUsername.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormUsername.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Username is required
		 		</div>`
			);
			secondFormUsername.style.marginBottom = "0px";
		}
	} else {
		secondFormUsername.style.cssText =
			"margin-bottom: 15px;border: 2px solid greenyellow";
	}
	if (emailTest(secondFormEmail)) {
		if (!secondFormEmail.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormEmail.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Email is required
		 		</div>`
			);
			secondFormEmail.style.cssText =
				"margin-bottom: 2px";
		}
	} else {
		secondFormEmail.style.cssText =
			"margin-bottom: 15px;border: 2px solid greenyellow";
	}
	if (!secondFormPassword.value) {
		if (!secondFormPassword.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormPassword.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Password is required
		 		</div>`
			);
			secondFormPassword.style.marginBottom = "2px";
		}
	}
	if (!secondFormPassword2.value) {
		if (!secondFormPassword2.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormPassword2.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Please confirm your password
				</div>`
			);
			secondFormPassword2.style.cssText =
				"margin-bottom: 2px";
		}
	}
	if (secondFormPassword.value.length < 8) {
		if (!secondFormPassword.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormPassword.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Password must be at least 8 character.
				</div>`
			);
			secondFormPassword.style.cssText =
				"margin-bottom: 2px";

		}
		if (!secondFormPassword2.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormPassword2.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Passwords doesn't match
				</div>`
			);
			secondFormPassword2.style.cssText =
				"margin-bottom: 2px";
		}
	} else if (secondFormPassword.value.length >= 8) {
		secondFormPassword.style.cssText =
			"margin-bottom: 15px;border: 2px solid greenyellow";
		secondFormPassword2.style.cssText =
			"margin-bottom: 2px;border: none";
		if (secondFormPassword.value == secondFormPassword2.value) {
			secondFormPassword2.style.cssText =
				"margin-bottom: 15px;border: 2px solid greenyellow";
		}
	}
	if (secondFormPassword.value !== secondFormPassword2.value || secondFormPassword.value == "" || secondFormPassword2.value == "") {
		if (!secondFormPassword2.closest('.second-form__item').querySelector('.second-form__error')) {
			secondFormPassword2.parentElement.insertAdjacentHTML(
				"beforeend",
				`<div class="second-form__error">
					Passwords doesn't match
				</div>`
			);
			secondFormPassword2.style.cssText =
				"margin-bottom: 2px";
		}
	}
});


// Placeholder username
secondFormUsername.addEventListener("focus", function (event) {
	secondFormUsername.placeholder = "";
});
secondFormUsername.addEventListener("blur", function (event) {
	secondFormUsername.placeholder = secondFormUsernamePh;
});
// Placeholder Email
secondFormEmail.addEventListener("focus", function (event) {
	secondFormEmail.placeholder = "";
});
secondFormEmail.addEventListener("blur", function (event) {
	secondFormEmail.placeholder = secondFormUsernamePh;
});


// On focus remove validation
secondFormUsername.addEventListener("focus", function (event) {
	if (formBarCounter.nextElementSibling) {
		formBarCounter.nextElementSibling.remove();
		formBarCounter.style.marginBottom = "15px";
	}
});
secondFormEmail.addEventListener("focus", function (event) {
	if (secondFormEmail.nextElementSibling) {
		secondFormEmail.nextElementSibling.remove();
		secondFormEmail.style.marginBottom = "15px";
	}
});
secondFormPassword.addEventListener("focus", function (event) {
	if (secondFormPassword.nextElementSibling) {
		secondFormPassword.nextElementSibling.remove();
		secondFormPassword.style.marginBottom = "15px";
	} else if (secondFormPassword2.nextElementSibling) {
		secondFormPassword2.nextElementSibling.remove();
		secondFormPassword2.style.marginBottom = "15px";
	}
});
secondFormPassword2.addEventListener("focus", function (event) {
	if (secondFormPassword2.nextElementSibling) {
		secondFormPassword2.nextElementSibling.remove();
		secondFormPassword2.style.marginBottom = "15px";
	}
});


//Функциія теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//========================================================================================================================================================

/* // Проверяем ввод email, выводим ошибку
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
} */
// Свойства и методы форм

// Коллекция всех форм на странице
//document.forms

// Получить коллекцию всех форм на странице
//console.log(document.forms);


// Получить конкретную форму на странице
/*
const mainForm = document.forms[0];
console.log(mainForm);
*/

// Атрибут name
/*
const mainForm = document.forms.main;
console.log(mainForm);
*/

//----

// Разница между document.forms и document.querySelectorAll('form');

/*
// Коллекция
console.log(document.querySelectorAll('form'));
// Живая коллекции
console.log(document.forms);


// Добавление новой формы
document.body.insertAdjacentHTML(
	"beforeend",
	`<form name="some" class="some-form" action="#"></form>`
);
*/

//====================================

// document.forms.elements

//const mainForm = document.forms.main;
//console.log(mainForm.elements);

/*
// Получаем элемент с именем nameInput
const mainFormInput = mainForm.elements.nameInput;
// или mainForm.nameInput
console.log(mainFormInput);
*/
/*
// Получаем коллекцию с именем nameRadio
const mainFormRadioButtons = mainForm.nameRadio;
// или mainForm.elements.nameRadio
console.log(mainFormRadioButtons);
*/

// Обратная ссылка
// element.form

// Получаем форму элемента
//console.log(mainFormInput.form);

//---------------

// Элементы форм

// Работа с input и textarea
/*
Значение можно получить через свойство input.value(строка)
или input.checked(булево значение) для чекбоксов и радиокнопок.
*/

//const mainForm = document.forms.main;

/*
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;
*/
/*
// Получить значение (седержимое) поля
console.log(mainFormInput.value);
// Получить значение (седержимое) текстового поля
console.log(mainFormTextarea.value);
*/

/*
// Присвоить значение (седержимое) поля
mainFormInput.value = "Пока";
// Присвоить значение (седержимое) текстового поля
mainFormTextarea.value = "До встречи!";
*/

/*
const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;
*/

// Получить значение поля type radio
/*
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);
*/

// Получить значение поля type checkbox
/*
console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);
*/

// Получить значение поля type file
//console.log(mainFormFile.value);


// Назначить значение поля type radio
/*
mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = true;
*/

// Назначить значение поля type checkbox
/*
mainFormCheckBox.value = "save";
mainFormCheckBox.checked = true;
*/

// Назначить значение поля type file
//mainFormFile.value = "";

//---------------

// Работа с select и option

/*
Элемент <select> имеет 3 важных свойства:
select.options – коллекция из подэлементов <option>,
select.value – значение выбранного в данный момент <option>,
select.selectedIndex – номер выбранного <option>.

Они дают три разных способа установить значение в <select>:
Найти соответствующий элемент <option> и установить
в option.selected значение true.
Установить в select.value значение нужного <option>.
Установить в select.selectedIndex номер нужного <option>.

Первый способ наиболее понятный,
но (2) и (3) являются более удобными при работе.
*/


/*
const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Получить все options
console.log(mainFormSelect.options);

// Получить индекс выбранного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);
// Получить значение выбранного option
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);
// Получить текст выбранного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);
*/


/*
// Выбрать некий option
const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// mainFormSelect.options[1].selected = true;
// mainFormSelect.selectedIndex = 1;
// mainFormSelect.value = 2;
*/


/*
Параметры:
text – текст внутри <option>,
value – значение,
defaultSelected – если true, то ставится HTML - атрибут selected,
selected – если true, то элемент <option> будет выбранным.

Тут может быть небольшая путаница с defaultSelected и selected.
Всё просто: defaultSelected задаёт HTML - атрибут,
его можно получить как option.getAttribute('selected'),
а selected – выбрано значение или нет,
именно его важно поставить правильно.
Впрочем, обычно ставят оба этих значения
в true или не ставят вовсе(т.е.false).
*/

/*
Элементы <option> имеют свойства:
//Выбрана ли опция.
option.selected
//Номер опции среди других в списке <select>.
option.index
//Содержимое опции (то, что видит посетитель).
option.text
*/


// Добавить новую опцию
// new Option
// option = new Option(text, value, defaultSelected, selected);

/*
Параметры:
text – текст внутри < option >,
value – значение,
defaultSelected – если true, то ставится HTML - атрибут selected,
selected – если true, то элемент < option > будет выбранным.
*/
/*
// Пример
const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);
*/

//---

/*
// Мультивыбор
const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Получаем все выбранные значения из select с multiple
let selectedOptions = Array.from(mainFormSelect.options)
	.filter(option => option.selected)
	.map(option => option.value);

console.log(selectedOptions);
*/

//=============================================

// События форм и их элементов

// Фокусировка focus и blur
/*
Элемент получает фокус (focus), когда пользователь кликает по нему
или использует клавишу Tab.
Также существует HTML - атрибут autofocus, который устанавливает
фокус на элемент, когда страница загружается.
Есть и другие способы получения фокуса.

Фокусировка обычно означает:
«приготовься к вводу данных на этом элементе»,
это хороший момент, чтобы инициализовать или загрузить что-нибудь.

Момент потери фокуса (blur) - это момент,
когда пользователь кликает куда-то ещё или нажимает Tab,
чтобы переключиться на следующее поле формы.
Есть другие причины потери фокуса.

В момент события "потеря фокуса" мы можем выполнить
проверку введённых данных или даже отправить
эти данные на сервер и так далее.
*/

// ----

// Cобытия focus и blur
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function (e) {
	mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});
*/

/*
Дейсвия могут быть самыми разными:
валидация поля, отправка формы и т.д.
*/

// ----

/*
// Методы elem.focus() и elem.blur()
// устанавливают или снимают фокус.

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 3000);
*/


// ----

/*
Фокусировка на любом элементе с помощью tabindex

Многие элементы по умолчанию не поддерживают фокусировку.
Какие именно – зависит от браузера, но одно всегда верно:
поддержка focus/blur гарантирована для элементов,
с которыми посетитель может взаимодействовать:
<button>, <input>, <select>, <a> и т.д.

С другой стороны, элементы форматирования
<div>, <span> – по умолчанию не могут получить фокус.

Метод elem.focus() не работает для них,
и события focus/blur никогда не срабатывают.

Это можно изменить HTML-атрибутом tabindex.
*/

/*
tabindex = "0" ставит элемент в один ряд
с элементами без tabindex.То есть, при переключении
такие элементы будут после элементов с tabindex ≥ 1.
Обычно используется, чтобы включить фокусировку на элементе,
но не менять порядок переключения.Чтобы элемент мог
участвовать в форме наравне с обычными <input>.

tabindex="-1" позволяет фокусироваться на элементе только программно.
Клавиша Tab проигнорирует такой элемент,
но метод elem.focus() будет действовать.
*/


/*
const lesson = document.querySelector('.lesson');

// Реагируем на событие "в фокусе"
lesson.addEventListener("focus", function (e) {
	lesson.classList.add('_focus');
	console.log('Див lesson в фокусе!');
});
// Реагируем на событие "потеря фокуса"
lesson.addEventListener("blur", function (e) {
	lesson.classList.remove('_focus');
	console.log('Див lesson уйшов з фокуса!');
});
*/

// ---

/*
Текущий элемент с фокусом можно получить
из document.activeElement.
*/
//console.log(document.activeElement);

// ---

/*
// События focusin и focusout
// Работают также как и focus/blur но при этом всплывают

const mainForm = document.forms.main;

// Хотим установить фокус на форме при работе с элементами
mainForm.addEventListener("focusin", function (e) {
	mainForm.classList.add('_active');
});
mainForm.addEventListener("focusout", function (e) {
	mainForm.classList.remove('_active');
});

// Споймать на этапе погружения
//, { "capture": true }
*/

//---------------------

// Событие change
// Срабатывает по окончании изменения элемента.

/*
В текстовых input и textarea работает также как
и блур (потеря фокуса), но в select, radio, checkbox и т.д. сразу
*/

/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;
const mainFormTextarea = mainForm.nameTextarea;
const mainFormCheckBox = mainForm.nameCheck;

mainFormInput.addEventListener("change", function (e) {
	console.log('Сработало change в input');
});
mainFormSelect.addEventListener("change", function (e) {
	console.log('Сработало change в select');
});
mainFormFile.addEventListener("change", function (e) {
	console.log('Сработало change в file');
});
mainFormTextarea.addEventListener("change", function (e) {
	console.log('Сработало change в textarea');
});
mainFormCheckBox.addEventListener("change", function (e) {
	console.log('Сработало change в checkbox');
});
*/

//---------------------

// Событие input
/*
Событие input срабатывает каждый раз при изменении значения.
В отличие от событий клавиатуры, оно работает
при любых изменениях значений, даже если они
не связаны с клавиатурными действиями:
вставка с помощью мыши или распознавание речи при диктовке текста.
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("input", function (event) {
	console.log(`value: ${mainFormInput.value}`);
});
*/

//---------------------

// События cut, copy, paste
// Эти события происходят при вырезании/копировании/вставке данных.

/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("copy", function (event) {
	console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Вставляем`);
});
mainFormInput.addEventListener("cut", function (event) {
	console.log(`Вырезаем`);
});
*/

/*
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Нельзя вставить`);
	event.preventDefault();
});
*/

//---------------------

/*
При отправке формы срабатывает событие submit,
оно обычно используется для проверки (валидации)
формы перед её отправкой на сервер или для
предотвращения отправки и обработки её с помощью JavaScript.
*/
/*
Есть два основных способа отправить форму:
1) нажать кнопку <input type="submit"> или <button type="submit"></button>.
2) нажать Enter, находясь на каком-нибудь поле.
*/

/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	console.log('Форма отправляется...');

	// Проверяем поля и если есть ошибки отменяем отправку
	if (!mainFormInput.value) {
		mainFormInput.classList.add('_active');
		console.log('Поле nameInput не заполнено');
		event.preventDefault();
	}
	mainFormInput.addEventListener("focus", function (e) {
		mainFormInput.classList.remove('_active');
	});
});
*/

//---------


// События форм и их элементов

// Отправка формы - событие и метод submit
/*
Чтобы отправить форму на сервер вручную,
мы можем вызвать метод form.submit().
*/
/*
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

// Отправляем форму при потере фокуса у nameInput
mainFormInput.addEventListener("blur", function (e) {
	mainForm.submit();
});
*/

//========================================================================================================================================================

// Практические примеры:

/*
// Проверяем ввод email, выводим ошибку
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
*/

// ----

// Практические примеры:
/*
// Выводим картинку после выбора
const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener("change", function (e) {
	let selectedFile = mainFormFile.files[0];

	// Получаем URL изображения
	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});
*/

//========================================================================================================================================================
// import '../normalize.scss'
// import '../components/header/header'
// import '../Admin/header.scss'

import {CustomSelect} from "../components/select/select";
import '../components/footer/footer.scss'

import './test-edit.scss'
import './test'
import './show'

import '../components/popup.scss'
import {$, addTooltip, navigate} from '../common'

import {_test} from "./model/test"
import {_question} from "./model/question"
import {_answer} from "./model/answer"
import {sortable} from "../components/sortable"

import '../components/accordion/accordion'
import '../Admin/components/main-menu/admin_main_menu'


if ($('.select').el[0]) {
    new CustomSelect('.select', {
        name: 'service_id-btn',
        defaultValue: 'Ford',
        options: [['volkswagen', 'Volkswagen'], ['ford', 'Ford'], ['toyota', 'Toyota'], ['nissan', 'Nissan']],
        onSelected(item) {
            console.log(`Выбранное значение: ${item.textContent}`);
        },
    });
}


_test.markCurrentInMenu()

// navigate(window.location.pathname)
sortable.connect('.questions')


// при создании нового теста показать пустой вопрос
if (!_question.questions().length
  && /\/adminsc\/test\/edit/.test(window.location.pathname)) {
    _question.showFirst()
}

// подсветка текущего теста


$('.test__update').on('click', _test.update)
$('.test-path__update').on('click', _test.update)

// $('.question__sort').on('change', validate.sort)
$('.question__save').on('click', _question.save)
$('.question__show-answers').on('click', _question.showAnswers)
$('.question__delete').on('click', _question.delete)
$('.question__create-button').on('click', _question.create)


$('.answer__delete').on('click', _answer.del)
$('.answer__create-button').on('click', _answer.create)


addTooltip({
    els: $('.question__save').el,
    message: 'Сохранить вопросы и ответы'
})

addTooltip({
    els: $('.question__delete').el,
    message: 'Удалить вопросы и ответы'
})

addTooltip({
    els: $('.question__show-answers').el,
    message: 'Показать ответы'
})

addTooltip({
    els: $('.test-edit-menu__params').el,
    message: 'Редактировать'
})


class FormValidations {
    selectors = {
        form: '[data-js-form]',
        fieldError:'[data-js-form-field-errors]'
    }

    errorMessages = {
        valueMissing: () => 'Пожалуйста, заполните это поле',
        patternMismatch: ({title}) => title || 'Данные не соответствуют формату', 
        tooShort: ({minLength}) => `Слишком короткое значение, минимум символов - ${minLength}`,
        tooLong: ({maxLength}) => `Слишком длинное значение, максимум символов - ${maxLength}`,
    }
    

    constructor() {
        this.bindEvents()
    }

    manageErrors(fieldValidateElement, errorMessages) {
        // Находим элемент, в котором отобразим ошибку 
        const fieldErrorElement = fieldValidateElement.parentElement.querySelector(this.selectors.fieldError)
        fieldErrorElement.innerHTML = errorMessages.map((message) => `${message}`).join('')

    }   

    validateField(fieldValidateElement) {

        // Обращаемся к свойству validity
        const errors = fieldValidateElement.validity
        
        // Создаем список, в который будут пушиться ошибки
        const errorMessagesList: string[] = []
        // Перебираем объект с названием ошибок из validity и, если такове имеются, добавляем в список
        Object.entries(this.errorMessages).forEach(([errorType, getErrorMess]) => {
            if(errors[errorType]) {
                errorMessagesList.push(getErrorMess(fieldValidateElement))
            }
        // После вызываем непосредстенно метод для отображения
            this.manageErrors(fieldValidateElement, errorMessagesList)
            // Если массив ошибок пуст, то все поля валидные
            const isValid = errorMessagesList.length === 0

            fieldValidateElement.ariaInvalid != isValid

            return isValid
        
        })
    }
//  Тут мы определеям, имеется ли форма на странице и вызываем метод для валидации
    onBlure(event) {
        const {target} = event

        // Проверяем есть ли на странице форма и ейсть ли в ней обязательные поля
        const isFormField: boolean = target.closest(this.selectors.form)
        const isRequired: boolean = target.required

        if (isFormField && isRequired) {
            this.validateField(target)
        }
    }

    onSubmit(event) {

        let isFormValid = true
        let firstInvalidField = null

        // Является ли елемент формой 
        const isFormElement = event.target.matches(this.selectors.form)

        if(!isFormElement) {
            return
        }
        // Если является, то деструктурируем все элементы формы и оставляем только те, 
        // что нужно валидировать
        const requiredFieldElements = [...event.target.elements].filter((el) => el.required)
        

        requiredFieldElements.forEach((element) => {
            const isFieldValid = this.validateField(element)
            if(!isFieldValid) {
                isFormValid = false
            }
            if(!firstInvalidField) {
                firstInvalidField = element
            }
        })
        if(!isFormValid) {
            event.preventDefault()
            firstInvalidField.focus()
        }

    }
// Тут мы кидаем слушатели событий на весь документ
    bindEvents() {
        document.addEventListener('blur', (event) => {this.onBlure(event)}, {capture:true})
        document.addEventListener('submit', (event) => {
            {this.onSubmit(event)}
        })
    }
}

export default FormValidations

class Base {
    checkPlaceholder(field, expected) {
        expect($(field)).toHaveAttribute('placeholder', expected)
    }

    errorMessageDisappears(field,errorTxt) {
        $(field).setValue('a') //Enter 'a' into the field
        $(errorTxt).waitForDisplayed({ reverse: true }) //reverse means waitForNotDisplayed
    }    


}

export default Base;
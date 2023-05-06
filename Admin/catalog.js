import { Selector } from "testcafe";
fixture `Catalog`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors();

// ATTRIBUTE

// Add attribute multiple 
test('CAT_001', async t => {
    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const catalog_menu= "[role='menuitem']:nth-of-type(16) .innos-ui-navigation-list-item-text"
    const attribute_list= ".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(4) .innos-ui-navigation-list-item-text"
    const addvalue_button= "[class='innos-ui-col innos-ui-grid-span-4'] .innos-ui-button-default .innos-ui-button-inner"
    const add_button= ".title_bar .innos-ui-button-inner"
    const name_input= "#name"
    const value_input= "#value"
    const name = "attribute multiple test"
    const save_button= ".innos-ui-footer.innos-ui-footer-in-modal > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const multiple_radio= "#type [tabindex='0']:nth-of-type(2) .innos-ui-radio-b-inn"
    const thongbao= ".innos-ui-message-toast > span"
    const filter= "[aria-label='Attribute name Filter Input']"
    const type= "div:nth-of-type(2) > div[role='presentation'] > div[role='rowgroup'] > div:nth-of-type(1) > div:nth-of-type(2)"

    
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, passwords)
    .click(button_login)
    .click(catalog_menu)

    const List_Value= [
        {key: 'a', value: 'A'},
        {key: 'b', value: 'B'},
        {key: 'c', value: 'C'},
    ]
    await t 
    .click(attribute_list)
    .click(add_button)
    .typeText(name_input, name)
    .click(multiple_radio)

    for (const {value} of List_Value){
        await t
        .typeText(value_input, value)
        .click(addvalue_button)
        .pressKey('ctrl+a')
        .pressKey('delete')
    }
    await t
    .click(save_button)
    .expect(Selector(thongbao).innerText).eql("Successful catalog creation")
    .click(filter)
    .typeText(filter, name)
    .expect(Selector(type).innerText).eql("Multiple")
    .wait(2000)
}
)

// Add attribute single

test('CAT_002', async t => {
    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const catalog_menu= "[role='menuitem']:nth-of-type(16) .innos-ui-navigation-list-item-text"
    const attribute_list= ".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(4) .innos-ui-navigation-list-item-text"
    const addvalue_button= "[class='innos-ui-col innos-ui-grid-span-4'] .innos-ui-button-default .innos-ui-button-inner"
    const add_button= ".title_bar .innos-ui-button-inner"
    const name_input= "#name"
    const value_input= "#value"
    const name = "attribute single test"
    const save_button= ".innos-ui-footer.innos-ui-footer-in-modal > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const single_radio= "#type [tabindex='0']:nth-of-type(1) .innos-ui-radio-b-inn"
    const thongbao= ".innos-ui-message-toast > span"
    const filter= "[aria-label='Attribute name Filter Input']"
    const type= "div:nth-of-type(2) > div[role='presentation'] > div[role='rowgroup'] > div:nth-of-type(1) > div:nth-of-type(2)"

    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, passwords)
    .click(button_login)
    .click(catalog_menu)

    const List_Value= [
        {key: 'a', value: 'A'},
        {key: 'b', value: 'B'},
        {key: 'c', value: 'C'},
    ]
    await t 
    .click(attribute_list)
    .click(add_button)
    .typeText(name_input, name)
    .click(single_radio)

    for (const {value} of List_Value){
        await t
        .typeText(value_input, value)
        .click(addvalue_button)
        .pressKey('ctrl+a')
        .pressKey('delete')
    }
    await t
    .click(save_button)
    .expect(Selector(thongbao).innerText).eql("Successful catalog creation")
    .click(filter)
    .typeText(filter, name)
    .expect(Selector(type).innerText).eql("Single")
    .wait(2000)
}
)

// Add attribute trùng tên

test('CAT_003', async t => {
    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const catalog_menu= "[role='menuitem']:nth-of-type(16) .innos-ui-navigation-list-item-text"
    const attribute_list= ".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(4) .innos-ui-navigation-list-item-text"
    const addvalue_button= "[class='innos-ui-col innos-ui-grid-span-4'] .innos-ui-button-default .innos-ui-button-inner"
    const add_button= ".title_bar .innos-ui-button-inner"
    const name_input= "#name"
    const value_input= "#value"
    const name = "attribute single test"
    const save_button= ".innos-ui-footer.innos-ui-footer-in-modal > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const single_radio= "#type [tabindex='0']:nth-of-type(1) .innos-ui-radio-b-inn"
    const thongbao= ".innos-ui-message-toast > span"
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, passwords)
    .click(button_login)
    .click(catalog_menu)

    const List_Value= [
        {key: 'a', value: 'A'},
        {key: 'b', value: 'B'},
        {key: 'c', value: 'C'},
    ]
    await t 
    .click(attribute_list)
    .click(add_button)
    .typeText(name_input, name)
    .click(single_radio)

    for (const {value} of List_Value){
        await t
        .typeText(value_input, value)
        .click(addvalue_button)
        .pressKey('ctrl+a')
        .pressKey('delete')
    }
    await t
    .click(save_button)
    .expect(Selector(thongbao).innerText).eql("Error: Attribute name already exists")
    .wait(2000)
}
)

// Add attribute không có type

test('CAT_004', async t => {
    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const catalog_menu= "[role='menuitem']:nth-of-type(16) .innos-ui-navigation-list-item-text"
    const attribute_list= ".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(4) .innos-ui-navigation-list-item-text"
    const addvalue_button= "[class='innos-ui-col innos-ui-grid-span-4'] .innos-ui-button-default .innos-ui-button-inner"
    const add_button= ".title_bar .innos-ui-button-inner"
    const name_input= "#name"
    const value_input= "#value"
    const name = "attribute null type"
    const save_button= ".innos-ui-footer.innos-ui-footer-in-modal > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao= ".innos-ui-form-item-his-explain > div > div > i"
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, passwords)
    .click(button_login)
    .click(catalog_menu)

    const List_Value= [
        {key: 'a', value: 'A'},
        {key: 'b', value: 'B'},
        {key: 'c', value: 'C'},
    ]
    await t 
    .click(attribute_list)
    .click(add_button)
    .typeText(name_input, name)
    for (const {value} of List_Value){
        await t
        .typeText(value_input, value)
        .click(addvalue_button)
        .pressKey('ctrl+a')
        .pressKey('delete')
    }
    await t
    .click(save_button)
    .expect(Selector(thongbao).innerText).eql("Type cannot be left blank")
    .wait(2000)
}
)



// Edit attribute trùng attribute đang tồn tại trong ds 

test('CAT_006', async t => {
    const username= "appadmin"
    const passwords= "12345678"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const catalog_menu= "[role='menuitem']:nth-of-type(16) .innos-ui-navigation-list-item-text"
    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, passwords)
    .click(button_login)
    .click(catalog_menu)

    const attribute_list= ".innos-ui-his-split-container-bottom-left-container ul[role='menu'] > li:nth-of-type(4)  .innos-ui-navigation-list-item-text"
    const filter_attribute= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const attribute_name= "attribute single test"
    const edit_icon= ".innos-ui-icon-edit.innos-ui-icon [viewBox]"
    const name_modal= "input#name"
    const save_button= ".innos-ui-footer.innos-ui-footer-in-modal > .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao= ".innos-ui-message-toast-notice-message"

    await t
    .click(attribute_list)
    .typeText(filter_attribute, attribute_name)
    .click(edit_icon)
    .click(name_modal)  
    .pressKey('ctrl+a')
    .pressKey('delete')
    .typeText(name_modal, "Colour")
    .click(save_button)

    await t
    .expect(Selector(thongbao).innerText).eql("Error: Attribute name already exists")
    .wait(2000)
}
)

// Xóa attribute  

test('CAT_007', async t =>{
    const username= "appadmin"
    const passwords= "12345678"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const catalog_menu= "[role='menuitem']:nth-of-type(16) .innos-ui-navigation-list-item-text"

    await t
    .maximizeWindow()
    .typeText(form_user, username)
    .typeText(form_pass, passwords)
    .click(button_login)
    .click(catalog_menu)
    
    const attribute_list= ".innos-ui-his-split-container-bottom-left-container ul[role='menu'] > li:nth-of-type(4)  .innos-ui-navigation-list-item-text"
    const filter_attribute= "div:nth-of-type(1) > div:nth-of-type(1) > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const attribute_name= "attribute test"
    const icon_delete="[ref] [role='row']:nth-of-type(1) [viewBox='0 0 1920 512']"
    const button_delete=".rc-virtual-list-holder-inner > div:nth-of-type(1)"
    const button_delete_modal=".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao= ".innos-ui-message-toast > span"

    await t
        .click(attribute_list)
        .typeText(filter_attribute, attribute_name)
        .click(icon_delete)
        .click(button_delete)
        .click(button_delete_modal)
        .expect(Selector(thongbao).innerText).eql("Delete category successfully")
        .wait(3000)

})

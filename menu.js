import { Selector } from 'testcafe';

fixture `Menu`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này


// "Thêm menu chưa tồn tại trong danh sách (không trùng mã + tên)"
test('Case_AU_009', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const List_Menu=[
        {key:'Quote',value:'Quote'},
        {key:'Order',value:'Order'},
        {key:'Catalog',value:'Catalog'},
    ]
    const form_mamenu="input#navigation_basic_form_code"
    const form_tenmenu="input#navigation_basic_form_name"
    const button_save="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Tạo mới thành công"
    const mamenu="testjcc"
    const tenmenu="Test Jcc"
    const click_menu="li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const button_add=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add"
    const filter="[aria-label='Menu Filter Input']"
    const link_click="div[role='document'] div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-checkbox-input.ag-input-field-input"
    await t
        .click(click_menu)
        .click(button_add)
        .typeText(form_mamenu,mamenu)
        .typeText(form_tenmenu,tenmenu)
        for (const {value} of List_Menu) {
        await t
            .typeText(filter,value)
            .wait(1000)
            .click(link_click)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
        }
    await t
        .click(button_save)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})  
//Thêm menu đã tồn tại trong danh sách
test('Case_AU_010', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const form_mamenu="input#navigation_basic_form_code"
    const form_tenmenu="input#navigation_basic_form_name"
    const button_save="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Tạo mới thất bại"
    const mamenu="testjcc"
    const tenmenu="Test Jcc"
    const click_menu="li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const button_add=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add"
    const filter="[aria-label='Menu Filter Input']"
    const link_click="div[role='document'] div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-checkbox-input.ag-input-field-input"
    await t
        .click(click_menu)
        .click(button_add)
        .typeText(form_mamenu,mamenu)
        .typeText(form_tenmenu,tenmenu)
    await t
        .click(button_save)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})


// Chỉnh sửa Menu 
test('Case_AU_011', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const click_menu="li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const filter_mamenu="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const mamenu="testjcc"
    const button_icon_edit=".ag-react-container [viewBox='0 0 512 512']"
    const button_edit=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const filter="[aria-label='Menu Filter Input']"
    const button_save_edit=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const button_thoat=".innos-ui-button.innos-ui-button-medium.innos-ui-button-neutral > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const link_click="div[role='document'] div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div[role='presentation'] > div[role='presentation'] > div:nth-of-type(2) > .ag-checkbox-input.ag-input-field-input"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Cập nhật thành công"
    const List_Menu_Add=[
        {key:'Services',value:'Services'},
    ]
    const List_Menu_remove=[
        {key:'Order',value:'Order'},
    ]
    await t
        .click(click_menu)
        .typeText(filter_mamenu,mamenu)
        .wait(2000)
        .click(button_icon_edit)
        .click(button_edit)
    for (const {value} of List_Menu_Add){
        await t
            .typeText(filter,value)
            .wait(2000)
            .click(link_click)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
    }
    for (const {value} of List_Menu_remove){
        await t
            .typeText(filter,value)
            .wait(2000)
        const check_box=await Selector(link_click).checked
        console.log(check_box)
        if(check_box==true)
        {
            await t
            .wait(2000)
            .click(link_click)
        }
        await t
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
    }
    await t
        .click(button_save_edit)
        .click(button_thoat)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)

})
// Chỉnh sửa Menu thành mã và tên đã tồn tại trong danh sách
test('Case_AU_012', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const click_menu="li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const filter_mamenu="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const mamenu="testjcc"
    const mew_ma_menu= "MenuSale" 
    const mew_ten_menu= "Menu Sale"
    const form_mamenu="input#navigation_basic_form_code"
    const form_tenmenu="input#navigation_basic_form_name"
    const button_icon_edit=".ag-react-container [viewBox='0 0 512 512']"
    const button_edit=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const button_save_edit=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const button_thoat=".innos-ui-button.innos-ui-button-medium.innos-ui-button-neutral > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Cập nhật thất bại"
    await t
        .click(click_menu)
        .typeText(filter_mamenu,mamenu)
        .wait(2000)
        .click(button_icon_edit)
        .click(button_edit)
        .click(form_tenmenu)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_tenmenu,mew_ten_menu)
    await t
        .click(button_save_edit)
        .click(button_thoat)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)

})

//Xóa Menu
test('Case_AU_013', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const click_menu="li:nth-of-type(4)  .innos-ui-navigation-list-item-text > span"
    const filter_mamenu="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const mamenu="testjcc"
    const button_icon_delete="[viewBox='0 0 151 512']"
    const button_delete=".innos-ui-icon.innos-ui-icon-delete.innos-ui-standard-list-item-img-icon"
    const button_delete_modal=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-delete"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Xóa thành công"
    await t
        .click(click_menu)
        .typeText(filter_mamenu,mamenu)
        .wait(2000)
        .click(button_icon_delete)
        .wait(1000)
        .click(button_delete)
        .wait(1000)
        .click(button_delete_modal)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})
import { Selector } from 'testcafe';
fixture `Co So`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này


// Thêm Cơ sở- Tổ chức chưa tồn tại trong danh sách
test('Case_AU_004', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_coso="li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_coso)
    //data
    const ma_coso= "cstc_test"
    const ten_coso= "Test CSTC"
    const loai_coso= "Quầy tiếp nhận"
    const tructhuoc_coso="External facility"
    const note_coso= "noteeee"
    const button_add=".innos-ui-button-fill .innos-ui-button-content"
    const form_ma="input#node_form_code"
    const form_ten="input#node_form_name"
    const form_note="input#node_form_note"
    const select_loai=".innos-ui-form-item-control.innos-ui-form-item-control-required  .innos-ui-select-selector"
    const select_tructhuoc=".innos-ui-form-item:nth-of-type(4) .innos-ui-select-selection-item"
    const select_index_tructhuoc="input#node_form_idParent"
    const select_index_loai="div[title='"+loai_coso+"'] > .innos-ui-select-item-option-content"
    const button_savess="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Tạo mới thành công"
    await t
        .wait(1000)
        .click(button_add)
        .typeText(form_ma,ma_coso)
        .typeText(form_ten,ten_coso)
        .click(select_loai)
        .wait(2000)
        .click(select_index_loai)
        .wait(2000)
        .click(select_tructhuoc)
        .typeText(select_index_tructhuoc,tructhuoc_coso)
        .pressKey('enter')
        .typeText(form_note,note_coso)
        .wait(2000)
        .click(button_savess)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
        .wait(3000)
})

//Thêm Cơ sở- Tổ chức đã tồn tại trong danh sách
test('Case_AU_005', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_coso="li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_coso)
    //data
    const ma_coso= "cstc_test"
    const ten_coso= "Test CSTC"
    const loai_coso= "Quầy tiếp nhận"
    const tructhuoc_coso="External facility"
    const note_coso= "noteeee"
    const button_add=".innos-ui-button-fill .innos-ui-button-content"
    const form_ma="input#node_form_code"
    const form_ten="input#node_form_name"
    const form_note="input#node_form_note"
    const select_loai=".innos-ui-form-item-control.innos-ui-form-item-control-required  .innos-ui-select-selector"
    const select_tructhuoc=".innos-ui-form-item:nth-of-type(4) .innos-ui-select-selection-item"
    const select_index_tructhuoc="input#node_form_idParent"
    const select_index_loai="div[title='"+loai_coso+"'] > .innos-ui-select-item-option-content"
    const button_savess="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium  .innos-ui-button-content"
    const thongbao=".innos-ui-message-toast-notice-message"
    const Fail_thongbao="Tạo mới thất bại"
    await t
        .wait(1000)
        .click(button_add)
        .typeText(form_ma,ma_coso)
        .typeText(form_ten,ten_coso)
        .click(select_loai)
        .wait(2000)
        .click(select_index_loai)
        .wait(2000)
        .click(select_tructhuoc)
        .typeText(select_index_tructhuoc,tructhuoc_coso)
        .pressKey('enter')
        .typeText(form_note,note_coso)
        .wait(2000)
        .click(button_savess)
        .expect(Selector(thongbao).innerText).eql(Fail_thongbao)
})

//Chỉnh sửa Cơ sở- Tổ chức
test('Case_AU_006', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_coso="li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_coso)
    const form_filter=".innos-ui-input-affix-wrapper > .innos-ui-input"
    const ten_coso= "Test CSTC"
    const button_update=".rst__row.rst__rowSearchMatch .rst__toolbarButton > div > button:nth-of-type(1)  .innos-ui-button-content > span"
    const button_update_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const button_save_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const new_ma= "cstc_test"
    const new_ten= "Test edit CSTC"
    const form_ma="input#node_form_code"
    const form_ten="input#node_form_name"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Cập nhật thành công"
    await t
        .typeText(form_filter,ten_coso)
        .click(button_update)
        .click(button_update_modal)
        .click(form_ma)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ma,new_ma)
        .click(form_ten)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ten,new_ten)
        .click(button_save_modal)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})
//Chỉnh sửa Cơ sở- Tổ chức thành mã và tên đã tồn tại trong danh sách
test('Case_AU_007', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_coso="li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_coso)
    const form_filter=".innos-ui-input-affix-wrapper > .innos-ui-input"
    const ten_coso= "Test edit CSTC1"
    const button_update=".rst__row.rst__rowSearchMatch .rst__toolbarButton > div > button:nth-of-type(1)  .innos-ui-button-content > span"
    const button_update_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const button_save_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const new_ma= "cstc_test"
    const new_ten= "Test CSTC"
    const form_ma="input#node_form_code"
    const form_ten="input#node_form_name"
    const thongbao=".innos-ui-message-toast-notice-message"
    const fail_thongbao="Cập nhật thất bại"
    await t
        .typeText(form_filter,ten_coso)
        .click(button_update)
        .click(button_update_modal)
        .click(form_ma)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ma,new_ma)
        .click(form_ten)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ten,new_ten)
        .click(button_save_modal)
        .expect(Selector(thongbao).innerText).eql(fail_thongbao)
})
//Xóa Cơ sở- Tổ chức
test('Case_AU_008', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_coso="li:nth-of-type(5)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_coso)
    const form_filter=".innos-ui-input-affix-wrapper > .innos-ui-input"
    const ten_coso= "Test CSTC"
    const button_delete=".rst__row.rst__rowSearchMatch .rst__toolbarButton > div > button:nth-of-type(2)  .innos-ui-button-content > span"
    const button_delete_modal=".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const thongbao=".innos-ui-message-toast-notice-message"
    const delete_thongbao="Xóa thành công"
    await t
        .typeText(form_filter,ten_coso)
        .click(button_delete)
        .click(button_delete_modal)
        .expect(Selector(thongbao).innerText).eql(delete_thongbao)


})
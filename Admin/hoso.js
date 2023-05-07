import { Selector } from 'testcafe';

fixture `Menu`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này

    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const menu_manage_user= ".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting= "li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    
//"Thêm Hồ sơ mới chưa tồn tại tên trong danh sách"
test('AU_018', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const selector_them=".innos-ui-ag-grid-panel .innos-ui-button-medium:nth-of-type(1) span:nth-child(1)"
    const selector_menu_hoso="li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
    await t.click(selector_menu_hoso).click(selector_them)
    const ma_hoso="testjc"
    const ten_hoso="Test Hồ Sơ"
    const selector_tenhs="#file_form_name"
    const selector_mahs="#file_form_code"
    const selector_menu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(2) .innos-ui-select-selector"
    const selector_itemmenu="[title='test jcc'] div"
    const selector_chucvu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(3) .innos-ui-select-selector"
    const selector_itemchucvu="[title='qc-bm'] div"
    const selector_khoa=".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
    const selector_itemkhoa="[title='Test CSTC'] div"
    const selector_cong="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-phone innos-ui-grid-h-space-1 innos-ui-grid-v-space-1'] .innos-ui-button-default span"
    const selector_luu=".innos-ui-modal-footer .innos-ui-button-default span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    await t
    .typeText(selector_mahs,ma_hoso)
    .typeText(selector_tenhs,ten_hoso)
    .click(selector_menu)
    .wait(2000)
    .click(selector_itemmenu)
    .click(selector_chucvu)
    .wait(2000)
    .click(selector_itemchucvu)
    .click(selector_khoa)
    .wait(2000)
    .click(selector_itemkhoa)
    .click(selector_cong)
    .wait(2000)
    .click(selector_luu)
    .expect(Selector(thongbao).innerText).eql("Tạo mới thành công")
    .wait(2000)
})
//Thêm Hồ sơ trùng tên với hồ sơ đã tồn tại trong danh sách
test('AU_019', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const selector_them=".innos-ui-ag-grid-panel .innos-ui-button-medium:nth-of-type(1) span:nth-child(1)"
    const selector_menu_hoso="li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
    await t.click(selector_menu_hoso).click(selector_them)
    const ma_hoso="testjc"
    const ten_hoso="testjc"
    const selector_tenhs="#file_form_name"
    const selector_mahs="#file_form_code"
    const selector_menu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(2) .innos-ui-select-selector"
    const selector_itemmenu="[title='test jcc'] div"
    const selector_chucvu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(3) .innos-ui-select-selector"
    const selector_itemchucvu="[title='qc-bm'] div"
    const selector_khoa=".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
    const selector_itemkhoa="[title='Test CSTC'] div"
    const selector_cong="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-phone innos-ui-grid-h-space-1 innos-ui-grid-v-space-1'] .innos-ui-button-default span"
    const selector_luu=".innos-ui-modal-footer .innos-ui-button-default span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    await t
    .typeText(selector_mahs,ma_hoso)
    .typeText(selector_tenhs,ten_hoso)
    .click(selector_menu)
    .wait(2000)
    .click(selector_itemmenu)
    .click(selector_chucvu)
    .wait(2000)
    .click(selector_itemchucvu)
    .click(selector_khoa)
    .wait(2000)
    .click(selector_itemkhoa)
    .click(selector_cong)
    .wait(2000)
    .click(selector_luu)
    .expect(Selector(thongbao).innerText).eql("Tạo mới thất bại")
    .wait(2000)
})
//Chỉnh sửa Hồ sơ
test('AU_020', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const selector_menu_hoso="li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
    await t.click(selector_menu_hoso)
    const ma_hoso="testjc"
    const selector_filter_mahoso="div:nth-of-type(4) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const selector_button_edit=".ag-react-container [viewBox='0 0 512 512']"
    const selector_button_sua=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const selector_menu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(2) .innos-ui-select-selector"
    const selector_itemmenu="[title='test jcc'] div"
    const selector_chucvu="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-tablet innos-ui-grid-h-space-1 innos-ui-grid-v-space-1']:nth-of-type(3) .innos-ui-select-selector"
    const selector_itemchucvu="[title='qc-sale'] div"
    const selector_khoa=".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
    const selector_itemkhoa="[title='JC Computing'] div"
    const selector_cong="[class='innos-ui-row innos-ui-grid-position-left innos-ui-row-std-ext-phone innos-ui-grid-h-space-1 innos-ui-grid-v-space-1'] .innos-ui-button-default span"
    const selector_luu=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(3) span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    await t
        .typeText(selector_filter_mahoso,ma_hoso)
        .click(selector_button_edit)
        .click(selector_button_sua)
        .click(selector_menu)
        .wait(2000)
        .click(selector_itemmenu)
        .click(selector_chucvu)
        .wait(2000)
        .click(selector_itemchucvu)
        .click(selector_khoa)
        .wait(2000)
        .click(selector_itemkhoa)
        .click(selector_cong)
        .wait(2000)
        .click(selector_luu)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thành công")
        .wait(2000)
})
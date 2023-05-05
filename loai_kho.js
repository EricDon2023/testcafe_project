import { Selector } from 'testcafe';

fixture `Loai Kho`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này

// Thêm Loại kho
test('Case_AU_001', async t => {    
    
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(20) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const loai_kho=".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(6) .innos-ui-navigation-list-item-text span"
    const button_add=".innos-ui-button-fill .innos-ui-button-content"
    const form_ma="input#node_type_basic_form_code"
    const form_ten="input#node_type_basic_form_name"
    const fill_ma="loaikho_test"
    const fill_ten="Test JC"
    const button_add_modal=".innos-ui-modal-footer .innos-ui-button-default .innos-ui-button-content"
    const msg=".innos-ui-message-toast-notice-message"
    const check_msg="Tạo mới thành công"
    const form_filter_ma="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const result_filter="[ref='centerContainer'] [role] [tabindex='-1']:nth-of-type(2)"
    await t
        .click(loai_kho)
        .click(button_add)
        .typeText(form_ma,fill_ma)
        .typeText(form_ten,fill_ten)
        .click(button_add_modal)
        .expect(Selector(msg).innerText).eql(check_msg)
        .typeText(form_filter_ma,fill_ma)
        .expect(Selector(result_filter).count).eql(1)
        .expect(Selector(result_filter).innerText).eql(fill_ma)
    });

// Chỉnh sửa Loại kho
test('Case_AU_002', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="[role='menuitem']:nth-of-type(18) .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const loai_kho=".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(6) .innos-ui-navigation-list-item-text span"
    const fill_ma="testjsc"
    const fill_ten_new="JSC Test"
    const form_ten="input#node_type_basic_form_name"
    const form_filter_ma="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const result_filter="[ref='centerContainer'] [role] [tabindex='-1']:nth-of-type(2)"
    const button_sua="div:nth-of-type(5) .innos-ui-icon.innos-ui-icon-form > svg"
    const button_sua_modal=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit"
    const button_save=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-content"
    const msg=".innos-ui-message-toast-notice-message"
    const check_msg="Cập nhật thành công"
    await t
        .click(loai_kho)
        .typeText(form_filter_ma,fill_ma)
        .expect(Selector(result_filter).count).eql(1)
        .expect(Selector(result_filter).innerText).eql(fill_ma)
        .click(button_sua)
        .click(button_sua_modal)
        .click(form_ten)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ten,fill_ten_new)
        .click(button_save)
        .expect(Selector(msg).innerText).eql(check_msg)
    });


// Xóa loại kho
test('Case_AU_003', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="[role] [role='menuitem']:nth-of-type(20) .innos-ui-navigation-list-submenu-text"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const loai_kho=".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(6) .innos-ui-navigation-list-item-text span"
    const form_filter_ma="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const result_filter="[ref='centerContainer'] [role] [tabindex='-1']:nth-of-type(2)"
    const fill_ma="testjsc"
    const button_3_cham=".innos-ui-icon.innos-ui-icon-menu.m-0 > svg"
    const button_xoa=".innos-ui-icon.innos-ui-icon-delete.innos-ui-standard-list-item-img-icon"
    const button_xoa_modal=".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const msg=".innos-ui-message-toast-notice-message"
    const check_msg="Xóa thành công"
    await t
        .click(loai_kho)
        .typeText(form_filter_ma,fill_ma)
        .expect(Selector(result_filter).count).eql(1)
        .expect(Selector(result_filter).innerText).eql(fill_ma)
        .click(button_3_cham)
        .click(button_xoa)
        .click(button_xoa_modal)
        .expect(Selector(msg).innerText).eql(check_msg)
    });   
    
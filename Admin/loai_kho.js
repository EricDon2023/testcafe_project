import { Selector } from 'testcafe';

fixture `Loai Kho`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/`
    .skipJsErrors();
    
// Loại Kho - Sửa
test('AU_001', async t => {
    const form_user= "input#username"
    const form_pass= "input#password"
    const input_username= "qc-jcecom"
    const input_password= "147258369"
    const login_button= ".innos-ui-button-inner"
    const menu_setting= "[role] [role='menuitem']:nth-of-type(18) .innos-ui-navigation-list-submenu-text"
    const menu_manage_user= ".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    await t
        .maximizeWindow()
        .typeText(form_user, input_username)
        .typeText(form_pass, input_password)
        .click(login_button)
        .click(menu_setting)
        .click(menu_manage_user)
    const loai_kho=".innos-ui-navigation-list-his-wrapper [role='menuitem']:nth-of-type(6) .innos-ui-navigation-list-item-text span"
    const fill_ma="loaikho_test"
    const fill_ten_new="JC Test"
    const form_ten="input#node_type_basic_form_name"
    const form_filter_ma="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const result_filter="[ref='centerContainer'] [role] [tabindex='-1']:nth-of-type(2)"
    const edit_icon="div:nth-of-type(5) .innos-ui-icon.innos-ui-icon-form > svg"
    const button_sua_modal=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-edit"
    const save_button=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-content"
    const msg=".innos-ui-message-toast-notice-message"

    await t
        .click(loai_kho)
        .typeText(form_filter_ma, fill_ma)
        .expect(Selector(result_filter).count).eql(1)
        .expect(Selector(result_filter).innerText).eql(fill_ma)
        .click(edit_icon)
        .click(button_sua_modal)
        .click(form_ten)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(form_ten, fill_ten_new)
        .click(save_button)
        .expect(Selector(msg).innerText).eql("Cập nhật thành công")
        .wait(3000)
    });

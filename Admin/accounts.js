import { Selector } from 'testcafe';

fixture `Tài Khoản`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này

    const username= "qc-jcecom"
    const passwords= "147258369"
    const form_user= "input#username"
    const form_pass= "input#password"
    const button_login= ".innos-ui-button-inner"
    const menu_manage_user= ".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting= "li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    
//Thêm Tài khoản mới chưa tồn tại tên trong danh sách 
test('AU_023', async t => {
        await t
            .maximizeWindow()
            .typeText(form_user, username)
            .typeText(form_pass, passwords)
            .click(button_login)
            .click(menu_setting)
            .click(menu_manage_user)
        const selector_them=".innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
        const selector_menu_tk="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
        await t.click(selector_menu_tk)
        const ds_tk=[
            {tk:'testauto1',mk:'22446688',email:'testauto001@gmail.com',sdt:'1122334455',hoso:'testauth'}
            // {tk:'testauto2',mk:'11335577',email:'testauto002@gmail.com',sdt:'6677889922',hoso:'testauth'}
        ]
        const selector_username="#user_form_username"
        const selector_password="#user_form_password"
        const selector_email="#user_form_email"
        const selector_sdt="#user_form_phoneNumber"
        const selector_hoso=".innos-ui-select-selection-placeholder"
        const selector_cong=".innos-ui-grid-h-space-1.innos-ui-grid-position-left.innos-ui-grid-v-space-1.innos-ui-row.innos-ui-row-std-ext-phone .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg > g[role='presentation'] > path"
        const selector_luu=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) span:nth-child(1)"
        const thongbao=".innos-ui-message-toast-notice-message"
        for(const item of ds_tk)
        {
            await t
            .click(selector_them)
            .typeText(selector_username,item.tk)
            .typeText(selector_password,item.mk)
            .typeText(selector_email,item.email)
            .typeText(selector_sdt,item.sdt)
            .click(selector_hoso)
            .wait(2000)
            .click("[title='"+item.hoso+"'] div")
            .click(selector_cong)
            .click(selector_luu)
            .expect(Selector(thongbao).innerText).eql("Tạo mới thành công")
        }
})

//Thêm Tài khoản trùng tên với tài khoản đã tồn tại trong danh sách
test('AU_024', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const selector_them=".innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const selector_menu_tk="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
    await t.click(selector_menu_tk)
    const ds_tk=[
        // {tk:'testauto1',mk:'22446688',email:'testauto001@gmail.com',sdt:'1122334455',hoso:'testauth'},
        {tk:'testauto1',mk:'11335577',email:'testauto002@gmail.com',sdt:'6677889922',hoso:'testauth'}
    ]
    const selector_username="#user_form_username"
    const selector_password="#user_form_password"
    const selector_email="#user_form_email"
    const selector_sdt="#user_form_phoneNumber"
    const selector_hoso=".innos-ui-select-selection-placeholder"
    const selector_cong=".innos-ui-grid-h-space-1.innos-ui-grid-position-left.innos-ui-grid-v-space-1.innos-ui-row.innos-ui-row-std-ext-phone .innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg > g[role='presentation'] > path"
    const selector_luu=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    for(const item of ds_tk)
    {
        await t
        .click(selector_them)
        .typeText(selector_username,item.tk)
        .typeText(selector_password,item.mk)
        .typeText(selector_email,item.email)
        .typeText(selector_sdt,item.sdt)
        .click(selector_hoso)
        .wait(2000)
        .click("[title='"+item.hoso+"'] div")
        .click(selector_cong)
        .click(selector_luu)
        .expect(Selector(thongbao).innerText).eql("Tạo mới thất bại")
    }
})

//Chỉnh sửa Tài khoản
test('AU_025', async t => {
    await t
        .maximizeWindow()
        .typeText(form_user, username)
        .typeText(form_pass, passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
    const selector_them=".innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text > .innos-ui-button-content"
    const selector_menu_tk="li:nth-of-type(1)  .innos-ui-navigation-list-item-text > span"
    await t.click(selector_menu_tk)
    const ds_tk_sua=[
        // {tk:'testauto1',mk:'22446688',email:'testauto001@gmail.com',sdt:'1122334455',hoso:'testauth'},
        {tk:'testauto1',mk:'11335577',email:'testauto002@gmail.com',sdt:'6677889922',hoso:'testauth'}
    ]
    const selector_filter_username="div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const selector_button_edit=".ag-react-container [viewBox='0 0 512 512']"
    const selector_sua=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(3) span:nth-child(1)"
    const selector_email="#user_form_email"
    const selector_sdt="#user_form_phoneNumber"
    const selector_luu=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(4) span:nth-child(1)"
    const thongbao=".innos-ui-message-toast-notice-message"
    for (const item of ds_tk_sua)
    {
        await t
        .typeText(selector_filter_username,item.tk)
        .wait(2000)
        .click(selector_button_edit)
        .click(selector_sua)
        .click(selector_email)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .click(selector_sdt)
        .pressKey('ctrl+a')
        .pressKey('delete')
        .typeText(selector_email,item.email)
        .typeText(selector_sdt,item.sdt)
        .click(selector_luu)
        .expect(Selector(thongbao).innerText).eql("Cập nhật thành công")
    }
})
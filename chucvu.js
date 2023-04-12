import { Selector } from 'testcafe';

fixture `Menu`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này


// "Thêm Chức Vụ chưa tồn tại trong danh sách (không trùng mã + tên)"

test('Case_AU_014', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_chucvu="li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_chucvu)
    const button_add=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg"
    const form_ma_CV="input#code"
    const form_ten_CV="input#name"
    const ma_CV="testjcc"
    const ten_CV="Test Jcc"
    const filter="div#role-modal-main-content div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) .ag-input-field-input.ag-text-field-input"
    const checkbox="div#role-modal-main-content div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div > div[role='presentation']  .ag-checkbox-input.ag-input-field-input"
    const button_save="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Tạo mới thành công"
    const List_CV=[
        {key:'Hệ Thống',value:'Quyền Administrator'},
        {key:'Hệ Thống',value:'Cài đặt nâng cao'},
        {key:'Hệ Thống',value:'Chỉnh sửa cài đặt'},
        {key:'Hệ Thống',value:'Quyền cơ sở'},
    ]
    await t
        .click(button_add)
        .typeText(form_ma_CV,ma_CV)
        .typeText(form_ten_CV,ten_CV)
    for (const {value} of List_CV) {
        await t
            .typeText(filter,value)
            .wait(1000)
            .click(checkbox)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
        }
    await t
        .click(button_save)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})
//"Thêm Chức Vụ đã tồn tại trong danh sách "

test('Case_AU_015', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_chucvu="li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_chucvu)
    const button_add=".innos-ui-button-icon.innos-ui-icon.innos-ui-icon-add > svg"
    const form_ma_CV="input#code"
    const form_ten_CV="input#name"
    const ma_CV="testjcc"
    const ten_CV="Test Jcc"
    const filter="div#role-modal-main-content div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) .ag-input-field-input.ag-text-field-input"
    const checkbox="div#role-modal-main-content div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div > div[role='presentation']  .ag-checkbox-input.ag-input-field-input"
    const button_save="div[role='document'] .innos-ui-button.innos-ui-button-default.innos-ui-button-medium > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Tạo mới thất bại"
    const List_CV=[
        {key:'Hệ Thống',value:'Quyền Administrator'},
        {key:'Hệ Thống',value:'Cài đặt nâng cao'},
        {key:'Hệ Thống',value:'Chỉnh sửa cài đặt'},
        {key:'Hệ Thống',value:'Quyền cơ sở'},
    ]
    await t
        .click(button_add)
        .typeText(form_ma_CV,ma_CV)
        .typeText(form_ten_CV,ten_CV)
    for (const {value} of List_CV) {
        await t
            .typeText(filter,value)
            .wait(1000)
            .click(checkbox)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
        }
    await t
        .click(button_save)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})

//Chỉnh sửa Chức Vụ

test('Case_AU_016', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_chucvu="li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_chucvu)
    const filter_ma_CV="div#root div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const ma_CV="testjcc"
    const button_icon_edit=".ag-react-container [viewBox='0 0 512 512']"
    const button_edit_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const filter="div#role-modal-main-content div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) .ag-input-field-input.ag-text-field-input"
    const checkbox="div#role-modal-main-content div[role='grid'] > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div[role='gridcell'] > div[role='presentation'] > div > div[role='presentation']  .ag-checkbox-input.ag-input-field-input"
    const button_save_edit=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const button_thoat=".innos-ui-button.innos-ui-button-medium.innos-ui-button-neutral > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Cập nhật thành công"
    const List_CV_add=[
        {key:'Báo cáo',value:'Không thể xuất file'},
        {key:'Báo cáo',value:'Xem báo cáo'},
    ]
    const List_CV_delete=[
        {key:'Hệ Thống',value:'Chỉnh sửa cài đặt'},
        {key:'Hệ Thống',value:'Quyền cơ sở'},
    ]
    await t
        .typeText(filter_ma_CV,ma_CV)
        .wait(2000)
        .click(button_icon_edit)
        .click(button_edit_modal)
    for (const {value} of List_CV_add){
        await t
            .typeText(filter,value)
            .wait(2000)
            .click(checkbox)
            .click(filter)
            .pressKey('ctrl+a')
            .pressKey('delete')
    }
    for (const {value} of List_CV_delete){
        await t
            .typeText(filter,value)
            .wait(2000)
        const check_box=await Selector(checkbox).checked
        console.log(check_box)
        if(check_box==true)
        {
            await t
            .wait(2000)
            .click(checkbox)
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

//Chỉnh sửa Chức Vụ thành mã và tên đã tồn tại trong danh sách

test('Case_AU_017', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_chucvu="li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_chucvu)
    const filter_ma_CV="div#root div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const ma_CV="testjcc1"
    const button_icon_edit=".ag-react-container [viewBox='0 0 512 512']"
    const button_edit_modal=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(1) .innos-ui-button-inner"
    const button_save_edit=".innos-ui-modal-footer .innos-ui-button-medium:nth-of-type(2) .innos-ui-button-inner"
    const button_thoat=".innos-ui-button.innos-ui-button-medium.innos-ui-button-neutral > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Cập nhật thất bại"
    const form_ma_CV="input#code"
    const form_ten_CV="input#name"
    const ma_CV_new="testjcc"
    const ten_CV_new="Test Jcc"
    await t
        .typeText(filter_ma_CV,ma_CV)
        .wait(2000)
        .click(button_icon_edit)
        .click(button_edit_modal)
        .click(form_ma_CV)
        .pressKey("ctrl+a")
        .pressKey("delete")
        .typeText(form_ma_CV,ma_CV_new)
        .click(form_ten_CV)
        .pressKey("ctrl+a")
        .pressKey("delete")
        .typeText(form_ten_CV,ten_CV_new)
        .click(button_save_edit)
        .click(button_thoat)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})

// Xóa Chức Vụ

test('Case_AU_018', async t => {
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
    const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
    const click_chucvu="li:nth-of-type(3)  .innos-ui-navigation-list-item-text > span"
    await t
        .maximizeWindow()
        .typeText(form_user,username)
        .typeText(form_pass,passwords)
        .click(button_login)
        .click(menu_setting)
        .click(menu_manage_user)
        .click(click_chucvu)
    const filter_ma_CV="div#root div[role='grid'] > div:nth-of-type(1) > div:nth-of-type(2) > div[role='rowgroup'] > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div > div[role='presentation'] > div:nth-of-type(2) > .ag-input-field-input.ag-text-field-input"
    const ma_CV="testjcc"
    const button_icon_delete="[viewBox='0 0 151 512']"
    const button_delete=".innos-ui-icon.innos-ui-icon-delete.innos-ui-standard-list-item-img-icon"
    const button_delete_modal=".innos-ui-button.innos-ui-button-medium.innos-ui-button-negative.innos-ui-confirm-button-cancel > .innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
    const thongbao=".innos-ui-message-toast-notice-message"
    const success_thongbao="Xóa thành công"
    await t
        .typeText(filter_ma_CV,ma_CV)
        .wait(2000)
        .click(button_icon_delete)
        .wait(1000)
        .click(button_delete)
        .wait(1000)
        .click(button_delete_modal)
        .expect(Selector(thongbao).innerText).eql(success_thongbao)
})
import { Selector } from 'testcafe';
fixture `Ho So`
    .page `https://beta.jccomputing.sunny.net.vn/ecommerce-admin/login`
    .skipJsErrors(); // <----- Khác ở chỗ này
    const username="qc-jcecom"
    const passwords="147258369"
    const form_user="input#username"
    const form_pass="input#password"
    const button_login=".innos-ui-button-inner"
    test('AU_018', async t => {
        const menu_manage_user=".innos-ui-navigation-list-submenu-placement-bottomLeft [role='menuitem']:nth-of-type(3) .innos-ui-navigation-list-item-text"
        const menu_setting="li:nth-of-type(18) > div[role='button'] > .innos-ui-navigation-list-submenu-text"
        const click_hoso="li:nth-of-type(2)  .innos-ui-navigation-list-item-text > span"
        await t
            .maximizeWindow()
            .typeText(form_user,username)
            .typeText(form_pass,passwords)
            .click(button_login)
            .click(menu_setting)
            .click(menu_manage_user)
            .click(click_hoso)
        //Tiến hành tạo hồ sơ
        const button_them=".innos-ui-button-fill.innos-ui-button-inner.innos-ui-button-text"
        const form_ten_hoso="input#file_form_name"
        const form_ma_hoso= "input#file_form_code"
        const form_menu="input#file_form_idNavigation"
        const form_chucvu="input#file_form_idRole"
        const form_khoa=".innos-ui-select-allow-clear .innos-ui-select-selection-placeholder"
        const button_add_hoso=".innos-ui-grid-h-space-1.innos-ui-grid-position-left.innos-ui-grid-v-space-1.innos-ui-row.innos-ui-row-std-ext-phone .innos-ui-button-fill.innos-ui-button-has-only-icon.innos-ui-button-inner  svg"
        const ma_hoso="testjs"
        const ten_hoso="Test hồ sơ"
        const list_hoso=[
            {menu:"test jcc",chucvu:"qc-sale",khoa:"Test CSTC"},
            {menu:"Test Menu",chucvu:"qc-bm",khoa:"Test CSTC"}
        ]
        await t
            .click(button_them)
            .typeText(form_ten_hoso,ten_hoso)
            .typeText(form_ma_hoso,ma_hoso)
            for ( const {menu,chucvu,khoa} of list_hoso)
            {
                const checkkhoa="[title='"+khoa+"']"
                const checkmenu="[title='"+menu+"']"
                const checkchucvu="[title='"+chucvu+"']"
                await t
                .click(form_menu)
                .click(checkmenu)
                .click(form_chucvu)
                .click(checkchucvu)
                .click(form_khoa)
                .click(checkkhoa)
                .click(button_add_hoso)
            }
        
        

    })
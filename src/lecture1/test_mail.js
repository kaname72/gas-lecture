/* 実行するときは、以下のコメントアウトを外す */

// cc, bccはカンマ区切りでメールアドレスを設定する
// https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String)
// https://developers.google.com/apps-script/guides/services/quotas#current_limitations

// サンプルに用いているsendEmail
function testMail() {

    // メール送信
    var content = {
        to: "sato_dodo_it@yahoo.co.jp",
        cc: "satohiro.kuriyama@geniee.co.jp,test@sample.com",
        bcc: "",
        subject: "GAS講習に関するお問い合わせ",
        name: "GAS-lecture フォーム",
        body: "本文を入力",
    }
    MailApp.sendEmail(content)
}

// ドキュメントに記載ている書き方
// https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String)
function testMail2() {

    var recipient = "sato_dodo_it@yahoo.co.jp"
    var subject = "GAS講習に関するお問い合わせ"
    var body = "本文を入力"
    var options = {
        cc: "satohiro.kuriyama@geniee.co.jp,test@sample.com",
        bcc: "",
        name: "GAS-lecture フォーム",
    }

    // メール送信
    MailApp.sendEmail(recipient, subject, body, options)
}

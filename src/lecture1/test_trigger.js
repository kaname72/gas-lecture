// try-catchの挙動

// フォームのSubmitイベントで着火する
function testTriggerNoTryCatch(e) {
    console.log("start submitForm");
    console.log("ここにソースを記載する");
    console.log("eventの中身を確認", e);
    console.log("eventのトリガーID", e.triggerUid)
}

// フォームのSubmitイベントで着火する
function testTrigger(e) {
    console.log("start submitForm");

    try {
        console.log("ここにソースを記載する");
        console.log("eventの中身を確認", e);
        console.log("eventのトリガーID", e.triggerUid)
    } catch(err) {
        console.log("発生したエラー：" + err);
    } finally {
        console.log("end submitForm");
    }
}

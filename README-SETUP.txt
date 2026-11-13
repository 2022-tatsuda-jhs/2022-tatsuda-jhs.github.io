龍田中学校 同窓会公式サイト｜設定機能追加版

【公開するファイル（GitHubリポジトリ直下）】
index.html
style.css
script.js
site-config.js
site-config.json

【公開しないファイル】
admin-editor.html（幹事のパソコンだけで開く設定エディター）
README-SETUP.txt（この説明書）

【初回設定】
1. GitHubで既存の index.html, style.css, script.js を更新。
2. site-config.js と site-config.json を追加。
3. GitHub Pagesの公開サイトを更新して表示を確認。

【幹事が更新するとき】
1. admin-editor.html をPCで開く（ダブルクリック）。
2. 必要なら最新の site-config.json を読み込む。
3. 項目を編集し「site-config.json をダウンロード」。
4. GitHubで site-config.json を開き、編集ボタンからダウンロードしたJSONの内容を貼り付けてCommit changes。
5. 数分後にサイトで反映を確認。

【重要な安全上の注意】
・admin-editor.html はGitHubにアップロードしない。
・GitHub Pagesと site-config.json は一般公開される。名簿、メール、電話番号、パスワード、APIキー、アクセストークン等を保存しない。
・サイト更新の認証はGitHubのログインとリポジトリの書き込み権限で行う。
・GitHub Organizationの管理者は複数名、各自のアカウントで管理。2FAを設定する。
・設定エディターはログイン画面や自動保存機能を持たない。公開にはGitHub上でのCommitが必要。
・公開前に個人情報が含まれていないか確認する。

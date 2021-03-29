## 環境構築
### Visual Studio Codeの設定
歯車の設定ボタン→settings→terminal.integrated.shell.windows→Git Bashのパス  
```
C:\\Program Files\\Git\\bin\\bash.exe  
```
Visual Studio Codeを閉じて再起動する

### Gitでgas lectureをCloneする
```
$ cd ~
$ mkdir app
$ cd app
$ git clone <your repository gas-lecture>
$ cd gas-lecture 
```

### Terminalからnode.jsの設定

```
$ node -v # v14.15.0
$ npm -v # 6.14.8
$ npm install @google/clasp -g
$ clasp -v # 2.3.0
$ npm install -g gulp@4.0.2
$ gulp -v # 4.0.2
$ cd /your/local/gas-lecture
$ npm install


```
### スプレッドシートとフォームの複製
https://drive.google.com/drive/folders/1GvesrRXI172ItpdVqNABz73InHnRzNCY  
フォームとスプレッドシートを複製する
フォームのスクリプトエディタからスクリプトIDをコピーして.clasp.json のスクリプトIDに置き換える


### claspを使ってみる
```
$ cd /your/local/gas-lecture/src/lecture2
$ clasp login #ブラウザから認証する
$ # authorize.jsの好きなところを修正して保存 
$ clasp push


```


### GITの使い方
#### フォーク元からデータを取り込む
```
git remote add upstream https://github.com/fukan-data/gas-lecture.git # フォーク元のリポジトリを登録
git fetch upstream # ローカルのupstreamリポジトリにフォーク元のソースを更新
git marge upstream/master #ローカルのupstreamリポジトリのソースを手元の環境マージする
```
#### githubからpullする
```
git pull origin master

```

#### ソースを修正する


#### ソースをgithubへpushする
```
git add # staging環境に差分を更新
git commit -m '更新内容記載' # indexにcommitを登録
git push origin master # master branchにcommitをpushする
```














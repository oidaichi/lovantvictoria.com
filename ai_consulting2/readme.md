# LOVANT VICTORIA - AIコンサルティング企業ホームページ

マークダウンファイルを編集するだけでコンテンツを更新できるプロフェッショナルなAIコンサルティング企業のウェブサイトです。

## 🎯 特徴

- **マークダウン駆動**: `src/content/homepage.md` を編集するだけでコンテンツ更新
- **初心者フレンドリー**: プログラミング知識不要でメンテナンス可能
- **モダンデザイン**: 2025年のデザイントレンドを取り入れた美しいUI
- **レスポンシブ対応**: 全デバイスで最適表示

## 📁 プロジェクト構造

```
lovant-victoria-website/
├── package.json                    ← 依存関係設定
├── astro.config.mjs                ← Astro設定
├── tailwind.config.mjs             ← スタイル設定
├── README.md                       ← このファイル
└── src/
    ├── content/
    │   └── homepage.md             ← 🎯 ここを編集してコンテンツ更新
    ├── types/
    │   └── content.ts              ← TypeScript型定義
    ├── layouts/
    │   └── Layout.astro            ← ページレイアウト
    ├── pages/
    │   └── index.astro             ← メインページ
    └── components/
        └── Homepage.tsx            ← ホームページコンポーネント
```

## 🚀 セットアップ手順

### 1. プロジェクトのセットアップ

```bash
# フォルダを作成して移動
mkdir lovant-victoria-website
cd lovant-victoria-website

# 依存関係をインストール
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` にアクセス

### 3. 本番用ビルド

```bash
npm run build
npm run preview
```

## ✏️ コンテンツの編集方法

### 基本的な編集

**重要**: コンテンツを変更するには、`src/content/homepage.md` ファイルのみを編集してください。

```markdown
---
title: "生成AIで、経営判断の迷いを確信に変える"
subtitle: "導入3ヶ月で営業利益＋3億円の実績"
cta_primary: "無料経営診断を依頼する"
cta_secondary: "実績レポートをダウンロード"
---

# 見出しを変更したい場合
新しい見出しテキスト

## セクション見出しも簡単に変更
新しいセクション内容...
```

### よくある編集例

#### 1. メインタイトルの変更
```yaml
title: "新しいメインタイトル"
```

#### 2. ボタンテキストの変更
```yaml
cta_primary: "新しいボタンテキスト"
```

#### 3. 課題の追加・編集
```markdown
#### 課題5：新しい課題タイトル
課題の説明文

##### AI解決策：解決策の説明
- **具体的な解決策1**
  - 詳細説明
- **具体的な解決策2**
  - 詳細説明
```

#### 4. 比較表の編集
マークダウンの表形式で簡単に編集可能：

```markdown
| 項目 | A社 | B社 | LOVANT VICTORIA |
|------|-----|-----|-----------------|
| 新項目 | 内容1 | 内容2 | 内容3 |
```

## 🎨 使用技術

- **Astro**: 静的サイトジェネレーター
- **React + TypeScript**: コンポーネント開発
- **Tailwind CSS**: スタイリング
- **Gray-matter**: マークダウン解析
- **Lenis**: スムーススクロール

## 🔧 トラブルシューティング

### エラーが出た場合

```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install

# 開発サーバーを再起動
npm run dev
```

### Node.jsのバージョン
Node.js 18以上を使用してください。

## 📝 メンテナンスのコツ

1. **マークダウンファイルのバックアップ**: 編集前に `homepage.md` をコピーして保存
2. **段階的な変更**: 大きな変更は少しずつ行い、都度確認
3. **プレビュー確認**: 変更後は必ずブラウザで表示確認

## 🆘 サポート

- マークダウンの書き方: [Markdown Guide](https://www.markdownguide.org/)
- このプロジェクトは初心者でも簡単にメンテナンスできるよう設計されています
- `src/content/homepage.md` を編集するだけで、プロフェッショナルなサイトを維持できます
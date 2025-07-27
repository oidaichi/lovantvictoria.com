# LOVANT VICTORIA - AIコンサルティング企業ホームページ

プロフェッショナルなAIコンサルティング企業のウェブサイトです。Astro + React + Tailwind CSSで構築されています。

## プロジェクト構造

```
lovant-victoria-website/
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── README.md
└── src/
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   └── index.astro
    └── components/
        ├── Hero.jsx
        ├── Problem.jsx
        ├── Solutions.jsx
        ├── Strengths.jsx
        └── CTA.jsx
```

## セットアップ手順

### 1. プロジェクトディレクトリを作成

```bash
mkdir lovant-victoria-website
cd lovant-victoria-website
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` にアクセスして確認できます。

### 4. 本番用ビルド

```bash
npm run build
npm run preview
```

## 主な機能

- **レスポンシブデザイン**: 全デバイスに対応
- **モダンUI**: ダークテーマ + グラデーション
- **スムーススクロール**: Lenisライブラリを使用
- **インタラクティブ要素**: ホバーエフェクト、アニメーション
- **SEO対応**: 適切なメタタグ設定

## 使用技術

- **Astro**: 静的サイトジェネレーター
- **React**: UI コンポーネント
- **Tailwind CSS**: スタイリング
- **TypeScript**: 型安全性
- **Lenis**: スムーススクロール

## カスタマイズ

### 色の変更
`src/layouts/Layout.astro` の CSS変数を編集してください。

### コンテンツの編集
各コンポーネントファイル内の配列データを変更することで、コンテンツを更新できます。

### レイアウトの調整
Tailwind CSSクラスを使用してレスポンシブレイアウトを調整できます。

## トラブルシューティング

### 依存関係のエラー
```bash
rm -rf node_modules package-lock.json
npm install
```

### ビルドエラー
Node.js 18以上を使用していることを確認してください。

## ライセンス

このプロジェクトはMITライセンスの下で提供されています。
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><title>プライバシーポリシー - tax-law-mcp API</title>
<style>body{font-family:sans-serif;max-width:700px;margin:40px auto;padding:0 20px;line-height:1.8;color:#333}h1{font-size:1.5em}h2{font-size:1.2em;margin-top:2em}</style>
</head>
<body>
<h1>プライバシーポリシー</h1>
<p>最終更新日: 2026年3月2日</p>

<h2>1. サービス概要</h2>
<p>tax-law-mcp API（以下「本API」）は、日本の法令・通達・裁決事例の情報を提供する無料の公開APIです。</p>

<h2>2. 収集する情報</h2>
<p>本APIは以下の情報をサーバーログとして一時的に記録する場合があります：</p>
<ul>
<li>IPアドレス（レート制限の目的のみ）</li>
<li>リクエストされたエンドポイントとパラメータ</li>
</ul>
<p>個人を特定する情報（氏名、メールアドレス等）は収集しません。</p>

<h2>3. 情報の利用目的</h2>
<ul>
<li>サービスの安定運用（レート制限）</li>
<li>不正利用の防止</li>
</ul>

<h2>4. 第三者への提供</h2>
<p>収集した情報を第三者に提供することはありません。</p>

<h2>5. データソース</h2>
<p>本APIが提供する法令情報はe-Gov法令検索API、通達情報は国税庁ホームページ、裁決事例は国税不服審判所ホームページから取得しています。本APIは情報の正確性を保証するものではありません。</p>

<h2>6. お問い合わせ</h2>
<p>本ポリシーに関するお問い合わせは、<a href="https://github.com/kentaroajisaka/tax-law-mcp/issues">GitHubリポジトリ</a>までお願いします。</p>
</body>
</html>`);
}

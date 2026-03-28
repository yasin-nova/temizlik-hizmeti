# Pro Temizlik Hizmetleri

Node.js (Express) + EJS + Materialize tabanlı kurumsal site.

## Yerel çalıştırma

```bash
npm install
npm start
```

Uygulama: `http://localhost:3000`

## Git: `vercel-deploy` branch

Bu depo **`vercel-deploy`** branch’inde Vercel uyumlu export (`module.exports = app`) ve `vercel.json` içerir.

### GitHub’a ilk push

1. GitHub’da yeni bir boş depo oluşturun (README eklemeyin veya sonra birleştirin).
2. Aşağıdaki komutlarda `KULLANICI` ve `REPO` değerlerini kendi hesabınıza göre değiştirin:

```bash
cd cleaning-services-site-main
git remote add origin https://github.com/KULLANICI/REPO.git
git push -u origin vercel-deploy
```

İsterseniz `main` branch’i de oluşturup birleştirebilirsiniz:

```bash
git checkout -b main
git merge vercel-deploy
git push -u origin main
```

## Vercel deploy

1. [vercel.com](https://vercel.com) → **Add New Project** → GitHub deposunu içe aktarın.
2. **Production Branch** olarak `vercel-deploy` seçin (veya `main` merge ettikten sonra `main`).
3. **Framework Preset:** Other (veya boş).
4. **Build Command:** boş bırakılabilir veya `npm install` (Vercel `npm install` çalıştırır).
5. **Output Directory:** boş (Node sunucusu `index.js` üzerinden).
6. **Environment Variables:** e-posta gönderimi için `host`, `nm_port`, `user`, `pass` vb. tanımlayın (`.env` yerine Vercel panelinden).

Deploy sonrası üretim URL’sinde `canonical` ve site haritası doğru domain’i kullanır; gerekirse `SITE_URL` ortam değişkeni ekleyebilirsiniz (ileride kullanım için).

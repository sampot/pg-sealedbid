# 密封拍賣（pg-sealedbid）

與 2–3 位電腦買家同時密封出價，競標收藏品並累積價值。

## 執行

以靜態伺服器開啟 `index.html`，不需安裝或建置。

```sh
npx --yes vitest run
```

一鍵開啟：https://play.samkuo.me/?open=sampot%2Fpg-sealedbid

系列：桌遊。最高紀錄使用 `/api/kv/pg-sealedbid-best`，離線時退回 localStorage。

素材授權與來源見 [ATTRIBUTION.md](./ATTRIBUTION.md)。

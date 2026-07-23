# Diktafon CZ

Statická PWA aplikace pro české hlasové diktování, přepis a analýzu obsahu.

## Funkce

- Nahrávání hlasu přes `MediaRecorder`
- Živý časovač a pulzování podle hlasitosti mikrofonu
- Wake Lock a tichý audio loop pro lepší běh na pozadí
- Přepis přes `/api/transcribe`, s fallbackem na české Web Speech rozpoznávání v podporovaných prohlížečích
- Analýza přes `/api/analyze`, s lokální záložní analýzou ve statické verzi
- Kopírování přepisu i analýzy
- Export přepisu a analýzy do e-mailu ve formátu Markdown
- Sdílení odkazu na aplikaci
- PWA manifest a offline cache základních souborů

## Spuštění

```bash
npx serve
# nebo
python -m http.server 8000
```

Pro plnohodnotný serverový přepis a AI analýzu doplň endpointy:

- `POST /api/transcribe` s polem formuláře `file`, odpověď `{ "text": "..." }`
- `POST /api/analyze` s JSON `{ "transcript": "..." }`, odpověď `{ "analysis": "..." }`

Bez těchto endpointů aplikace využije dostupné prohlížečové rozpoznávání řeči a lokální textovou analýzu.

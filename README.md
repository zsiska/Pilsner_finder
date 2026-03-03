# 🍺 Hospoda AI - Chytrý vyhledávač hospod

Moderní webová aplikace s AI asistentem pro vyhledání nejbližší hospody v okolí.

## ✨ Nové AI funkce

- **🤖 AI Asistent** - Konverzační rozhraní pro přirozené vyhledávání
- **🎤 Hlasové ovládání** - Řekni co hledáš (Web Speech API)
- **💡 Chytré doporučení** - AI generované tipy pro každou hospodu
- **⚡ Quick Actions** - Rychlé filtry (nejbližší, se zahrádkou, levné pivo, otevřeno teď)
- **🎨 Moderní dark UI** - Elegantní design s animacemi a glassmorphism efekty

## 🚀 Funkce

### Vyhledávání
- **Geolokace** - Automatické zjištění aktuální polohy
- **OpenStreetMap** - Vyhledávání skutečných hospod přes Overpass API
- **Filtry** - Hospody se zahrádkou, bezbariérové, atd.
- **Nastavitelný radius** - 500m až 10km

### Interakce
- **Chat interface** - Napiš co hledáš přirozeným jazykem
- **Hlasový vstup** - Podporuje češtinu
- **Interaktivní mapa** - Dark theme Leaflet mapa
- **Navigace** - Propojení s Google Maps

### Design
- **Dark mode** - Elegantní tmavý design
- **Animace** - Plynulé přechody a efekty
- **Responzivní** - Optimalizováno pro mobily
- **PWA** - Instalovatelná jako aplikace

## 🛠️ Technologie

- HTML5 + CSS3 (CSS Variables, Glassmorphism, Animations)
- Vanilla JavaScript (ES6+)
- Web Speech API (hlasové ovládání)
- Geolocation API
- Leaflet.js + CartoDB Dark tiles
- Overpass API (OpenStreetMap)

## 💬 AI Asistent umí

Napiš nebo řekni:
- "Ahoj" - přivítání
- "Hospoda se zahrádkou" - filtr venkovního posezení
- "Levné pivo" - tip na úsporné hospody
- "Co je otevřeno teď" - aktuálně otevřené podniky
- "Tip" - užitečné rady

## 📱 Spuštění

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# Pak otevři http://localhost:8000
```

## 📝 Licence

MIT

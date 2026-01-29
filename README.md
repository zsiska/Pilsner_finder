# 🍺 Nejbližší Hospoda

Webová aplikace pro vyhledání nejbližší hospody v okolí vaší aktuální polohy.

## Funkce

- **Geolokace** - Automatické zjištění vaší aktuální polohy
- **Vyhledávání v reálném čase** - Využívá OpenStreetMap (Overpass API) pro vyhledání skutečných hospod, barů a pivních zahrad
- **Nastavitelný radius** - Možnost nastavit vzdálenost vyhledávání od 500m do 10km
- **Interaktivní mapa** - Zobrazení hospody na mapě s možností navigace
- **Navigace** - Přímé propojení s Google Maps pro pěší navigaci
- **PWA** - Možnost instalace jako aplikace na mobil

## Technologie

- **HTML5** - Geolocation API
- **CSS3** - Moderní responzivní design
- **JavaScript** - Vanilla JS bez frameworků
- **Leaflet.js** - Interaktivní mapy
- **OpenStreetMap** - Mapové podklady
- **Overpass API** - Vyhledávání míst (hospody, bary, pivní zahrady)

## Jak to funguje

1. Klikněte na tlačítko "Najít nejbližší hospodu"
2. Povolte přístup k vaší poloze
3. Aplikace vyhledá všechny hospody v okolí
4. Výsledky jsou seřazeny podle vzdálenosti
5. Můžete zobrazit hospodu na mapě nebo spustit navigaci

## Spuštění lokálně

```bash
# Jednoduchý HTTP server (Python 3)
python -m http.server 8000

# Nebo pomocí Node.js
npx serve
```

Pak otevřete http://localhost:8000

## Data

Aplikace využívá data z OpenStreetMap prostřednictvím Overpass API. Vyhledává místa označená jako:
- `amenity=pub` (hospody)
- `amenity=bar` (bary)
- `amenity=biergarten` (pivní zahrady)

## Licence

MIT

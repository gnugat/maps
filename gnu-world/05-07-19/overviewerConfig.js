var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "GNUworld - overworld",
        "GNUworld - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1562330801",
        "north_direction": "lower-left",
        "center": [
            -314,
            67,
            94
        ],
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "GNUworld Overworld",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "GNUworld_overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "GNUworld - overworld",
            "last_rendertime": 1562328041,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "minZoom": 0,
            "spawn": [
                192,
                96,
                208
            ],
            "north_direction": 0
        },
        {
            "name": "GNUworld Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "GNUworld_nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "GNUworld - nether",
            "last_rendertime": 1562327968,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};

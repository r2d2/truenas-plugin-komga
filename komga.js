{ 
    "name": "komga", 
    "official": false,
    "release": "13.0-RELEASE", 
    "artifact": 
    "https://github.com/r2d2/truenas-plugin-komga.git", 
    "properties": 
    {
        "nat":"1",
        "nat_forwards": "tcp(8080:8080)"
    },

    "pkgs": [ "openjdk11" ], 

    "packagesite": "http://pkg.FreeBSD.org/${ABI}/quarterly", 
 
    "fingerprints": {
          "plugin-default": [ { 
              "function": "sha256", 
              "fingerprint": "b0170035af3acc5f3f3ae1859dc717101b4e6c1d0a794ad554928ca0cbb2f438"
              }
            ]
    },
}
const ARRAY = [
    {
        "Name": "Dylan",
        "Desc": "'Indie Boy' - Pinterest",
        "Song": "6GGtHZgBycCgGBUhZo81xe",
        "img": "https://i.pinimg.com/236x/0f/84/90/0f8490a8f47263d76c5e8427f2a47034.jpg",
    },
    {
        "Name": "Christopher",
        "Desc": "Somewhere in france...",
        "Song": "7DbdUf8aHSYoliSjO6LZv6",
        "img": "https://i.pinimg.com/236x/36/4e/df/364edfca66a2f4bafde2639869c770bd.jpg",
    },
    {
        "Name": "Brian",
        "Desc": "Builder, beer expert.",
        "Song": "2QfiRTz5Yc8DdShCxG1tB2",
        "img": "https://i.pinimg.com/236x/3d/c4/eb/3dc4eb542f719901a0be427f6570976a.jpg",
    },
    {
        "Name": "Tao <3",
        "Desc": "A faded mysterious background...",
        "Song": "44zcMuVzpIb0RnzuxipJOn",
        "img": "https://i.pinimg.com/236x/cd/cc/16/cdcc168b052fba50f7f4c2c014af0908.jpg",
    },
    {
        "Name": "Charlie",
        "Desc": "The way he's holding that phone....",
        "Song": "2takcwOaAZWiXQijPHIx7B",
        "img": "https://i.pinimg.com/236x/16/d4/c4/16d4c412157dd0ab622df0f615b1f802.jpg",
		"DevTop": true
    },
    {
        "Name": "Nick",
        "Desc": "Camera couldn't be closer",
        "Song": "6ZaiqbV2GfUtrUlhsu58fN",
        "img": "https://i.pinimg.com/236x/33/ca/a3/33caa36fbe824d48d468f3174ad01f90.jpg",
    },
    {
        "Name": "Michael B. Jordan",
        "Desc": "American Actor",
        "Song": "2Oo397nWzelAKMQBBIL8YI",
        "img": "https://i.pinimg.com/236x/36/07/be/3607bedc034df871eb4de34f8c881fd9.jpg",
		"Actor": true,
		"Famous": true
    },
    {
        "Name": "Oliver",
        "Desc": "Shirtless in the middle of nowhere",
        "Song": "6Im9k8u9iIzKMrmV7BWtlF",
        "img": "https://i.pinimg.com/236x/78/93/0b/78930b5a827346ba144679ceba870f3a.jpg",
    },
    {
        "Name": "Dan",
        "Desc": "Manages to pull of outfits from peaky blinders",
        "Song": "2x8evxqUlF0eRabbW2JBJd",
        "img": "https://i.pinimg.com/236x/51/1b/2b/511b2bae8383c97dace64e2100070e75.jpg",
    },
    {
        "Name": "Tom",
        "Desc": "Wonder what he's looking at over there...",
        "Song": "0mr8FAnN9X70p5KRUwMIJx",
        "img": "https://i.pinimg.com/236x/7b/0d/c5/7b0dc5f0179c400fb067f61ea4449234.jpg",
		"Actor": true,
		"Famous": true
    },
    {
        "Name": "Harry",
        "Desc": "Blonde Boy. <br>You'll have to 'View Smash' to see him..",
        "Song": "68rVGSTnCiFOET9k5Vd8Se",
        "img": "https://i.pinimg.com/236x/0b/c5/96/0bc5964a3219ce61394fc6bc1b761cd3.jpg",
    },
    {
        "Name": "Tyler",
        "Desc": "Can't tell if there's anything under the water..",
        "Song": "7pT6WSg4PCt4mr5ZFyUfsF",
        "img": "https://i.pinimg.com/236x/51/4d/6a/514d6af14dbd4fce7f00ca1cd9b92364.jpg",
    },
    {
        "Name": "Ricky",
        "Desc": "Amazing in every way.",
        "Song": "6cJSXxvl9l94huIUIqsEQo",
        "img": "https://i.pinimg.com/236x/b1/b1/a5/b1b1a547d0bba65d41bc3e665cced578.jpg",
    },
    {
        "Name": "Luke",
        "Desc": "A suit made for anything",
        "Song": "3lAun9V0YdTlCSIEXPvfsY",
        "img": "https://i.pinimg.com/236x/07/79/38/0779383d304307062526575fe68a3918.jpg",
		"Famous": true,
		"Actor": true
    },
    {
        "Name": "Tristan",
        "Desc": "What a side profile",
        "Song": "1xWVRCOHH0OzTKQQPqbIPw",
        "img": "https://i.pinimg.com/236x/64/0e/d1/640ed1f23dec8b262606dd8950bd78af.jpg",
    },
    {
        "Name": "Rios",
        "Desc": "Doesn't look too happy..",
        "Song": "77loZpT5Y5PRP1S451P9Yz",
        "img": "https://i.pinimg.com/236x/b1/90/dc/b190dc7bdfd5d3c911ec5936d46cca2d.jpg",
    },
    {
        "Name": "Will",
        "Desc": "100% Vanilla",
        "Song": "1qPbGZqppFwLwcBC1JQ6Vr",
        "img": "https://i.pinimg.com/236x/b3/9d/5b/b39d5bb7ee81d3f0d52010e5eeb8bd8c.jpg",
    },
    {
        "Name": "Pierce",
        "Desc": "Absolutely amazing",
        "Song": "61QEkw7VnsH9kWUm1Zjunq",
        "img": "https://i.pinimg.com/236x/6f/28/35/6f283564611fc0a210ea7fcbe9b966bc.jpg",
    },
    {
        "Name": "Benji Krol",
        "Desc": "Many different personalities, all of them amazing.",
        "Song": "1djCoU5rvnq2zXFyD2iqq4",
        "img": "https://i.pinimg.com/236x/3e/4b/62/3e4b62ad20abbf496cc93efeae40b0fb.jpg",
		"DevTop": true,
		"Famous": true,
		"Model": true,
		"Gallery Model": [23,22,21,20,18],
		"SocialLinks": "<a href='https://twitter.com/BenjiKrol'>Twitter</a> <a href='https://www.instagram.com/benjikrol/'>Instagram</a> <a href='https://www.tiktok.com/@benjikrol'>TikTok</a> <a href='https://www.youtube.com/channel/UCTiRzu_j0baxb0HPPEMVspg'>YouTube</a>"
    },
    {
        "Name": "Nathan",
        "Desc": "The beard kinda works...",
        "Song": "3BovdzfaX4jb5KFQwoPfAw",
        "img": "https://i.pinimg.com/236x/34/29/09/342909afa3550e5ce831d646ec1c2b9e.jpg",
    },
    {
        "Name": "Benji Krol",
        "Desc": "UwU face?<br>2016 Musically",
        "Song": "0qOnSQQF0yzuPWsXrQ9paz",
        "img": "https://i.pinimg.com/236x/67/85/34/678534f3340ec2a9428ee3759b5db923.jpg",
		"DevTop": true,
		"Famous": true,
		"Gallery Model": [23,22,21,20,18],
		"SocialLinks": "<a href='https://twitter.com/BenjiKrol'>Twitter</a> <a href='https://www.instagram.com/benjikrol/'>Instagram</a> <a href='https://www.tiktok.com/@benjikrol'>TikTok</a> <a href='https://www.youtube.com/channel/UCTiRzu_j0baxb0HPPEMVspg'>YouTube</a>"
    },
    {
        "Name": "Benj Krol (but cat)",
        "Desc": "Benji Krol (but cat)<br>Nothing to add..<br><small>MARRYME</small>",
        "Song": "1owGm6QDclYTJ40SMz97rW",
        "img": "https://i.pinimg.com/236x/8f/56/79/8f5679c549c7dc7fcedc9f1756127edf.jpg",
		"DevTop": true,
		"Famous": true,
		"Gallery Model": [23,22,21,20,18],
		"SocialLinks": "<a href='https://twitter.com/BenjiKrol'>Twitter</a> <a href='https://www.instagram.com/benjikrol/'>Instagram</a> <a href='https://www.tiktok.com/@benjikrol'>TikTok</a> <a href='https://www.youtube.com/channel/UCTiRzu_j0baxb0HPPEMVspg'>YouTube</a>"
    },
    {
        "Name": "Benji Krol (but maid)",
        "Desc": "wowowowowowowowowowowowowowo",
        "Song": "60jQTAr2OkFcV4SWSRz3st",
        "img": "https://i.pinimg.com/236x/2c/76/1c/2c761c25cd132e9b6dbed640d1312597.jpg",
		"DevTop": true,
		"Famous": true,
		"Gallery Model": [23,22,21,20,18],
		"SocialLinks": "<a href='https://twitter.com/BenjiKrol'>Twitter</a> <a href='https://www.instagram.com/benjikrol/'>Instagram</a> <a href='https://www.tiktok.com/@benjikrol'>TikTok</a> <a href='https://www.youtube.com/channel/UCTiRzu_j0baxb0HPPEMVspg'>YouTube</a>"
    },
    {
        "Name": "Benji Krol",
        "Desc": "The nail varnish really makes a statement",
        "Song": "1Qrg8KqiBpW07V7PNxwwwL",
        "img": "https://i.pinimg.com/236x/b1/47/f5/b147f5881552c531c0e0ea2e54ebb858.jpg",
		"DevTop": true,
		"Famous": true,
		"Gallery Model": [23,22,21,20,18],
		"SocialLinks": "<a href='https://twitter.com/BenjiKrol'>Twitter</a> <a href='https://www.instagram.com/benjikrol/'>Instagram</a> <a href='https://www.tiktok.com/@benjikrol'>TikTok</a> <a href='https://www.youtube.com/channel/UCTiRzu_j0baxb0HPPEMVspg'>YouTube</a>"
    },
    {
        "Name": "Xander",
        "Desc": "With a look of concern in his eyes.",
        "Song": "6GGtHZgBycCgGBUhZo81xe",
        "img": "https://i.pinimg.com/236x/58/4c/f2/584cf2f1e0d4cf0d43dc6db6bb5dbe6d.jpg",
    },
    {
        "Name": "Ross",
        "Desc": "Not sure why the number 22 is relavent, but it makes the song easy.",
        "Song": "3yII7UwgLF6K5zW3xad3MP",
        "img": "https://i.pinimg.com/236x/f0/10/7d/f0107d65966005bf58f0fcdafd6f1499.jpg",
    },
    {
        "Name": "Joey Mills",
        "Desc": "Award winning pornstar. Your mothers worst nightmare, And your fathers wet dream.",
        "Song": "5XeFesFbtLpXzIVDNQP22n",
        "img": "https://i.pinimg.com/236x/02/47/93/024793a7f8a413e07585e8d7cdb9a4e8.jpg",
		"Famous": true,
		"Actor": true
    },
    {
        "Name": "Paris",
        "Desc": "'Are you happy to be in Paris?'<br>(yes)",
        "Song": "0Oqxt6JixieLHbwMfnJGWO",
        "img": "https://i.pinimg.com/236x/b9/c0/bf/b9c0bf57c2967ac81fa1a78dc6940bca.jpg",
    },
    {
        "Name": "Romeo",
        "Desc": "Did my heart love till now? forswear it, sight! For I ne'er saw true beauty till this night.",
        "Song": "3sAYxq1986j3ydqLv6jwUJ",
        "img": "https://i.pinimg.com/236x/09/b2/89/09b2890a805ca0ae4c0dd3f8c3fe789d.jpg",
    },
    {
        "Name": "Chris",
        "Desc": "CONS: Feels like he's about to advertise a car",
        "Song": "0xb6220jAyOgKwukn1VxZ8",
        "img": "https://i.pinimg.com/236x/2e/4b/a3/2e4ba36293c7f5e4a60ec9dd194f5de5.jpg",
    },
    {
        "Name": "Louis",
        "Desc": "Is he advertising the shorts or himself??",
        "Song": "5TbzAWWc5eJaANpA9kfGCd",
        "img": "https://i.pinimg.com/236x/61/39/46/613946cf23b5f28568f281dd6797aa33.jpg",
    },
    {
        "Name": "Holland",
        "Desc": "meh",
        "Song": "6q0qgZI8jHyyFbsZDXtG39",
        "img": "https://i.pinimg.com/236x/fe/49/2d/fe492d987d24a289f4582cb123b6481e.jpg",
    },
    {
        "Name": "Neal Caffrey",
        "Desc": "Artist, FBI Consultant, <s>Basically a hypnotist :o</s>",
        "Song": "4svZDCRz4cJoneBpjpx8DJ",
        "img": "https://i.pinimg.com/236x/1e/03/eb/1e03eb703244cc5f4258c0f7e7eb936d.jpg",
		"Famous": true
    },
    {
        "Name": "Felix",
        "Desc": "omg the look",
        "Song": "1R0a2iXumgCiFb7HEZ7gUE",
        "img": "https://i.pinimg.com/236x/ad/ca/c3/adcac33df55388233c26f81081361d52.jpg",
    },
    {
        "Name": "Chris",
        "Desc": "Looks like he's being arrested for something.",
        "Song": "40DwUg5zPX8H23WpTdD2iW",
        "img": "https://i.pinimg.com/236x/45/bb/06/45bb065c0520362a08d8fe9721d96b57.jpg",
    },
    {
        "Name": "William",
        "Desc": "Clearly in the peaky blinders.",
        "Song": "40DwUg5zPX8H23WpTdD2iW",
        "img": "https://i.pinimg.com/236x/21/24/f9/2124f9adfcf5521bec85dbdebda43879.jpg",
    },
    {
        "Name": "Ethan",
        "Desc": "Kinda attractive, kinda evil.",
        "Song": "5k38wzpLb15YgncyWdTZE4",
        "img": "https://i.pinimg.com/236x/1d/73/ec/1d73ec97abe00cea5ba9d2207eb6b1b7.jpg",
    },
    {
        "Name": "Oliver",
        "Desc": "wow<br>'Under love's heavy burden do I sink'<br>Amazing",
        "Song": "5VxmI3IdgAxWVvUnJoLuY2",
        "img": "https://i.pinimg.com/236x/ac/60/0e/ac600ec3405240b465af707a21443dea.jpg",
		"DevTop": true
    },
    {
        "Name": "Chad",
        "Desc": "Can't really tell much from the image<br>idk why you clicked it",
        "Song": "3JUeBSM4bsJGwYCVRqMeuC",
        "img": "https://i.pinimg.com/236x/df/ac/6a/dfac6a0b69eed8a3af5390d280b77364.jpg",
    },
    {
        "Name": "Robbie",
        "Desc": "I can sense alot of suppressed anger.",
        "Song": "1QFh8OH1e78dGd3VyJZCAC",
        "img": "https://i.pinimg.com/236x/36/b8/65/36b865936b74b860611ca90307f3517e.jpg",
    },
    {
        "Name": "Leonardo DiCaprio",
        "Desc": "'Not the kind of person who tries to be cool or trendy, definitely an individual.'",
        "Song": "4IvZLDtwBHmBmwgDIUbuwa",
        "img": "https://i.pinimg.com/236x/8c/11/ae/8c11aeb14aa1581acd4552a78f218679.jpg",
		"Famous": true
    },
    {
        "Name": "Chris",
        "Desc": "Already a ring on the finger.",
        "Song": "0u2P5u6lvoDfwTYjAADbn4",
        "img": "https://i.pinimg.com/236x/01/33/3c/01333c9ffa495ae06f30fe240af98784.jpg",
    },
    {
        "Name": "Asher",
        "Desc": "(Pool table not included.)",
        "Song": "5NvOZCjZaGGGL597exlQWv",
        "img": "https://i.pinimg.com/236x/4e/0c/d6/4e0cd65157e9d43de9bed2cafef03083.jpg",
    },
    {
        "Name": "Leo",
        "Desc": "Is that a car?",
        "Song": "4EuEFylz00BvZhpf6w7qYf",
        "img": "https://i.pinimg.com/236x/3f/44/6c/3f446c770209af3f2cfec9c4b8ae15be.jpg",
    },
    {
        "Name": "Chase",
        "Desc": "Looks serious...",
        "Song": "3GfOAdcoc3X5GPiiXmpBjK",
        "img": "https://i.pinimg.com/236x/05/b8/4b/05b84b57e25fff526357b166ae1298a5.jpg",
    },
    {
        "Name": "Dexter",
        "Desc": "Part emo?",
        "Song": "7j31rVgGX9Q2blT92VBEA0",
        "img": "https://i.pinimg.com/236x/6d/78/f9/6d78f975974705c5599a9bd08affa7cb.jpg",
    },
    {
        "Name": "Harry",
        "Desc": "Olivia stan",
        "Song": "4ZtFanR9U6ndgddUvNcjcG",
        "img": "https://i.pinimg.com/236x/dd/0c/3e/dd0c3ec62774686e7fa065e7d60b7a5f.jpg",
    },
    {
        "Name": "Cody",
        "Desc": "<b>DAMM.</b>",
        "Song": "6SRsiMl7w1USE4mFqrOhHC",
        "img": "https://i.pinimg.com/236x/80/29/a3/8029a3f267beaf2b2fe2d1760eb14abd.jpg",
    },
    {
        "Name": "Rick",
        "Desc": "Calvin Clein Rep<br>Unexpected phonk fan?",
        "Song": "1HWmTAw6BrGBrr1NGSDy9C",
        "img": "https://i.pinimg.com/236x/f5/88/b7/f588b7c2c519adeeaba04306c0a09ce9.jpg",
    },
    {
        "Name": "Matt",
        "Desc": "He's singing taylor rn",
        "Song": "0V3wPSX9ygBnCm8psDIegu",
        "img": "https://i.pinimg.com/236x/b0/d3/03/b0d30364114e646902c5527d2052d911.jpg",
    },
    {
        "Name": "Dan",
        "Desc": "He's '#4d2c1b' not ginger! <b><p style='color: #4d2c1b;'>(This)</p></b>",
        "Song": "1D4PL9B8gOg78jiHg3FvBb",
        "img": "https://i.pinimg.com/236x/50/99/84/509984174bae47c063295f1d2432bacb.jpg",
    },
    {
        "Name": "Finn",
        "Desc": "Why's he looking down...",
        "Song": "2AT8iROs4FQueDv2c8q2KE",
        "img": "https://i.pinimg.com/236x/92/d6/25/92d62584b5f0d6838181e7327538d5fc.jpg",
    },
    {
        "Name": "Isaac",
        "Desc": "Would be better without the distorted lighting, but:<h3>WOW</h3>",
        "Song": "2g1KggY9PKvsoEAOaiz4xx",
        "img": "https://i.pinimg.com/236x/31/f1/c1/31f1c19252f713654ab6b96046a31f4c.jpg",
    },
    {
        "Name": "Tristan",
        "Desc": "Greek god.",
        "Song": "4GRFzKI7jTZ3kbMfouc7bn",
        "img": "https://i.pinimg.com/564x/d3/41/68/d34168278e74f6931c92788697b5a4de.jpg",
				"DevTop": true

    },
    {
        "Name": "Brice",
        "Desc": "Surfer Boy >>",
        "Song": "0BO6iWcPj20UGEl224pHWA",
        "img": "https://i.pinimg.com/236x/42/60/1d/42601d3aa914fa202bb56560fea7d858.jpg",
    },
    {
        "Name": "Chad",
        "Desc": "Love the tatto",
        "Song": "7DbdUf8aHSYoliSjO6LZv6",
        "img": "https://i.pinimg.com/236x/1e/fd/f1/1efdf166e23896d18d347cf9fae68dc0.jpg",
    },
    {
        "Name": "Oliver",
        "Desc": "Moonlight Sonata",
        "Song": "6Im9k8u9iIzKMrmV7BWtlF",
        "img": "https://i.pinimg.com/236x/11/9e/68/119e686857e87f344358b57c4eca409c.jpg",
    },
    {
        "Name": "Tommy",
        "Desc": "Strong drinker",
        "Song": "3sqrvkNC6IPTIXvvbx9Arw",
        "img": "https://i.pinimg.com/236x/59/51/be/5951bef7bc48b47ba4be63df1cde0416.jpg",
    },
    {
        "Name": "Riley",
        "Desc": "Sorta roadman",
        "Song": "01kfSdF9zfcDLri5sSWEoL",
        "img": "https://i.pinimg.com/236x/31/ef/56/31ef56cb7aaa3e310e08e2d59f2db870.jpg",
    },
    {
        "Name": "Ollie",
        "Desc": "I just took a DNA test turns out",
        "Song": "3HWzoMvoF3TQfYg4UPszDq",
        "img": "https://i.pinimg.com/474x/fe/ac/28/feac28835e4757cbac1c6bb3e583fcc2.jpg",
    },
    {
        "Name": "Mike",
        "Desc": "Football Player",
        "Song": "6YdQgWSpsxhVeX6Xmv3IFJ",
        "img": "https://i.pinimg.com/236x/ad/52/5b/ad525b176088f51d3e2300da32775fa2.jpg",
    },
    {
        "Name": "Taylor",
        "Desc": "Damm<br>Doesn't even look like a mirror.",
        "Song": "6maTPqynTmrkWIralgGaoP",
        "img": "https://i.pinimg.com/236x/1e/3a/82/1e3a82951a9691fd30b69c834f86742d.jpg",
    },
    {
        "Name": "Travis",
        "Desc": "'Did you ever feel me? Would you ever picture us?'",
        "Song": "6AQbmUe0Qwf5PZnt4HmTXv",
        "img": "https://i.pinimg.com/236x/92/12/f4/9212f4a18b87f658ce6635483c215b48.jpg",
    },
    {
        "Name": "Tanner",
        "Desc": "Questionable...",
        "Song": "1Qrg8KqiBpW07V7PNxwwwL",
        "img": "https://i.pinimg.com/236x/2f/98/8a/2f988a2d5f76fa80d7a9fbef64b0b304.jpg",
    },
    {
        "Name": "Connor",
        "Desc": "'i met him at the bar it was 12 or something'",
        "Song": "5mHdCZtVyb4DcJw8799hZp",
        "img": "https://i.pinimg.com/236x/49/df/e8/49dfe84c83ff976a16f1b0ea959029d2.jpg",
    },
    {
        "Name": "Charlie",
        "Desc": "Could look normal sitting on a random wooden chair in the middle of any alleyway.",
        "Song": "2r7BOWS3bEYjEUbLiH8kVM",
        "img": "https://i.pinimg.com/474x/96/5e/09/965e0915cecb8699950bf7c459a6b0bd.jpg",
    },
    {
        "Name": "Dwayne",
        "Desc": "Hard working guy",
        "Song": "5vOWdyk23iqRryEmbNCrCp",
        "img": "https://i.pinimg.com/236x/55/b5/54/55b5540a5462c9047d4c2900ae60d2b0.jpg",
    },
    {
        "Name": "Jake",
        "Desc": "Unknown Identity..?",
        "Song": "7i9763l5SSfOnqZ35VOcfy",
        "img": "https://i.pinimg.com/236x/70/84/5c/70845c2f808c348ab278e67a2ee43518.jpg",
    },
    {
        "Name": "Elliott",
        "Desc": "Straight out of a Netflix series.",
        "Song": "6HgWWaMu31KdOpEG5l28BG",
        "img": "https://i.pinimg.com/236x/d1/aa/d7/d1aad7b841d5f754c638f94be86b4e63.jpg",
    },
    {
        "Name": "Jesse",
        "Desc": "The bus is waiting for him, not the other way around.",
        "Song": "6BePGk3eCan4FqaW2X8Qy3",
        "img": "https://i.pinimg.com/236x/c7/72/40/c772404322bff6e4e8ffecf7b95d6768.jpg",
    },
    {
        "Name": "Kyle",
        "Desc": "He's clearly ready for something...",
        "Song": "6UN73IYd0hZxLi8wFPMQij",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X7nR10vBuvXKVWm7-o-hH1mJaEGXDL_Cxg&usqp=CAU",
    },
    {
        "Name": "Conan",
        "Desc": "<h3><b>Wow</b></h3>'All my fortunes at thy foot I'll lay, and follow thee my lord throughout the world.'<br>100% The best option",
        "Song": "7KJXiuMXQu723ODChoxENp",
        "img": "https://i.pinimg.com/736x/f3/98/7d/f3987daa4b6ea166eb0259623db6922a.jpg",
		"DevTop": true

    },
    {
        "Name": "Evan",
        "Desc": "Going for a swim",
        "Song": "5eTaQYBE1yrActixMAeLcZ",
        "img": "https://i.pinimg.com/originals/12/c7/3c/12c73ce521e8d4e9df4d68168923b746.png",
    },
    {
        "Name": "Keanu",
        "Desc": "'Where your clothes at?'",
        "Song": "0rKtyWc8bvkriBthvHKY8d",
        "img": "https://i.pinimg.com/originals/46/cd/90/46cd90b0e63c40a321f4f9181bc1da17.jpg",
    },
    {
        "Name": "Khalil",
        "Desc": "Looks like an olympic swimmer.",
        "Song": "7umZiitjVsEjMQ6HNddpUI",
        "img": "https://i.pinimg.com/736x/06/0e/ca/060ecafabdbebef0af6653bb1a2d1815--trunks-moment.jpg",
    },
    {
        "Name": "Logan",
        "Desc": "Head of the football team.",
        "Song": "5EV4bGHxVN0kHpcAFvgnTt",
        "img": "https://pbs.twimg.com/media/FUfdUKqXwAMFJIP.jpg",
    },
	{
		"Name": "Mr Adnan",
		"Desc": "Very wise man, and someone's dad.\n<br><a href='https://youtu.be/iYSNYKLgwR8'>His other song</a>",
		"Song": "0cGG2EouYCEEC3xfa0tDFV",
		"img": "https://cdn.discordapp.com/attachments/723089422530117632/1115419762260983890/Screenshot_20230606_001925_Photos.jpg",
        "Hunnains Dad": true,
        "DevTop": true,
        "Gallery Model": [],
        "Singer": true,
        "Actor": true,
        "Famous": true
	},
	
	// Am's Contribution
	{
		"Name": "Gerard Way",
		"Desc": "lead singer and creator of american rock band 'My Chemical Romance'",
		"Song": "7lRlq939cDG4SzWOF4VAnd",
		"img": "https://i.pinimg.com/564x/dd/aa/be/ddaabed26ef102508dd90db85cdf8866.jpg",
		"Author": "Pancake",
	},
	
	{
		"Name": "Chris",
		"Desc": "Dressed to go out",
		"Song": "0cGG2EouYCEEC3xfa0tDFV",
		"img": "https://i.pinimg.com/474x/fc/b8/a0/fcb8a0478f36ef9db91947b4780233ff.jpg",
		"Author": "Pancake",
	},
	
	{
		"Name": "Shah Rukh Khan",
		"Desc": "Indian actor and film producer",
		"Song": "2UXqAinFTSFA3Y0nlWPHQn",
		"img": "https://i.pinimg.com/474x/1f/ce/9a/1fce9a456f1a9d20f48c2bf8aa1f6e15.jpg",
		"Author": "Pancake"
    },

	{
		"Name": "Bill Kaulitz",
		"Desc": "German singer and songwriter, in band Tokio Hotel.",
		"Song": "32Ky5QCRtwYJJXuLwoGufj",
		"img": "https://i.pinimg.com/474x/c3/42/56/c3425665c45b0635f2eeb5f2a41da1b7.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Andy Biersack",
		"Desc": "American singer, the founder and lead vocalist of the rock band Black Veil Brides.",
		"Song": "2ZhswJTKMkNNTAjrTmPhOJ",
		"img": "https://i.pinimg.com/474x/91/fb/0c/91fb0c6f485fb84fd805c97985f01b15.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Johnnie Guilbert",
		"Desc": "American YouTuber, musician, vlogger, and actor",
		"Song": "169VLFi45YohKwBEZyCewN",
		"img": "https://i.pinimg.com/474x/74/4f/02/744f029d91a70e20e81926af1642eaf6.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Jake Webber",
		"Desc": "American YouTuber, musician and vlogger",
		"Song": "7tJUdXtpwbDU0mxw0IBBWv",
		"img": "https://i.pinimg.com/474x/e2/5e/f1/e25ef12e36f092517297642c74839b97.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Tyson",
		"Desc": "Godly",
		"Song": "01kfSdF9zfcDLri5sSWEoL",
		"img": "https://i.pinimg.com/474x/c0/44/8b/c0448b9088024ccb66ef01175412dbcf.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Gackt",
		"Desc": "Japanese musician, singer, songwriter, record producer and actor",
		"Song": "75Frd3MMVwG2j3eMBdZVvl",
		"img": "https://i.pinimg.com/474x/10/7a/c1/107ac1c7f4e54077153f052317a858d5.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Johnny Depp",
		"Desc": "American actor and is the recipient of multiple accolades",
		"Song": "1HXchhExSIsJODlUyAXPlB",
		"img": "https://i.pinimg.com/474x/9c/59/75/9c59754fc841f8d663f8e18c5faed645.jpg",
		"Author": "Pancake",
		"Famous": true,
		"SocialLinks": "<a href='https://www.instagram.com/johnnydepp/'>Instagram</a> <a href='https://www.facebook.com/JohnnyDepp/'>Facebook</a> <a href='https://www.tiktok.com/@johnnydepp'>TikTok</a>",
		"Actor": true
	},
	
	{
		"Name": "Frank Iero",
		"Desc": "American musician who is the rhythm guitarist and backup vocalist of My Chemical Romance, guitarist in L.S. Dunes and lead vocalist of Leathermouth",
		"Song": "4kXHIm097G3CemN3PzcpgL",
		"img": "https://i.pinimg.com/474x/eb/6a/c5/eb6ac56ff988be078256b86ca536e313.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Atsushi Sakurai",
		"Desc": "Japanese musician and singer-songwriter of the band Buck-Tick",
		"Song": "1f6sBdxffdtzsYwJTeHWr1",
		"img": "https://i.pinimg.com/474x/0a/a2/61/0aa26144f2fa22e92c5c8fcbb78cf2f6.jpg",
		"Author": "Pancake"
	},
	
	{
		"Name": "Jann",
		"Desc": "Polish Singer, gladiator.",
		"Song": "5QGhOS4dpiSdcwuqnWzpxE",
		"img": "https://i.pinimg.com/236x/d0/cb/e2/d0cbe2c1c23f76ee9f19a345a23c492d.jpg",
		"Famous": true,
		"Gallery Model": [94],
		"SocialLinks": "<a href='https://www.instagram.com/jann_music_/?hl=en'>Instagram</a>",
		"Singer": true,
				"DevTop": true
	},
	
	{
		"Name": "Manu Rios",
		"Desc": "Best known for acting 'patrick' in the amazing series Elite.",
		"Song": "1vxw6aYJls2oq3gW0DujAo",
		"img": "https://i.pinimg.com/236x/3e/5c/1d/3e5c1d8bc3dc748a5a942610479c4335.jpg",
		"Famous": true,
		"Actor": true,
		"SocialLinks": "<a href='https://www.instagram.com/manurios/'>Instagram</a>",
        "Gallery Model": [102]
	},
	
	{
		"Name": "Saniya",
		"Desc": "Butterflies (the earings ofc)",
		"Song": "3kXoKlD84c6OmIcOLfrfEs",
		"img": "https://i.pinimg.com/736x/21/82/93/218293fbbefb9781a4b87fc0fad7f40a.jpg"
	},
	
	{
		"Name": "Dayker",
		"Desc": "Star wars fan.",
		"Song": "0DMRKqrpd0QO4RWiEdMib0",
		"img": "https://i.pinimg.com/236x/fa/fc/a6/fafca62e97a5804ae39118c23234f9f4.jpg"
	},
	
	{
		"Name": "Shayne",
		"Desc": "The phone is a contrast",
		"Song": "0DMRKqrpd0QO4RWiEdMib0",
		"img": "https://i.pinimg.com/564x/da/8e/a8/da8ea83b7e4a066f67e5cdd08562ed06.jpg"
	},
	
	{
		"Name": "Jann",
		"Desc": "Eurovision 2023 Contestant.",
		"Song": "0vbp3qthXlRVsLXTbPrkX1",
		"img": "https://i.pinimg.com/564x/d9/77/23/d977230d4d16eea1fa14d674eb24b909.jpg",
		"Gallery Model": [89],
		"Famous": true,
		"SocialLinks": "<a href='https://www.instagram.com/jann_music_/?hl=en'>Instagram</a>",
		"Singer": true,
		"DevTop": true
	},
	
	{
		"Name": "Luke Newton",
		"Desc": "'Hottest actor in the lodge'",
		"Song": "4GF00uRxC4ECrxNEbnapqf",
		"img": "https://i.pinimg.com/564x/25/89/e9/2589e96163f65822eddfd100a60b51e5.jpg",
		"Author": "Fambuild",
		"Actor": true,
		"Famous": true
	},
	
	{
		"Name": "Louis Tomlinson",
		"Desc": "He rose to fame as a member of the boy band One Direction.",
		"Song": "7F9vK8hNFMml4GtHsaXui6",
		"img": "https://i.pinimg.com/564x/cb/62/8b/cb628bcca783404580362815e7908be7.jpg",
		"Author": "Fambuild",
		"Famous": true,
		"Singer": true
	},

    {
        "Name": "Dominik",
        "Desc": "N23, K488.<br>RIP.",
        "Song": "0KKE99yOmi67n590TDOWmh",
        "img": "https://i.pinimg.com/236x/9a/d4/a8/9ad4a84fb27cd9d2f08a8c1e235adf7b.jpg",
        "DevTop": true
    },

    {
        "Name": "Caleb",
        "Desc": "Accute spidey senses.",
        "Song": "7DcJ6fEBb7BaKuYKTwiDxK",
        "img": "https://i.pinimg.com/236x/08/98/7c/08987c44b2a48779de53af40bfb3d569.jpg",
        "DevTop": true
    },

    {
        "Name": "Kyle",
        "Desc": "Heart Eyes <3",
        "Song": "3jfZ9M23l0L7RxzYMTgBTv",
        "img": "https://i.pinimg.com/236x/3b/7f/fd/3b7ffd611af7dc4c873e7279d6d4d9c5.jpg",
    },

    {
        "Name": "Matino",
        "Desc": "Stary Night",
        "Song": "0aVM2DspPoHNTDBm7ehySx",
        "img": "https://i.pinimg.com/236x/46/05/4a/46054a398cc485ed69f85063cba7ab2c.jpg"
    },

    {
        "Name": "Nick",
        "Desc": "Hurt",
        "Song": "2vWBUC9djv6BtiGlmKiQaH",
        "img": "https://i.pinimg.com/564x/09/40/8a/09408a6b9b239251b5427a7828fcb31c.jpg"
    },

    {
        "Name": "Manu Rios",
        "Desc": "From 'Elite'.",
        "Song": "1vxw6aYJls2oq3gW0DujAo",
        "img": "https://i.pinimg.com/564x/f8/d1/20/f8d120332d1dd23b5dd8abddf3e420dd.jpg",
		"Famous": true,
		"Actor": true,
		"SocialLinks": "<a href='https://www.instagram.com/manurios/'>Instagram</a>",
        "Gallery Model": [90]
    },

    {
        "Name": "Chad",
        "Desc": "God bless USA.",
        "Song": "6etwirSInfuJrSOlogS6Sh",
        "img": "https://i.pinimg.com/564x/f5/12/4c/f5124cb861e83a3fd9c7dc75611e67a4.jpg"
    },

    {
        "Name": "Lean",
        "Desc": "A man who knows what he wants.",
        "Song": "1c5CllrZr45UBhWpIqM332",
        "img": "https://i.pinimg.com/564x/03/da/02/03da02aced1048d02d74829a036c46b4.jpg"
    },

    {
        "Name": "Tony",
        "Desc": "Regular gym frequenter.",
        "Song": "1ixbwbeBi5ufN4noUKmW5a",
        "img": "https://i.pinimg.com/564x/aa/e8/e4/aae8e45fb09ea4ce34c11e0e78a741a5.jpg"
    },

    {
        "Name": "Ethan Wacker",
        "Desc": "Ethan Wacker (@ethanwacker) on TikTok",
        "Song": "3vkQ5DAB1qQMYO4Mr9zJN6",
        "img": "https://i.pinimg.com/564x/19/71/c2/1971c2a06c8c5999ed6dfadc92ddfb3a.jpg",
        "SocialLinks": "<a href='https://www.tiktok.com/@ethanwacker'>TikTok</a>",
        "Famous": true,
    },

    {
        "Name": "Lembro",
        "Desc": "Greek God",
        "Song": "6I9VzXrHxO9rA9A5euc8Ak",
        "img": "https://i.pinimg.com/750x/12/51/ba/1251ba1906de012fa5067c7026f2030e.jpg",
    },

    {
        "Name": "Jule",
        "Desc": "On holiday somewhere",
        "Song": "3C0nOe05EIt1390bVABLyN",
        "img": "https://i.pinimg.com/564x/a0/6f/ba/a06fba2bb4615bb39988dbf6e38e24b5.jpg"
    },

    {
        "Name": "Jashlem",
        "Desc": "Someone, somewhere.",
        "Song": "0U10zFw4GlBacOy9VDGfGL",
        "img": "https://i.pinimg.com/564x/5c/9c/4b/5c9c4be0de18fa4462372552af8b3e11.jpg"
    },

    {
        "Name": "Kai",
        "Desc": "So many necklace's.",
        "Song": "0CJ1quCQhVX9Ax2jYwwovA",
        "img": "https://i.pinimg.com/564x/26/85/0a/26850a0f108ffee8f23b610766140fa0.jpg"
    },

    {
        "Name": "Liam Payne",
        "Desc": "English singer",
        "Song": "4Ro98RCK90oHqqSZUnTFq5",
        "img": "https://i.pinimg.com/564x/f6/fd/53/f6fd53f5fe278b8fb5aba604656755b2.jpg",
        "Author": "Fambuild",
        "Singer": true
    },

    {
        "Name": "Niall Horan",
        "Desc": "Singer",
        "Song": "1yHVHoz6Ny29gbbWJYVnFt",
        "img": "https://i.pinimg.com/236x/2c/18/3b/2c183b6a831c9904d1cde711ed907ab4.jpg",
        "Author": "Fambuild",
        "Singer": true
    },

    {
        "Name": "Harry Styles",
        "Desc": "Singer",
        "Singer": true,
        "Song": "6UelLqGlWMcVH1E5c4H7lY",
        "img": "https://i.pinimg.com/236x/63/5c/7b/635c7bef401d5509ecf6662249818219.jpg",
        "Author": "Fambuild",
        "Famous": true
    },
	
    {
        "Name": "Zayn",
        "Desc": "Idk who this is",
        "Song": "0rzaRSujxA0bKyjJl6vHYq",
        "img": "https://i.pinimg.com/236x/96/b2/b1/96b2b12cec3a3222b2197aedbdf1fd9c.jpg",
        "Author": "Fambuild"
    },

    {
        "Name": "Sangheon lee",
        "Desc": "From XO Kitty.",
        "Song": "0o9zmvc5f3EFApU52PPIyW",
        "img": "https://i.pinimg.com/564x/bc/12/30/bc1230f4b3bf7418a13918afe0afaa58.jpg",
        "Author": "Fambuild"
    },

    {
        "Name": "Tony",
        "Desc": "What's he hiding..",
        "Song": "3bNv3VuUOKgrf5hu3YcuRo",
        "img": "https://i.pinimg.com/564x/33/34/3f/33343fa28a327d2280df370ba0b9df5c.jpg",
        "Author": "SetAsync"
    },

    {
        "Name": "Nate",
        "Desc": "\"You're so beautiful\"",
        "img": "https://i.pinimg.com/564x/eb/21/f6/eb21f6c5c5f7a3f1091497db4a39de34.jpg",
        "Song": "6wf7Yu7cxBSPrRlWeSeK0Q",
        "Author": "SetAsync"
    }
]

let SONGARRAY = [
["Lana Del Rey - Peppers","peppers.mp3"],
["Streets - Doja Cat","streets.mp3"],
["Babydoll - Ari", "babydoll.mp3"],
["Raining Men - Weather Girls", "rainingmen.mp3"]
]

let BADGES_KEYS = ["Singer"]
let BADGES = {
    "Singer": "This badge is provided to characters who are singers.",
    "Famous": "This badge is provided to characters who are well known.",
    "Gallery Model": "This badge is provided to characters who have more than one picture on the gallery.",
    "DevTop": "This badge is provided to the best",
    "Hunnains Dad": "This badge is given to men who are Hunnains Dad.."
}

let AUTHORS = {
    "SetAsync": {
        "About": "Creator of the site and default 'Author' of all unassigned characters.",
        "SocialLinks": "<p>MY WEBSITE: WWW.SETASYNC.ME</p>"
    },
    "Fambuild": {
        "About": "Got a weird attraction to louis..<br>Fambuild#2364"
    },
    "Pancake": {
        "About": "Pancake#8026"
    }
}

// Mobile Handler

function CheckOrientation() {
    console.log(window.orientation);
    if (window.orientation === 0 || window.orientation === 180) {
        let PAGENAME = window.location.href.split("/")
		PAGENAME = PAGENAME[PAGENAME.length-1]
		window.location.href = "error.html?redirect="+PAGENAME;
    }
}

window.addEventListener("orientationchange", CheckOrientation);
CheckOrientation();
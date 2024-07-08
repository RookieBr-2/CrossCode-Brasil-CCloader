ig.module("impact.feature.bgm.bgm-PTBR")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      "salaDeTradutores": {
        path: "media/bgm/salaDeTradutores.ogg",
        loopEnd: 128.000,
        volume: 1.0
      },
    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
      salaPTBR: {
        field: {
          track: "salaDeTradutores",
          volume: 1,
        },
        battle: {
          track: "salaDeTradutores",
          volume: 1,
        },
    		rankBattle: {
    			track: "salaDeTradutores",
    			volume: 1
    		},
    		sRankBattle: {
    			track: "salaDeTradutores",
    			volume: 1,
    		}
      }

    });
  });
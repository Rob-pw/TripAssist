var tripAssist = angular.module('tripAssist', []);

tripAssist.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

tripAssist.factory('drugsFactory', function(){
	var drugs = [
	  {
	    "name": "LSD",
	    "category": "Psychedelics",
	    "combinations": {
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": "Candyflip"
	      },
	      "Cocaine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    },
	    "example": "Hoffman-blotter.jpg"
	  },
	  {
	    "name": "Mushrooms",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": "Hippieflip"
	      },
	      "Cocaine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    },
	    "example": "mushrooms-magic.jpg"
	  },
	  {
	    "name": "DMT",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & Synergy",
	        "nickname": "Ayahuasca"
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    },
	    "example": "Dimethyltryptamine_Crystals_15777.jpg"
	  },
	  {
	    "name": "Mescaline",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "DOx",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "NBOMes",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "2C-x",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "2C-T-x",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "αMT",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Cannabis",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Ibogaine",
	    "category": "Psychedelics",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Deadly",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Ketamine",
	    "category": "Dissociatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "MXE",
	    "category": "Dissociatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "DXM",
	    "category": "Dissociatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "PCP",
	    "category": "Dissociatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Nitrous Oxide",
	    "category": "Dissociatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Amphetamines",
	    "category": "Stimulants",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "MDMA",
	    "category": "Stimulants",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Synergy",
	        "nickname": "Candyflip"
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": "Hippieflip"
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Cocaine",
	    "category": "Stimulants",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": "Speedball"
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Caffeine",
	    "category": "Stimulants",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Alcohol",
	    "category": "Sedatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Unsafe",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "GHB/GBL",
	    "category": "Sedatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Opioids",
	    "category": "Sedatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Deadly",
	        "nickname": "Speedball"
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Tramadol",
	    "category": "Sedatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Meperidine",
	    "category": "Sedatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "Benzodiazepines",
	    "category": "Sedatives",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "MAOIs",
	    "category": "Antidepressants",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Synergy",
	        "nickname": "Ayahuasca"
	      },
	      "Mescaline": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & Synergy",
	        "nickname": ""
	      },
	      "SSRIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  },
	  {
	    "name": "SSRIs",
	    "category": "Antidepressants",
	    "combinations": {
	      "LSD": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mushrooms": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "DMT": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Mescaline": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "DOx": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "NBOMes": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "2C-x": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "2C-T-x": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "αMT": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Cannabis": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Ibogaine": {
	        "result": "Deadly",
	        "nickname": ""
	      },
	      "Ketamine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MXE": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "DXM": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "PCP": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Nitrous Oxide": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Amphetamines": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MDMA": {
	        "result": "Safe & Decrease",
	        "nickname": ""
	      },
	      "Cocaine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Caffeine": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Alcohol": {
	        "result": "Unsafe",
	        "nickname": ""
	      },
	      "GHB/GBL": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "Opioids": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Tramadol": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Meperidine": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      },
	      "Benzodiazepines": {
	        "result": "Safe & No Synergy",
	        "nickname": ""
	      },
	      "MAOIs": {
	        "result": "Serotonin Syndrome",
	        "nickname": ""
	      }
	    }
	  }
	];

	return {
		drugs : drugs
	};
});

tripAssist.controller('drugsController', function($scope, drugsFactory) {
	$scope.drugsList = drugsFactory.drugs;
	window.foo = $scope.drugsList;

	$scope.drugName = "";
});
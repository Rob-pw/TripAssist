var arrayOfTables = [],
  rows = document.querySelectorAll('#tblMain tbody tr'),
  max = rows.length - 6,
  drugs = {},
  key = {
    "s19" : "Psychedelics",
    "s20" : "Dissociatives",
    "s21" : "Stimulants",
    "s22" : "Sedatives",
    "s23" : "Antidepressants",
    "s24" : "N/A",
    "s25" : "Safe & Synergy",
    "s26" : "Safe & No Synergy",
    "s27" : "Safe & Synergy",
    "s28" : "Safe & Decrease",
    "s29" : "Serotonin Syndrome",
    "s30" : "Unsafe",
    "s31" : "Deadly",
    "s32" : "Safe & No Synergy",
    "s33" : "Deadly"
  },
  drugsIndex = [];

function Drug(properties) {
  this.name = properties.name;
  this.category = properties.category || "Unknown";
  this.combinations = properties.combinations || {};
};

for(var y = 7, true_y = -1; y < max; y += 1, true_y += 1) {
  var header = y === 7 ? true : false;
  var true_x = 0;
  var tableData = rows[y].querySelectorAll('td');
  var arrayOfTableData = Array.prototype.slice.call(tableData).slice(3, tableData.length - 2);
  
  arrayOfTableData.forEach(function (element, x, array) {
    var currentClass = element.classList[0],
      innerText = element.innerText,
      currentKey = key[currentClass],
      currentCombo;

    if(header) {
      if(!drugs[innerText]) {
        drugs[innerText] = new Drug({
          category: currentKey,
          name: innerText
        });
        drugsIndex.push(innerText);
      }
    } else {
      if(true_y !== true_x) {
        var currentDrug = drugs[drugsIndex[true_y]],
          comboDrug = drugs[drugsIndex[true_x]];
        
        if(!currentKey) {
          console.log(element);
        }

        currentDrug.combinations[comboDrug.name] = {
          result: currentKey,
          nickname: innerText 
        };
      }
    }

    true_x += 1;
    
  });
};